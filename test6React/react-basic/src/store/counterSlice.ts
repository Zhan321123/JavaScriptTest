import {createSlice} from "@reduxjs/toolkit";

interface CounterSlice {
  value: number
  add: number
}

const initialState: CounterSlice = {
  value: 0,
  add: 1
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add1: state => {
      state.value += state.add
    },
    setAdd: (state, action) => {
      state.add = action.payload
    },
    decrease: state => {
      state.value--
    }
  }

})

export const {add1, setAdd, decrease} = counterSlice.actions
export default counterSlice.reducer