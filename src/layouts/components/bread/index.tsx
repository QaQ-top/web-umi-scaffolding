import React from 'react';
import { Breadcrumb } from 'antd';
import { history } from 'umi';
import Styles from './style.less';
import { database } from '@/layouts/sider.config';

const InitBread = () => {
  const { location: { pathname } } = history;
  const { routes } = database;

  /**
   * 递归获取路径
   * 获取到后停止循环
   */
  const current: any = routes.find(item => item.path === pathname);
  // 过滤路由层级
  let result: any[] = [];
  if (current) {
    result = [current];
    const hashMap = new Map();
    routes.forEach(item => hashMap.set(item.id, item));
    const getPath = (current: { id: any }) => {
      const currentParentId = hashMap.get(current.id).parentId;
      if (currentParentId) {
        result.push(hashMap.get(currentParentId));
        getPath(hashMap.get(currentParentId));
      }
    };
    getPath(current);
  }
  return <Breadcrumb className={Styles.bread}>
    {result.reverse().map(item => (
      <Breadcrumb.Item key={item.id}>
        {item.path === pathname || !item.path ? (
          item.name
        ) : (
            <a onClick={() => history.push(item.path)}>{item.name}</a>
          )}
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
}

export default InitBread;


