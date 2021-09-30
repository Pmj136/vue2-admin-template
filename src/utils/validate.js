/**
 * Created by PanJiaChen on 16/11/18.
 */
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'user']
  return valid_map.indexOf(str.trim()) >= 0
}

export function getCommonPrefixPath(target) {
  const currPath = target.$route.path
  let lastIndex = currPath.indexOf('/', 1)
  if (lastIndex === -1) lastIndex = currPath.length
  return currPath.substring(0, lastIndex)
}
