import React from "react";
import {JSX} from "react";

function P(): JSX.Element {
  return <p>复用组件</p>
}

function Button({onClick, children, message}): JSX.Element {
  return <button onClick={() => {
    console.log(message)
    onClick()
  }}>{children}</button>
}

const divStyle = {
  animation: 'rotate 5s linear infinite'
};

const keyframes = `
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const styleElement = <style>{keyframes}</style>;

export default function (): JSX.Element {
  return (
    <>
      {styleElement}
      <div>div</div>
      <p style={{...divStyle,width:'200px'}}>style</p>
      <P/>
      <Button onClick={() => {
        alert('click')
      }} message={'message'}>I am Button</Button>
      <a style={{color: 'red', textDecoration: "none", cursor: "pointer"}} href="https://www.baidu.com">click to
        baidu</a>
    </>
  )
}