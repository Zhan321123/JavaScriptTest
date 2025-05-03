import React, {useEffect, useRef} from "react";
import '@/css/NotFound.scss'

interface Pos {
  x: number,
  y: number
}

interface V {
  vx: number,
  vy: number
}

function Drift({startPos, startV, children}: { startPos: Pos, startV: V, children: React.ReactNode }) {

  const ref = useRef(null)
  const [position, setPosition] = React.useState(startPos);
  const [v, setV] = React.useState(startV);
  useEffect(() => {
    const div = ref.current;
    const width = div.offsetWidth;
    const height = div.offsetHeight;
    const timer = setInterval(() => {
      let newX = position.x + v.vx;
      let newY = position.y + v.vy;

      if (newX > window.innerWidth - 10 - width || newX < 0) {
        setV((prevV) => ({
          vx: -prevV.vx,
          vy: prevV.vy,
        }));
      }
      if (newY > window.innerHeight - 10 - height || newY < 0) {
        setV((prevV) => ({
          vx: prevV.vx,
          vy: -prevV.vy,
        }));
      }

      setPosition({
        x: newX,
        y: newY,
      })
    }, 40);
    return () => {
      clearInterval(timer);
    };
  }, [position]);
  return <div ref={ref} style={{
    position: "absolute",
    top: position.y,
    left: position.x,
  }}>
    <code style={{fontSize: "80px",transition: "none",margin: 0,padding: 0,}}>{children}</code>
  </div>
}

export default function NotFound() {
  return (<>
    <div>
      <Drift startPos={{x: 0, y: 0}} startV={{vx: 1, vy: 1}}>404</Drift>
      <Drift startPos={{x: 200, y: 0}} startV={{vx: 2, vy: 1}}>Not</Drift>
      <Drift startPos={{x: 0, y: 200}} startV={{vx: 1, vy: 2}}>Found</Drift>
    </div>
    <div className={"center between"} style={{
      flexDirection: "column",
    }}>
      <h1 style={{fontSize: "30px",fontFamily:"console serif"}}>{document.documentURI}</h1>
      <h2 className={"alternate"} style={{fontSize: "25px"}}>I have no this url.</h2>
    </div>
  </>)
};