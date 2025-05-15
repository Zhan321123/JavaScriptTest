import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import {Button, Menu, Layout, MenuProps} from 'antd';
import '@/css/test.scss'

const { Sider, Content } = Layout; // 解构Layout组件

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1', icon: <PieChartOutlined />, label: 'Option 1' },
  { key: '2', icon: <DesktopOutlined />, label: 'Option 2' },
  { key: '3', icon: <ContainerOutlined />, label: 'Option 3' },
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      { key: '7', label: 'Option 7' },
      { key: '8', label: 'Option 8' },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '11', label: 'Option 11' },
          { key: '12', label: 'Option 12' },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 固定左侧导航菜单 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapsed}
        width={256}
        theme="dark"
        style={{ position: 'fixed', left: 0, top: 0, bottom: 0 }}
      >
        <div className="logo" >Your logo</div> {/* 可替换为你的logo */}
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
      </Sider>

      {/* 内容区域，自适应菜单宽度 */}
      <Content style={{ marginLeft: collapsed ? 80 : 256, padding: 24, minHeight: 280 }}>
        <div style={{ marginBottom: 16, textAlign: 'right' }}>
          {/* 收缩/展开按钮（可选：放在内容区域右上角） */}
          <Button type="primary" onClick={toggleCollapsed}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>

        <div style={{ height: '1000px', background: '#fff', padding: 24, lineHeight: '24px' }}>
          <h1>Main Content Area</h1>
          <p>Scroll down to test fixed menu</p>
          {/* 模拟长内容 */}
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} style={{ margin: '16px 0', padding: 16, border: '1px solid #e8e8e8' }}>
              Content Item {i + 1}
            </div>
          ))}
        </div>
      </Content>
    </Layout>
  );
};

export default App;