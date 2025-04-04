const log = document.querySelector("#login")
const account = document.querySelector("#account")
const password = document.querySelector("#password")

function checkAccount(account, password) {
  return account === 'admin' && password === '123456';
}

log.addEventListener("click", (event) => {
  const acc = account.value
  const pwd = password.value
  if (checkAccount(acc, pwd)) {
    console.log("登录成功")
    alert("登录成功")
  } else {
    console.log("登录失败")
    alert("登录失败")
  }
})

import '../css/login.css'
import '../css/bootstrap.css'
//
import imgBootstrap from '../assets/bootstrap.png'
const bootstrapTag = document.createElement("img")
bootstrapTag.src = imgBootstrap
document.querySelector('#bootstrap').append(bootstrapTag)