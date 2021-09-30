import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/storage' // get token from cookie
import { getPageTitle, reWriteMatched } from '@/utils/router-util'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  reWriteMatched(to)
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)
  // determine whether the user has logged in
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ replace: '/' })
      NProgress.done()
    } else {
      const permRoutes = store.state.permission.routes
      if (permRoutes.length > 0) {
        next()
      } else {
        try {
          const routes = await store.dispatch('permission/generateRoutes')
          for (const route of routes) {
            router.addRoute(route)
          }
          // 404 page must be placed at the end !!!
          router.addRoute({ path: '*', redirect: '/404', hidden: true })
          next({ ...to, replace: true })
        } catch (e) {
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
