import React from 'react';

import { Layout, Menu } from 'antd';

import Styles from './style.less';

const { Content } = Layout, { SubMenu, Item } = Menu;


const InitContent: React.FC = ({ children }) => {
  return <Content className={Styles.content} >
    {children}
  </Content>
}

export default InitContent;