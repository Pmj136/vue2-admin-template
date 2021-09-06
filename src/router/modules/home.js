import Layout from '@/layout'
import EmptyLayout from '@/layout/EmptyLayout'

export default [
  {
    path: '/home',
    component: Layout,
    meta: { title: '首页' },
    children: [
      {
        path: '',
        redirect: 'example',
        hidden: true //将不会渲染成 侧边栏
      },
      {
        path: 'example',
        component: EmptyLayout,
        name: 'Example',
        meta: { title: '示例页面', icon: 'el-icon-s-help' },
        children: [
          {
            path: '',
            redirect: 'item1',
            hidden: true
          },
          {
            path: 'item1',
            name: 'Item1',
            component: () => import('@/views/dev/index'),
            meta: { title: '子级页面1', affix: true }
          },
          {
            path: 'item2',
            name: 'Item2',
            component: () => import('@/views/dev/index'),
            meta: { title: '子级页面2' }
          }
        ]
      }
    ]
  }
]
