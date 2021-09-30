import { login, logout } from '@/api/user'
import {
  getToken,
  setToken,
  removeToken,
  clearAll,
  setMenus,
  setPerms,
  getPerms,
  getRoles,
  setRoles
} from '@/utils/storage'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    perms: getPerms() || [],
    roles: getRoles() || []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_PERMS: (state, perms) => {
    state.perms = perms
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  login({ commit, dispatch }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        commit('SET_PERMS', data.permissions)
        commit('SET_ROLES', data.roles)
        setToken(data.token)
        setMenus(data.menus)
        setPerms(data.permissions)
        setRoles(data.roles)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, dispatch, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        clearAll()
        resetRouter()
        commit('RESET_STATE')
        dispatch('permission/resetRoutes', {}, { root: true })
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

