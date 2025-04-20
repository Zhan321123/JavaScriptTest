// react 项目入口

// react 必要两个包 react，react-dom
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './store'

// 项目根组件
// import App from './App';
// import Test1 from './test1井字棋'
// import Test2redux from "./test2redux";
// import {Provider} from "react-redux";
// import Test4 from "./test4鼠标效果";
// import Test5 from "./test5页面加载效果";
import Test7 from "./test7鼠标点击效果";
import Test6 from "./test6";

// 渲染根组件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App></App>*/}

    {/*<Provider store={store}>*/}
    {/*  <Test2redux></Test2redux>*/}
    {/*</Provider>*/}

    {/*<NestedMapTree></NestedMapTree>*/}
    {/*<Test4></Test4>*/}
    {/*<Test5></Test5>*/}
    <Test6></Test6>
    {/*<Test7></Test7>*/}

  </React.StrictMode>
);
