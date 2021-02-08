import { defineConfig } from "umi";
import { resolve } from 'path';

export default defineConfig({
  title: '管理后台',
  nodeModulesTransform: {
    type: 'none',
  },
  // 全局变量
  define: {
    "GLOBAL_ENV": process.env.GLOBAL_ENV // cross-env
  },
  dva: {
    immer: true,
    hmr: true,
    skipModelValidate: false,
    extraModels: [
      resolve(__dirname, "src/components/popup/model.ts"), // 不能使用 @, 因为@不能用，所以需要使用绝对路径
    ]
  },
  routes: [
    {
      path: '/login',
      component: "@/pages/login",
    },
    {
      path: '/',
      redirect: '/list',
    },
    {
      component: "@/layouts",
      routes: [
        {
          path: '/list',
          component: "@/pages/list",
        }
      ]
    }
  ],

});

