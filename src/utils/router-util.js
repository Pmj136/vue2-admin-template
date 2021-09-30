import defaultSettings from '@/settings'
import router from '@/router'

const title = defaultSettings.title || 'Vue Admin Template'

export function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}

export function reWriteMatched(to) {
  if (to.meta.noCache) return
  if (to.matched && to.matched.length > 2) {
    for (let i = 0; i < to.matched.length; i++) {
      const element = to.matched[i]
      if (element.components.default.name === 'EmptyLayout') {
        to.matched.splice(i, 1)
      }
    }
  }
}

export function addRoutes(routes) {
  for (const route of routes) {
    router.addRoute(route)
  }
  // 404 page must be placed at the end !!!
  router.addRoute({ path: '*', redirect: '/404', hidden: true })
}
