import {createSlice} from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    addToNum(state, action){
      state.count += action.payload
    },
    reset(state) {
      state.count = 0;
    }
  }
})

export const actions = counterStore.actions
export default counterStore.reducer

