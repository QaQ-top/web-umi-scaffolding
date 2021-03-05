import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { IRouteComponentProps, useAccess } from 'umi';
import Sider from './components/sider';
import Header from './components/header';
import Content from './components/content';
import InitBread from './components/bread';
import '@/themes/index.less';
import Styles from './style.less';

const Layouts: React.FC<IRouteComponentProps> = ({ children }) => {
  console.log('重新渲染了');
  console.log(GLOBAL_ENV);
  return (
    <Layout className={Styles.layout}>
      <ConfigProvider locale={zhCN}>
        <Sider />
        <Layout>
          <Header />
          <InitBread />
          <Content>{children}</Content>
        </Layout>
      </ConfigProvider>
    </Layout>
  );
};

export default Layouts;
