import {useEffect, useState} from "react";

function Element({angle, posX, posY}) {
  return (
    <div style={{
      position: 'absolute',
      left: posX,
      top: posY,
      backgroundColor: 'red',
      width: 30,
      height: 30,
      transform: `rotate(${angle}deg)`,
    }}></div>
  )
}


export default function Test5() {
  const [attribute, setAttribute] = useState({angle: 0, posX: 100, posY: 300})
  useEffect(() => {
    const timer = setInterval(() => {
      attribute.angle += 1
      attribute.posX += 1
      attribute.posY += 1
      setAttribute({...attribute})
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <>
      <Element angle={attribute.angle} posX={attribute.posX} posY={attribute.posY}></Element>
    </>
  )
}