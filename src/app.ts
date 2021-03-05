import { IRoute } from '@umijs/core/lib';
import { Action, Location } from 'history';
import CryptoJS from 'crypto-js';

export async function getInitialState(): Promise<InitInfo> {
  // 获取用户信息
  return {
    userId: 78,
    role: 98,
  };
}

// 首次渲染时触发 配置路由
export function patchRoutes(props: IRoute[]) {
  console.log('首次渲染时触发');
  console.log(props);
}

// 渲染页面
export function render(go: Function) {
  console.log(CryptoJS);
  console.log(go());
  // fetch('/api/auth').then(auth => {
  //   if (auth.isLogin) {
  //     oldRender()
  //   } else {
  //     history.push('/login');
  //     oldRender()
  //   }
  // });
}

// 路由发生变化触发
export function onRouteChange(props: {
  routes: IRoute[];
  matchedRoutes: any[];
  action: Action;
  location: Location;
}) {
  console.log(props);
}
