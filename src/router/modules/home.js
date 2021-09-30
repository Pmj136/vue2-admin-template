import Layout from '@/layout'
import EmptyLayout from '@/layout/EmptyLayout'

export default [
  {
    path: '/home',
    component: Layout,
    redirect: '/home/example',
    meta: { title: '首页' },
    children: [
      {
        path: 'example',
        component: EmptyLayout,
        redirect: '/home/example/item1',
        name: 'Example',
        meta: { title: '示例页面', icon: 'el-icon-s-help' },
        children: [
          {
            path: 'item1',
            name: 'Item1',
            component: () => import('@/views/home/example/Item1'),
            meta: { title: '子级页面1' }
          },
          {
            path: 'item2',
            name: 'Item2',
            component: () => import('@/views/home/example/Item2'),
            meta: { title: '子级页面2', noCache: true }
          }
        ]
      }
    ]
  }
]
