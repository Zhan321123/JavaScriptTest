import {useState} from "react";

const row = {
  display: 'flex',
  width: '300px'
}
const piece = {
  lineHeight: '100px',
  textAlign: 'center',
  fontSize: '50px',
  fontWeight: 'bold'
}

function ChessBoard() {
  const [states, setStates] = useState(Array(9).fill(null))
  const [who, setWho] = useState(false)

  function handleClick(index) {
    const newStates = [...states]
    if (newStates[index] === null) {
      newStates[index] = who ? 'X' : 'O'
      setWho(!who)
      setStates(newStates)
    }
  }

  return (
    <>
      <div style={row}>
        <Cell state={states[0]} handleClick={() => handleClick(0)}></Cell>
        <Cell state={states[1]} handleClick={() => handleClick(1)}></Cell>
        <Cell state={states[2]} handleClick={() => handleClick(2)}></Cell>
      </div>
      <div style={row}>
        <Cell state={states[3]} handleClick={() => handleClick(3)}></Cell>
        <Cell state={states[4]} handleClick={() => handleClick(4)}></Cell>
        <Cell state={states[5]} handleClick={() => handleClick(5)}></Cell>
      </div>
      <div style={row}>
        <Cell state={states[6]} handleClick={() => handleClick(6)}></Cell>
        <Cell state={states[7]} handleClick={() => handleClick(7)}></Cell>
        <Cell state={states[8]} handleClick={() => handleClick(8)}></Cell>
      </div>
    </>
  )
}

function Cell({state, handleClick}) {
  return (
    <button onClick={() => handleClick(state)}
            style={{width: '100px', height: '100px', border: '1px solid #000'}}>
      {<div style={piece}>{state}</div>}
    </button>
  )
}


function Test1() {
  return (
    <div style={{width: '80%', margin: '0 auto'}}>
      <h1 style={{textAlign: 'center'}}><img src="./logo.svg" height={80} alt="logo" style={{verticalAlign: 'middle'}}/>井字棋
      </h1>
      <ChessBoard></ChessBoard>
    </div>
  )
}

export default Test1
