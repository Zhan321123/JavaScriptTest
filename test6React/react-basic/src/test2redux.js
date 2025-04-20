import {useDispatch, useSelector} from "react-redux";
import {actions} from "./store/modules/counterStore";
import {useEffect} from "react";
import {fetchChannelList} from "./store/modules/channelStore";


const {increment, decrement, addToNum, reset} = actions

export default function Test2redux() {
  const {count} = useSelector(state => state.counter)
  const {channelList} = useSelector(state => state.channel)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])
  return (
    <>
      <div style={{fontSize: '20px', display: 'flex', width: '300px', justifyContent: 'space-between'}}>
        <button onClick={() => dispatch(addToNum(-10))}>-10</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(addToNum(10))}>+10</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
      <div>
        <ul>
          {channelList.map(item=><li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    </>
  )
}