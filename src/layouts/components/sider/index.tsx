import React from 'react';
import { Layout, Menu } from 'antd';
import { history } from 'umi';
const { Sider } = Layout, { SubMenu, Item } = Menu;
import Styles from './style.less';
import { sids } from '@/layouts/sider.config';


const InitSider = () => {
  /**
   * 提供 url访问 向Menu注入展开选中 
   */
  const { location: { pathname } } = history;
  // 获取父级 张开
  const selectSub = sids.find(i => {
    // 是否是父级 || 是否是子( 是否是子本身 || 是否是子的子 )
    return i.path === pathname || i?.routes?.find((i) => {
      return i.path === pathname || i.children?.find(i => i === pathname)
    })
  });

  // 获取选中 是否是父级本身
  const selectMenu = selectSub?.routes ? selectSub.routes?.find(i => {
    // 是否是子本身 || 是否是子的子
    return i.path === pathname || i.children?.find(i => i === pathname);
  }) : selectSub;


  /**
   * 获取 dom 树
   */
  const getMenu = (sids: any[]) => {
    return sids.map(i => {
      if (i.routes) {
        return <SubMenu key={i.key} title={i.name}>
          {
            i.routes.map((i: any) => {
              return <Item key={i.key} onClick={() => {
                history.push(i.path);
              }} >{i.name}</Item>
            })
          }
        </SubMenu>
      } else {
        return <Item key={i.key} onClick={() => {
          history.push(i.path);
        }} >{i.name}</Item>
      }
    })
  }

  return <Sider className={Styles.sider}>
    <Menu
      className={Styles.menu}
      mode="inline"
      defaultOpenKeys={selectSub?.key ? [selectSub?.key] : []}
      defaultSelectedKeys={selectMenu?.key ? [selectMenu?.key] : []}
    >
      <div className={Styles.logo}>
        LOGO
      </div>
      {
        getMenu(sids)
      }
    </Menu>
  </Sider>
}

export default InitSider;