import Layout from '@/layout'

export default [
  {
    path: '/setting',
    component: Layout,
    meta: {
      title: '系统设置'
    },
    children: [
      {
        path: 'perm',
        name: 'Permission',
        component: () => import('@/views/dev/index'),
        meta: { title: '权限设置', icon: 'el-icon-s-help' }
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/dev/index'),
        meta: { title: '角色设置', icon: 'el-icon-s-help' }
      }
    ]
  }
]
