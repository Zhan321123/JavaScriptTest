import React, {Suspense} from "react";
import {createBrowserRouter, createHashRouter} from "react-router-dom";
import Introduce from "@/pages/introduce";
import Content from "@/pages/test1introduce/Content";
import HtmlTag from "@/pages/test1introduce/HtmlElement";
import Cursor from "@/pages/test1introduce/Cursor";
import Cube from "@/pages/test1introduce/Cube";
import NotFound from "@/pages/NotFound";
import Loading from "@/pages/Loading";
// @ts-ignore
const Login = React.lazy(() => import('@/pages/Login'))
// @ts-ignore
const Home = React.lazy(() => import('@/pages/Home'))

// export default createBrowserRouter[ //创建浏览器路由，显示路径url/login，需要后端支持
export default createHashRouter([ //创建hash路由，显示路径url/#/login，不需要后端支持
  {
    path: '/',
    element: <Suspense fallback={<Loading/>}>
      <Home/>
    </Suspense>
  },
  {
    path:'/loading',
    element: <Loading/>
  },
  {
    path: '/login',
    element: <Suspense fallback={<Loading/>}>
      <Login/>
    </Suspense>
  },
  {
    path: '/introduce',
    element: <Introduce/>,
    children: [
      {
        // path:"/introduce/cursor",
        index: true,
        element: <Cursor/>
      },
      {
        path: '/introduce/cube',
        element: <Cube/>
      }
    ]
  },
  {
    path: "/content",
    element: <Content/>
  },
  {
    path: "/htmltag/:email/:password",
    element: <HtmlTag/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

