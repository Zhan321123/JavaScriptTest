import React, {useState} from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {FloatButton, MenuProps} from 'antd';
import {Button, Menu} from 'antd';

import '@/css/Introduce.scss'
import Svg from "@/utils/icons";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {key: '', icon: <Svg name={'introduce'} style={{marginRight: 8}}/>, label: 'Introduce'},
  {
    key: 'htmltag', icon: <Svg name={'html'} style={{marginRight: 8}}/>, label: 'Html5 Tag',
    children: [
      {key: '', label: 'Option 5'},
      {key: '', label: 'Option 5'},
      {key: '', label: 'Option 5'},
    ]
  },
  {
    key: 'css', icon: <Svg name={'css'} style={{marginRight: 8}}/>, label: 'Css3',
    children: [
      {key: 'cube', icon: <Svg name={'cube'} style={{marginRight: 8}}/>, label: 'Cube'},
      {key: 'cursor', icon: <Svg name={'cursor'} style={{marginRight: 8}}/>, label: 'Cursor'}
    ]
  },
  {key: 'javascript', icon: <Svg name={'js'} style={{marginRight: 8}}/>, label: 'JavaScript'},
  {
    key: 'react', label: 'React', icon: <Svg name={'react'} style={{marginRight: 8}}/>,
    children: [
      {key: 'hook', icon: <Svg name={'hook'} style={{marginRight: 8}}/>, label: 'Hook'},
      {key: 'router', icon: <Svg name={'router'} style={{marginRight: 8}}/>, label: 'Router'},
      {key: 'classnames', icon: <Svg name={'classnames'} style={{marginRight: 8}}/>, label: 'Classnames'},
      {key: 'craco', icon: <Svg name={'craco'} style={{marginRight: 8}}/>, label: 'Craco'},
    ],
  }, {
    key: 'webpack', label: 'Webpack', icon: <Svg name={'webpack'} style={{marginRight: 8}}/>,
    children: [
      {key: '', icon: <Svg name={''} style={{marginRight: 8}}/>, label: 'Hook'},
      {key: '', icon: <Svg name={''} style={{marginRight: 8}}/>, label: 'Option 6'},
      {key: '', icon: <Svg name={''} style={{marginRight: 8}}/>, label: 'Option 7'},
      {key: '', icon: <Svg name={''} style={{marginRight: 8}}/>, label: 'Option 8'},
    ],
  }, {
    key: 'sass', label: 'Sass', icon: <Svg name={'sass'} style={{marginRight: 8}}/>,
    children: [
      {key: '', icon: <Svg name={''} style={{marginRight: 8}}/>, label: 'Hook'},
      {key: '', icon: <Svg name={''} style={{marginRight: 8}}/>, label: 'Option 6'},
      {key: '', icon: <Svg name={''} style={{marginRight: 8}}/>, label: 'Option 7'},
      {key: '', icon: <Svg name={''} style={{marginRight: 8}}/>, label: 'Option 8'},
    ],
  }, {
    key: 'echarts', label: 'Echarts', icon: <Svg name={'echarts'} style={{marginRight: 8}}/>,
    children: [
      {key: 'echarts/blocks', label: 'Blocks'},
      {key: '', label: 'Option 10'},
    ],
  }, {
    key: 'antd', label: 'Ant Design', icon: <Svg name={'antd'} style={{marginRight: 8}}/>,
    children: [
      {key: '', label: 'Option 9'},
      {key: '', label: 'Option 10'},
    ],
  }, {
    key: 'electron', label: 'Electron', icon: <Svg name={'electron'} style={{marginRight: 8}}/>,
    children: [
      {key: '', label: 'Option 9'},
      {key: '', label: 'Option 10'},
    ],
  },
  {key: 'test', icon: <Svg name={'test'} style={{marginRight: 8}}/>, label: 'Test'},
];

export default function Docx() {
  const navigate = useNavigate();
  const onClick: MenuProps['onClick'] = (e) => {
    navigate(`/introduce/${e.key}`)
  };
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (<div style={{width: '100%', display: 'flex', position: 'relative'}}>
    <Navbar collapsed={collapsed} toggleCollapsed={toggleCollapsed} onClick={onClick}/>
    <div style={{width: collapsed ? 100 : 256}}></div>
    {/*<Link to="/introduce/cursor">cursor frame</Link>*/}
    <div style={{
      width: collapsed ? 'calc(100% - 128px)' : 'calc(100% - 256px - 128px)',
      padding: '10px'
    }}>
      <Outlet/>
    </div>
    <div style={{width: 128}}>
    </div>
    {/* 回到顶部按钮 */}
    <FloatButton.BackTop tooltip={<div>回到顶部</div>}/>
  </div>)
};

const Navbar = ({collapsed, toggleCollapsed, onClick}) => {
  return (<div
    className={'left'}
    style={{width: collapsed ? 100 : 256,}}
  >
    <div style={{height: '10vh'}} className={'between'}>
      {collapsed || <Svg name={'react'} width={48}/>}
      {collapsed || <h3>DOCX</h3>}
      {/*<button className={'border'}></button>*/}
      <button onClick={toggleCollapsed} className={"button border"}>
        {collapsed ? <Svg name={'right'} width={24}></Svg> : <Svg name={'left'} width={24}></Svg>}
      </button>
    </div>
    <hr/>
    <Menu
      onClick={onClick}
      className={'menu'}
      style={{height: '80vh', overflowY: 'auto'}}
      defaultSelectedKeys={['1']}
      mode="inline"
      theme="dark"
      inlineCollapsed={collapsed}
      items={items}
    />
    <hr/>
    <div style={{height: '10vh', padding: '10px'}} className={'between'}>
      <img className={'border'} width={24} src={require("@/assets/zhan.png")} alt="#zhan"/>
      {collapsed || <span className={'border'}>{new Date().toLocaleTimeString()}</span>}
    </div>
  </div>)
}