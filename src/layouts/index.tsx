import React, { } from 'react';
import { Layout } from 'antd';
import Sider from './components/sider';
import Header from './components/header';
import Content from './components/content';
import InitBread from './components/bread';
import '@/themes/index.less';
import Styles from './style.less';

const Layouts: React.FC = ({ children }) => {
  console.log('重新渲染了');
  console.log(GLOBAL_ENV);
  return <Layout className={Styles.layout}>
    <Sider />
    <Layout>
      <Header />
      <InitBread />
      <Content>
        {children}
      </Content>
    </Layout>

  </Layout>
}

export default Layouts;