const TokenKey = 'token'
const MenuKey = 'menus'

//base
export function getItem(key) {
  const val = sessionStorage.getItem(key)
  if (typeof val === 'object') {
    return JSON.parse(val)
  }
  return val
}

export function setItem(key, val) {
  return sessionStorage.setItem(key, typeof val === 'object' ? JSON.stringify(val) : val)
}

export function removeItem(key) {
  return sessionStorage.removeItem(key)
}

export function clearAll() {
  return sessionStorage.clear()
}

//end base

export function getToken() {
  return getItem(TokenKey)
}

export function setToken(token) {
  return setItem(TokenKey, token)
}

export function removeToken() {
  return removeItem(TokenKey)
}

export function setMenus(val) {
  return setItem(MenuKey, val)
}

export function getMenus() {
  return getItem(MenuKey)
}
