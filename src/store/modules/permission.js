import router, { asyncRoutes, constantRoutes } from '@/router'
import { getMenus } from '@/utils/storage'
import path from 'path'

/**
 * Use meta.role to determine if the current user has auth
 * @param menus
 * @param route
 */
function hasPermission(menus, route) {
  if (route.path) {
    return menus.includes(route.path)
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param menus
 * @param basePath
 */
export function filterAsyncRoutes(routes, menus, basePath = '/') {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route, path: path.resolve(basePath, route.path) }
    if (hasPermission(menus, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, menus, tmp.path)
      }
      res.push(tmp)
    }
  })
  return res
}

const state = {
  routes: []
  // addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    // state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  },
  RESET_ROUTES(state) {
    state.routes = []
  }
}

const actions = {
  generateRoutes({ commit }) {
    const menus = getMenus()
    return new Promise(resolve => {
      const accessedRoutes = filterAsyncRoutes(asyncRoutes, menus)
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  },
  resetRoutes({ commit }) {
    commit('RESET_ROUTES')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
