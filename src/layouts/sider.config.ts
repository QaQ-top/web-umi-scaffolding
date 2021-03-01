interface SidsType {
  name: string;
  key: string;
  path?: string;
  routes?: ChildrenNode[];
}
interface ChildrenNode {
  name: string;
  key: string;
  path: string;
  children?: string[];
}

export const sids: SidsType[] = [
  {
    name: '首页',
    key: '0',
    path: '/',
  },
  {
    name: '一级标题',
    key: '1',
    routes: [
      {
        name: '二级标题11',
        path: '/list',
        key: '1-1',
      },
      {
        name: '二级标题12',
        path: '/map',
        key: '1-2',
      },
      {
        name: '二级标题13',
        path: '/extractip',
        key: '1-3',
        children: ['/apilink', '/extractrecords'],
      },
    ],
  },
  {
    name: '一级标题2',
    path: '/ssss',
    key: '2',
  },
];

interface BreadType {
  routes: {
    name: string;
    id: string;
    path?: string;
    parentId?: string;
  }[];
}

export const database: BreadType = {
  // 所有路由的节点关系,用于面包屑显示
  routes: [
    {
      name: '首页',
      id: '0',
      path: '/',
    },
    {
      name: '一级标题',
      id: '1',
    },
    {
      name: '二级标题11',
      path: '/list',
      id: '1-1',
      parentId: '1',
    },
    {
      name: '二级标题12',
      path: '/map',
      id: '1-2',
      parentId: '1',
    },
    {
      name: '二级标题13',
      path: '/extractip',
      id: '1-3',
      parentId: '1',
    },
    {
      name: '一级标题2',
      id: '2',
      path: '/ssss',
    },
  ],
};
