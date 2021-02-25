import React from 'react';

import { Layout, Menu } from 'antd';
import UserInfo from '@/components/userinfo';
import Styles from './style.less';

const { Header } = Layout,
  { Item } = Menu;

const InitHeader = () => {
  return (
    <Header className={Styles.header}>
      <div>管理后台</div>
      <UserInfo>
        <Menu>
          <Item>标题一</Item>
          <Item>标题二</Item>
        </Menu>
      </UserInfo>
    </Header>
  );
};

export default InitHeader;
