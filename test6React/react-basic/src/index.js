import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import router from "./router/router";
import '@/css/all.scss'
import '@/css/antd.scss'
import '@/css/highlight.scss'
import themeConfig from './antdTheme';
import {ConfigProvider, theme} from "antd";

const {defaultAlgorithm, darkAlgorithm} = theme;
const algorithm = themeConfig.algorithm.includes('dark') ? darkAlgorithm : defaultAlgorithm;
// {/*<Provider store={store}>*/}
// {/*  <Test8></Test8>*/}
// {/*</Provider>*/}
// 渲染根组件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ConfigProvider
    theme={{
      token: themeConfig.token,
      algorithm,
    }}
  >
    <RouterProvider router={router}/>
  </ConfigProvider>
  // </React.StrictMode>
);
