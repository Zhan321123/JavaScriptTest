import React from "react";
import {Link} from "react-router-dom";
import '@/css/Home.scss'

export default function Home() {
  return (<div className={'container'}>
    <div className={'between'}>
      <div>
        <img width={64} src={require('@/assets/zhan.png')} alt="react"/>
        <span>React</span>
      </div>
      <div style={{width: '50%'}}>
        <ul className={'between'} style={{height: '100%'}}>
          <li><Link to={"/introduce"} className={'link'}>Doc</Link></li>
          <li><Link to={"/"} className={'link'}>o</Link></li>
          <li><Link to={"/"} className={'link'}>o</Link></li>
          <li><Link to={"/"} className={'link'}>o</Link></li>
          <li><Link to={"/"} className={'link'}>o</Link></li>
          <li><Link to={"/"} className={'link'}>o</Link></li>
        </ul>
      </div>
      <div className={'between'} style={{width: '10%'}}>
        <img width={32} src={require('@/assets/webpack.png')} alt="react"/>
        <img width={32} src={require('@/assets/bootstrap.png')} alt="react"/>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
    <hr/>
    <br/>

    <div>
      <h1>React Standard Project</h1>
      <p>React Standard Project</p>
    </div>
  </div>)
};