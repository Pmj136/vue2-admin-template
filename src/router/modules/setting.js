import Layout from '@/layout'

export default [
  {
    path: '/setting',
    component: Layout,
    redirect: '/setting/perm',
    meta: {
      title: '系统设置'
    },
    children: [
      {
        path: 'perm',
        name: 'Permission',
        component: () => import('@/views/setting/Permission'),
        meta: { title: '权限设置', icon: 'el-icon-s-help', keepAlive: true }
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/setting/Role'),
        meta: { title: '角色设置', icon: 'el-icon-s-help' }
      }
    ]
  }
]
