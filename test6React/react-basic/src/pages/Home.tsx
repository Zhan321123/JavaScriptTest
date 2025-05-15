import React from "react";
import {Link} from "react-router-dom";
import '@/css/Home.scss'
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

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
      <FirstPage></FirstPage>
    </div>
  </div>)
};

function FirstPage() {
  const {contextSafe} = useGSAP()
  const onEnter = contextSafe(({currentTarget}) => {
    gsap.to(currentTarget, {rotation: "+=360"})
  })
  return (<div>
    <div>
      <button onClick={onEnter}
              className={'border'} style={{
        fontSize: '128px',
        cursor: 'pointer'
      }}>React
      </button>
    </div>
    <br/>
    <div style={{textAlign: 'center'}}>
      <button onClick={onEnter} className={'border'} style={{
        fontSize: '128px',
        cursor: 'pointer'
      }}>Standard
      </button>
    </div>
    <br/>
    <div style={{textAlign: 'right', marginRight: '10vw'}}>
      <button onClick={onEnter} className={'border'} style={{
        fontSize: '128px',
        cursor: 'pointer'
      }}>Project
      </button>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  </div>)
}