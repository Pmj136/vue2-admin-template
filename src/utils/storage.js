const TokenKey = 'token'
const MenuKey = 'menus'
const PermsKey = 'perms'
const RolesKey = 'roles'

//base
export function getItem(key) {
  const val = sessionStorage.getItem(key)
  return JSON.parse(val)
}

export function setItem(key, val) {
  return sessionStorage.setItem(key, JSON.stringify(val))
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

export function setPerms(val) {
  return setItem(PermsKey, val)
}

export function getPerms() {
  return getItem(PermsKey)
}

export function setRoles(val) {
  return setItem(RolesKey, val)
}

export function getRoles() {
  return getItem(RolesKey)
}
