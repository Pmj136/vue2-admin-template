const list = {
  admin: {
    token: 'Jj335j2rvoiwgnoew345nknoi35nt43o34noj',
    roles: ['admin'],
    permissions: ['user:add', 'user:delete'],
    menus: ['/home', '/home/example', '/home/example/item1', '/home/example/item2', '/setting', '/setting/perm']
  },
  user: {
    token: 'ag3itj3534jtlkjtl34jtkj34kltjlk34jtl3',
    roles: ['user'],
    permissions: [],
    menus: ['/home', '/home/example', '/home/example/item1']
  }
}

module.exports = [
  // user login
  {
    url: '/vue-admin-template/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const data = list[username]

      return {
        code: 20000,
        data
      }
    }
  },
  // user logout
  {
    url: '/vue-admin-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
