import {useDispatch, useSelector} from "react-redux";
import {add1, decrease, setAdd} from './store/counterSlice';
import React from "react";

const Test2: React.FC = () => {
  // @ts-ignore
  const {value, add} = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <>
      <h2>计数器</h2>
      <button onClick={() => dispatch(decrease())}>decrease</button>
      <span>{value}</span>
      <button onClick={() => dispatch(add1())}>add</button>
      <input type="number" value={add} onChange={e => dispatch(setAdd(Number(e.target.value)))}/>
    </>
  )
}

export default Test2