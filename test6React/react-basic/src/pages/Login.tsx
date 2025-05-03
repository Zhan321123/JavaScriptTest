import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function Login() {
  const navi = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (<div>
    <h1>Welcome</h1>
  </div>)
};