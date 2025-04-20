import {createContext, useContext, useEffect, useRef, useState} from "react";
import classNames from "classnames";

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
  return <button onClick={onClick} style={style}>{text}</button>
}

function Son(props) {
  // 不能修改props
  return <div>div-{props.name}-{props.sex}</div>
}

function Son2(props) {
  return <div>div-{props.children}</div>
}

function Son3({onGetSonMessage}) {
  const message = 'this is son message'
  return <div>this is son
    <button onClick={() => onGetSonMessage(message)}>{message}</button>
  </div>
}

function Bro1({onGetBorMessage}) {
  const name = 'this is Bro'
  return <div>this is Bro
    <button onClick={() => onGetBorMessage(name)}>send message</button>
  </div>
}

function Bro2({id}) {
  return <div>this is Bro2{id}</div>
}

const mesContext = createContext()

function Cont1() {
  return <div>this is cont1<Cont2></Cont2></div>
}

function Cont2() {
  const message = useContext(mesContext)
  return <div>this is cont2, {message}</div>
}

// 使用return()=>{}清楚useEffect的副作用
function Test1() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('this is test1')
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, []);
  return <div>this is test1</div>
}

function App() {

  const [count, setCount] = useState(0)

  function set() {
    setCount(count + 1)
  }

  const [user, setUser] = useState({
    name: 'zhan',
  })

  function changeUser() {
    setUser({
      ...user,
      name: 'wei',
    })
  }

  const [bool, setBool] = useState(false)

  function changeToggle() {
    setBool(!bool)
  }

  const toggleClass = classNames({
    style1: bool,
    style2: !bool
  })

  const inputRef = useRef('')
  const showDom = () => {
    console.dir(inputRef.current)
  }

  const [message, setMessage] = useState('')
  const getMessage = (message) => {
    console.log(message)
    setMessage(message)
  }

  const [value, setValue] = useState('')

  const [id, setId] = useState('')
  const getId = (id) => {
    setId(id)
  }

  const [l1, setList] = useState([])
  const url = 'https://geek.itheima.net/v1_0/channels'
  useEffect(() => {
    async function getList() {
      const res = await fetch(url)
      const jsonRes = await res.json()
      setList(jsonRes.data.channels.map((item) => item.id + ' ' + item.name))
    }

    getList()
  }, []); //deps是依赖项，不填，每次render都执行一次effect，填[]，只执行一次effect，填[value]，value变化就会执行一次effect

  const [show, showTest1] = useState(true)
  const [toggle,setToggle] = useState(true)
  const [redux1, setRedux1] = useState(0)
  const [redux2, setRedux2] = useState(0)

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
      // 获取dom
      <div>
        <input type="text" ref={inputRef}/>
        <button onClick={showDom}>获取dom</button>
      </div>
      // 信息传递-父传子
      <div>
        <Son name={name} sex='female'></Son>
        <Son2><span>span</span></Son2>
      </div>
      // 信息传递-子传父
      <div>
        this is div, {message}
        <Son3 onGetSonMessage={getMessage}></Son3>
      </div>
      // 信息传递-兄传弟
      <div>
        this is div
        <Bro1 onGetBorMessage={getId}></Bro1>
        <Bro2 id={id}></Bro2>
      </div>
      // 跨层通信
      <div>
        this is div
        <mesContext.Provider value={name}>
          this is mesContent.Provider
          <Cont1></Cont1>
        </mesContext.Provider>
      </div>
      // useEffect
      useEffect只能在组件顶层调用，并且不能在for、if之中
      <div>
        this is div
        {l1}
        <br/>
        {show && <Test1></Test1>}
        <button onClick={() => showTest1(false)}>uninstall Test1</button>
      </div>
      // toggle
      <div>
        {toggle && 'this is div'}
        <button onClick={() => setToggle(!toggle)}>toggle button</button>
      </div>
      // redux与纯函数对比
      <div>
        <div>
          <button onClick={() => setRedux1(redux1 - 1)}>-</button>
          {redux1}
          <button onClick={() => setRedux1(redux1 + 1)}>+</button>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
