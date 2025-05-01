import React from "react";
import {JSX, useReducer, useState} from "react";
import {useImmer, useImmerReducer} from "use-immer"

const initMessage = () => [
  {id: 0, name: 'zhan', mess: ''},
  {id: 1, name: 'jin', mess: ''},
  {id: 2, name: 'lin', mess: ''}
]

function AllInReact(): JSX.Element {
  /**
   * 只用useState实现聊天室
   */

  const [message, setMessage] = useState(initMessage())
  const [id, setId] = useState(0)
  return (
    <>
      <hr/>
      <div style={{display: 'flex'}}>
        <ul>
          {message.map(item =>
            <li key={item.id}>
              {item.id !== id ?
                <button onClick={() => setId(item.id)}>{item.name}</button> :
                <button disabled>{item.name}</button>}
            </li>
          )}
        </ul>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <textarea name="" id="" cols={30} rows={5} value={message[id].mess}
                    placeholder={`chat with ${message[id].name}`} onChange={e => {
            const m = [...message,]
            m[id].mess = e.target.value
            setMessage(m)
          }}></textarea>
          <button onClick={() => {
            alert(`to ${message[id].name} say:${message[id].mess}`)
            const m = [...message]
            m[id].mess = ''
            setMessage(m)
          }}>send
          </button>
        </div>
      </div>
    </>
  )
}

function Immer() {
  /**
   * 借助useImmer简化setState
   */
  const [message, updateMessage] = useImmer(initMessage())
  const [id, setId] = useState(0)
  return (
    <>
      <hr/>
      <div style={{display: 'flex'}}>
        <ul>
          {message.map(item =>
            <li key={item.id}>
              {item.id !== id ?
                <button onClick={() => setId(item.id)
                }>{item.name}</button> :
                <button disabled>{item.name}</button>}
            </li>
          )}
        </ul>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <textarea name="" id="" cols={30} rows={5} value={message[id].mess}
                    placeholder={`chat with ${message[id].name}`} onChange={e => {
            updateMessage(message => {
              message[id].mess = e.target.value
            })
          }}></textarea>
          <button onClick={() => {
            alert(`to ${message[id].name} say:${message[id].mess}`)
            updateMessage(message => {
              message[id].mess = ''
            })
          }}>send
          </button>
        </div>
      </div>
    </>
  )
}

const messageReducer = (state: any[], action: {type: string, id: number, mess: string}) => {
  switch (action.type) {
    case 'edit': {
      const m = [...state]
      m[action.id].mess = action.mess
      return m
    }
    case 'send': {
      const m = [...state]
      m[action.id].mess = ''
      return m
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function Reducer() {
  /**
   * 使用Reducer封装setState
   */
  const [message, dispatchMessage] = useReducer(messageReducer, initMessage())
  const [id, setId] = useState(0)

  return (
    <>
      <hr/>
      <div style={{display: 'flex'}}>
        <ul>
          {message.map(item =>
            <li key={item.id}>
              {
                <button disabled={item.id === id} onClick={() => setId(item.id)
                }>{item.name}</button>
              }
            </li>
          )}
        </ul>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <textarea name="" id="" cols={30} rows={5} value={message[id].mess}
                    placeholder={`chat with ${message[id].name}`} onChange={e => {
            dispatchMessage({type: 'edit', id: id, mess: e.target.value})
          }}></textarea>
          <button onClick={() => {
            alert(`to ${message[id].name} say:${message[id].mess}`)
            dispatchMessage({type: 'send', id: id, mess: ''})
          }}>send
          </button>
        </div>
      </div>
    </>
  )
}

const messageImmerReducer = (state, action) => {
  switch (action.type) {
    case 'edit': {
      state[action.id].mess = action.mess
      break
    }
    case 'send': {
      state[action.id].mess = ''
      break
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function ImmerReducer() {
  const [message, updateDispatchMessage] = useImmerReducer(messageImmerReducer, initMessage())
  const [id, setId] = useState(0)
  return (
    <>
      <hr/>
      <div style={{display: 'flex'}}>
        <ul>
          {message.map(item =>
            <li key={item.id}>
              {
                <button disabled={item.id === id} onClick={() => setId(item.id)
                }>{item.name}</button>
              }
            </li>
          )}
        </ul>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <textarea name="" id="" cols={30} rows={5} value={message[id].mess}
                    placeholder={`chat with ${message[id].name}`} onChange={e => {
            updateDispatchMessage({type: 'edit', id: id, mess: e.target.value})
          }}></textarea>
          <button onClick={() => {
            alert(`to ${message[id].name} say:${message[id].mess}`)
            updateDispatchMessage({type: 'send', id: id})
          }}>send
          </button>
        </div>
      </div>
    </>
  )
}



export default function Test6():JSX.Element {
  return (
    <>
      <h1>
      </h1>
      <h2>useState</h2>
      <AllInReact/>
      <h2>useImmer</h2>
      <Immer/>
      <h2>useReducer</h2>
      <Reducer/>
      <h2>useImmerReducer</h2>
      <ImmerReducer/>
    </>
  )
}