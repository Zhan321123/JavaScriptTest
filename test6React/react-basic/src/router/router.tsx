import React, {Suspense} from "react";
import {createBrowserRouter, createHashRouter} from "react-router-dom";
import Docx from "@/pages/Docx";
import Content from "@/pages/test1introduce/Content";
import HtmlTag from "@/pages/test1introduce/HtmlTag";
import Cursor from "@/pages/test1introduce/Cursor";
import Cube from "@/pages/test1introduce/Cube";
import NotFound from "@/pages/NotFound";
import Loading from "@/pages/Loading";
import Introduce from "@/pages/test1introduce/Introduce";
// @ts-ignore
const Login = React.lazy(() => import('@/pages/Login'))
// @ts-ignore
const Home = React.lazy(() => import('@/pages/Home'))

// export default createBrowserRouter[ //创建浏览器路由，显示路径url/login，需要后端支持
export default createHashRouter([ //创建hash路由，显示路径url/#/login，不需要后端支持
  {path: '/', element: <Suspense fallback={<Loading/>}><Home/></Suspense>},
  {path:'/loading', element: <Loading/>},
  {path: '/login', element: <Suspense fallback={<Loading/>}><Login/></Suspense>},
  {
    path: '/introduce', element: <Docx/>,
    children: [
      {path:"/introduce",index: true,element: <Introduce/>},
      {path:"/introduce/cursor", element: <Cursor/>},
      {path: '/introduce/cube', element: <Cube/>}
    ]
  },
  {path: "/content", element: <Content/>},
  {path: "/htmltag/:email/:password", element: <HtmlTag/>},
  {path: '*', element: <NotFound/>}
])

