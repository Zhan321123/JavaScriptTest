import React from "react";
import {useSearchParams} from "react-router-dom";

export default function Content() {
  const [params] = useSearchParams()
  const email = params.get("email")
  const password = params.get("password")
  return (<div>
    <h1>Content</h1>
    <p>Hello, {email}, your password is {password}</p>
  </div>)
};