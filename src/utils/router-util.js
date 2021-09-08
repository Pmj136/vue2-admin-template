import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue Admin Template'

export function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}

export function reWriteMatched(to) {
  if (!to.meta.keepAlive) return
  if (to.matched && to.matched.length > 2) {
    for (let i = 0; i < to.matched.length; i++) {
      const element = to.matched[i]
      if (element.components.default.name === 'EmptyLayout') {
        to.matched.splice(i, 1)
      }
    }
  }
}
