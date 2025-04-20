import {useEffect, useState} from "react";
import {retry} from "@reduxjs/toolkit/query";

function usePointerPosition() {
  const [position, setPosition] = useState({x: 0, y: 0})
  useEffect(() => {
    function handleMove(e) {
      setPosition({x: e.clientX, y: e.clientY})
    }

    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  },)
  return position
}


function useDelayValue(value, delay) {
  const [delayedValue, setDelayedValue] = useState(value)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayedValue(value)
    }, delay)
  }, [value, delay])
  return delayedValue
}

function Dot({position, opacity}) {
  return (
    <div style={{
      position: 'absolute',
      left: position.x,
      top: position.y,
      width: 30,
      height: 30,
      backgroundColor: 'red',
      opacity: opacity,
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)'
    }}></div>
  )
}

export default function Test4() {
  const pos1 = usePointerPosition()
  const delay = 15
  const pos2 = useDelayValue(pos1, delay)
  const pos3 = useDelayValue(pos2, delay * 2)
  const pos4 = useDelayValue(pos3, delay * 3)
  const pos5 = useDelayValue(pos4, delay * 4)
  const pos6 = useDelayValue(pos5, delay * 5)
  const pos7 = useDelayValue(pos6, delay * 6)
  const pos8 = useDelayValue(pos7, delay * 7)
  const pos9 = useDelayValue(pos8, delay * 8)
  const posList = [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9]


  const arr = posList.map((_, i) => 1 - i / 10);

  return (
    <>
      {arr.map((item, index) => <Dot position={posList[index]} opacity={item}></Dot>)}
    </>
  )
}