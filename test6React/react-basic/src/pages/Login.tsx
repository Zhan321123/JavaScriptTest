import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function Login() {
  const navi = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (<div>
    <h1>Welcome</h1>

    <input placeholder="email" value={email} onChange={(e) => {
      setEmail(e.target.value)
    }} type="text"/>

    <input type="password" placeholder="password" value={password} onChange={(e) => {
      setPassword(e.target.value)
    }}/>

    <Link to={"/introduce"}>To Introduce</Link>

    <br/>
    <button onClick={() => {
      navi("/")
    }}>To Home
    </button>

    <br/>
    <button onClick={() => {
      navi(`../content?email=${email}&password=${password}`)
    }}>To Content
    </button>

    <br/>
    <button onClick={() => {
      navi(`../htmltag/${email}/${password}`)
    }}>To HtmlElement
    </button>
  </div>)
};