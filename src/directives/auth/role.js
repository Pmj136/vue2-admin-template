import store from '@/store'

function checkRole(el, binding) {
  const { value } = binding
  const userRoles = store.state.user.roles
  if (value && value instanceof Array) {
    if (value.length > 0) {
      const hasRole = userRoles.some(role => value.includes(role))
      if (!hasRole) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  } else {
    throw new Error(`need roles! Like v-role="['admin','editor']"`)
  }
}

export default {
  inserted(el, binding) {
    checkRole(el, binding)
  },
  update(el, binding) {
    checkRole(el, binding)
  }
}
