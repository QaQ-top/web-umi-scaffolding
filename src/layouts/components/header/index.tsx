import React from 'react';

import { Layout, Menu } from 'antd';

import Styles from './style.less';

const { Header } = Layout, { SubMenu, Item } = Menu;

const InitHeader = () => {
  return <Header className={Styles.header}>
    <div>
      管理后台
    </div>
  </Header>
}

export default InitHeader;
