export const sids = [
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
        path: '/lastingip',
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


export const database = {
  // 所有路由的节点关系,用于面包屑显示
  routes: [
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
      path: '/lastingip',
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
    
  ]
};