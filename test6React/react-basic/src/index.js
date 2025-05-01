import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider} from "react-router-dom";
import router from "./router/router";
import '@/css/all.scss'

// 渲染根组件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<Provider store={store}>*/}
    {/*  <Test8></Test8>*/}
    {/*</Provider>*/}
    <RouterProvider router={router}/>
  </React.StrictMode>
);
