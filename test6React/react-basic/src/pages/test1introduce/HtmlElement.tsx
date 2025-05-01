import React from "react";
import {useParams} from "react-router-dom";

export default function HtmlElement() {
  const params = useParams()
  const email = params.email
  const password = params.password
  return (<div>
    <h1>html element introduction</h1>
    <p>your email is {email}</p>
    <p>your password is {password}</p>
  </div>)
};