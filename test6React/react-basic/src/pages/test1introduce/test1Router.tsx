import React, {useEffect, useRef, useState} from "react";
import {Code, MultipleCodes} from "@/components/Code";
import Content from "@/pages/test1introduce/Content";
import useHeadingsToNavItems from "@/utils/navs";

const codeRouter = `
export default createBrowserRouter([ //创建浏览器路由，显示路径url/login，需要后端支持
// export default createHashRouter([ //创建hash路由，显示路径url/#/login，不需要后端支持
  {path: '/', element: <Home/>}, //顶级页面
  {path:'/loading', element: <Loading/>},
  {path: '/login', element: <Suspense fallback={<Loading/>}><Login/></Suspense>},
  {
    path: '/introduce', element: <Docx/>,
    children: [
      {path:'/introduce/router', element:<Test1Router/>}, // 二级界面
    ]
  },
  {path: '*', element: <NotFound/>} // 404界面
])
`

const codeSkip = `
// useNavigate
const navi = useNavigate();
const Button = () => <button onClick={() => {navi("/")}}>To Home</button>
// Link
const Link = () => <Link to={"/i"}>To I</Link>
`

const codeUseParams = `
const params = useParams()
const email = params.email
const password = params.password
`

const codeSearchParams = `
const [params] = useSearchParams()
const email = params.get("email")
const password = params.get("password")
`

// const navItems = [
//   {key: 'inta', href: '#install', title: 'install',},
//   {key: 'anchor', href: '#anchor', title: 'anchor',},
//   {
//     key: 'api', href: '#api', title: 'api', children: [
//       {key: 'props', href: '#props', title: 'props',},
//       {key: 'link', href: '#link', title: 'link',},
//     ],
//   },
// ]

export default function Test1Router() {
  const ref = useRef(null)
  const navItems = useHeadingsToNavItems(ref)
  return (
    <>
      <Content items={navItems}></Content>
      <div ref={ref}>
        <h2 id={'install'}>安装路由</h2>
        <p>安装react-router-dom</p>
        <Code fileName={'package.json./'} language={'bash'}>{'npm install react-router-dom'}</Code>
        <h2 id={'use'}>路由使用</h2>
        <h3>创建路由</h3>
        <Code fileName={'/src/router/router.tsx'} language={'typescript'}>{codeRouter}</Code>
        <h3>改变根组件渲染</h3>
        <Code fileName={'/src/index.tsx'}
              language={'typescript'}>{'root.render(<RouterProvider router={router}/>)'}</Code>
        <h2>跳转路由界面</h2>
        <Code fileName={'*.tsx'} language={'typescript'}>{codeSkip}</Code>
        <h2>跳转界面信息传递</h2>
        <h3>方式1</h3>
        <MultipleCodes
          codes={['navi(`login/${email}/${password}`)', codeUseParams]}
          fileNames={['*.tsx', 'login.tsx']}
          languages={['typescript', 'typescript']}
        ></MultipleCodes>
        <h3>方式2</h3>
        <MultipleCodes
          codes={[
            "path: '/login/:email/:password'",
            "navi(`../content?email=${email}&password=${password}`)",
            codeUseParams
          ]}
          fileNames={['/src/router/router.tsx', '*.tsx', 'Login.tsx']}
          languages={['typescript', 'typescript', 'typescript']}
        ></MultipleCodes>
      </div>
    </>
  )
}