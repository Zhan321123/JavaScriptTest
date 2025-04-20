import {useEffect, useState} from "react";
import styled from "styled-components";

const language = ["JavaScript", "Java", "Python", "C++", "C", "C#", "PHP", "Ruby", "Go", "Swift", "Kotlin", "Rust", "Scala", "Perl", "Lua", "R", "Haskell", "Lisp", "Pascal", "Objective-C", "Assembly", "TypeScript", "SQL"]

function Box({styles, children}) {

  return (
    <div style={{
      position: "fixed",
      transform: "translate(-50%, -50%)",
      left: styles.left,
      top: styles.top,
      opacity: styles.opacity,
      display: styles.display,
    }}><span style={{color: "red"}}>❤</span><strong> {children} </strong><span style={{color: "red"}}>❤</span></div>
  )
}

export default function Test7() {
  const [isBlock, setIsBlock] = useState(true)
  const [transparent, setTransparent] = useState(1)
  const [position, setPosition] = useState({x: 0, y: 0})
  const [rise, setRise] = useState(0)
  const [content, setContent] = useState("")

  function click(event) {
    setIsBlock(false)
    setPosition({x: event.clientX, y: event.clientY})
    setTransparent(1)
    setRise(0)

    // const content = language[Math.floor(Math.random() * language.length)]
    const content = new Date().toLocaleTimeString()
    setContent(content)
  }

  useEffect(() => {
    window.addEventListener('click', click)
    const timer = setTimeout(() => {
      setIsBlock(true)
    }, 1000)
    const interval = setInterval(() => {
      setTransparent(transparent - 0.01)
      setRise(rise => rise + 1)
    }, 10)
    return () => {
      window.removeEventListener('click', click)
      clearTimeout(timer)
      clearInterval(interval)
    }
  },)

  return (
    <Box styles={{
      left: position.x,
      top: position.y - rise,
      opacity: transparent,
      display: transparent<=0 ? "none" : "block",
    }}>{content}</Box>
  )
}
