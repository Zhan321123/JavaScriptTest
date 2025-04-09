// const axios = require('axios');
import axios from "axios";

const src1 = 'https://hmajax.itheima.net/api/province'
// axios.get(src1).then(res => {
//   const data = res.data;
//   console.log(data)
// }).catch(err => {
//   console.log(err);
// })

const src2 = 'https://hmajax.itheima.net/api/city'
const params = {pname: '辽宁省'}
// axios.get(src2, {params}).then(res => {
//   const data = res.data;
//   console.log(data)
// }).catch(err => {
//   console.log(err);
// })

async function getInfo(url, params) {
  try {
    const res = await axios.get(url, {params})
    return res.data
  } catch (error) {
    console.log('请求出错: ', error)
    throw error
  }
}

const data = await getInfo(src2, params)
console.log(data)