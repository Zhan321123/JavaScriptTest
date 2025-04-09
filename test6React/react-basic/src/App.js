import {useState} from "react";
import classNames from "classnames";
import index from './index.css'

const name = 'zhan'
const list = ['zhan', 'wei', 'jin', 'yan']
const styleText = {
  backgroundColor: 'red',
  color: 'blue'
}

function warn(info) {
  alert(info)
}

function Button(text, onClick, style = {}) {
  return (
    <button onClick={onClick} style={style}>{text}</button>
  )
}


function App() {

  const [count, setCount] = useState(0)

  function set() {
    setCount(count + 1)
  }

  const [user, setUser] = useState({
    name: 'zhan',
  })
  function changeUser(){
    setUser({
      ...user,
      name: 'wei',
    })
  }
  const [bool, setBool] = useState(false)
  function changeToggle(){
    setBool(!bool)
  }
  const toggleClass = classNames({
    style1:bool,
    style2:!bool
  })

  const [value, setValue] = useState('')
  return (
    <div>
      // 文字、变量
      <div>
        {'This is your react '}
        {name}
        {'! '}
        {'Now is '}{new Date().toLocaleString()}
      </div>
      // style
      <div>
        <p style={{
          color: 'red',
          backgroundColor: 'blue',
          fontSize: '20px'
        }}>red paragraph</p>
        <p style={styleText}>tag with style</p>
      </div>
      // list
      <div>
        <ul>
          {list.map((item, index) => <li key={index}>{index}{'-'}{item}</li>)}
        </ul>
      </div>
      // event
      <div>
        <button onClick={(e) => alert('clicked' + e)}>Event Button
        </button>
        <button onClick={() => warn('clicked')}>Event Button
        </button>
        <button onClick={(e) => warn('clicked' + e)}>Event Button
        </button>
      </div>
      //组件
      <div>
        {Button('click me', () => alert('组件'), {color: 'red', border: '1px solid red', padding: '10px'})}
      </div>
      // useState
      <div>
        <button onClick={set}>{"点击了"}{count}{"次"}</button>
        <button onClick={changeUser}>{"修改用户"}{user.name}</button>
      </div>
      // classnames库
      <div>
        <button className={toggleClass} onClick={changeToggle}>classnames</button>
      </div>
      // 表单绑定
      <div>
        <input type="text"
               onChange={(e) => setValue(e.target.value)}
               value={value}/>

      </div>
    </div>
  );
}

export default App;
