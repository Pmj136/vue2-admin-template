import store from '@/store'

function checkPermission(el, binding) {
  const { value } = binding
  const userPerms = store.state.user.perms
  if (value && value instanceof Array) {
    if (value.length > 0) {
      const hasPermission = userPerms.some(perm => value.includes(perm))
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  } else {
    throw new Error(`need roles! Like v-permission="['admin','editor']"`)
  }
}

export default {
  inserted(el, binding) {
    checkPermission(el, binding)
  },
  update(el, binding) {
    checkPermission(el, binding)
  }
}
