import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
  name: 'channels',
  initialState: {
    channelList: []
  },
  reducers: {
    setChannels(state, action) {
      state.channelList = action.payload
    }
  }
})

const {setChannels} = channelStore.actions

export const fetchChannelList = () => {
  return async (dispatch) => {
    const res = await axios.get('https://geek.itheima.net/v1_0/channels')
    dispatch(setChannels(res.data.data.channels))
  }
}

export default channelStore.reducer