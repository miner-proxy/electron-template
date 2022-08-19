import { AppstoreOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

import { MemoryRouter as Routes, Route } from 'react-router-dom';
import { PageSettings } from './interface';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [];

const RouteMenu: React.FC<PageSettings> = (props: PageSettings) => {
  const { route, icon, projectName } = props;
  route.map((element) => {
    items?.push(getItem(element.name, element.name, <AppstoreOutlined />));
    return element;
  });

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ textAlign: 'center', width: 200 }}>
        <img alt="icon" src={icon} style={{ width: 100 }} />
        <div style={{ fontSize: '20px', margin: 20 }}>{projectName}</div>
        <Menu
          onClick={onClick}
          style={{ width: 200 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
      </div>
      <Routes>
        {route.map((element) => {
          return <Route path={`/${element.name}`} element={element.page} />;
        })}
      </Routes>
    </div>
  );
};

export default RouteMenu;
