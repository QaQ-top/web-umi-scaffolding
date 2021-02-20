import { defineConfig } from 'umi';
import { resolve } from 'path';

export default defineConfig({
  title: '管理后台',
  // favicon: '/state.png', // 访问 /public 下的资源
  nodeModulesTransform: {
    // 依赖包转换解决兼容性
    type: process.env.GLOBAL_ENV === 'prod' ? 'all' : 'none',
  },
  history: {
    type: 'browser',
  },
  hash: true, // 用于增量发布和避免浏览器加载缓存
  base: process.env.GLOBAL_ENV === 'prod' ? '/dist/' : '/', // 只和路由有关
  publicPath: process.env.GLOBAL_ENV === 'prod' ? '/dist/' : '/', // 影响资源文件的访问
  // 全局变量
  define: {
    GLOBAL_ENV: process.env.GLOBAL_ENV, // cross-env
  },
  dva: {
    immer: true,
    hmr: true,
    skipModelValidate: false,
    extraModels: [
      resolve(__dirname, 'src/components/popup/model.ts'), // 不能使用 @, 因为@不能用，所以需要使用绝对路径
    ],
  },
  alias: {
    "@components": resolve(__dirname, 'src/components'),
  },
  fastRefresh: {},
  routes: [
    {
      path: '/login',
      component: '@/pages/login',
    },
    {
      component: '@/layouts',
      routes: [
        {
          path: '/',
          component: '@/pages/home',
        },
        {
          path: '/list',
          component: '@/pages/list',
        },
      ],
    },
  ],
});
