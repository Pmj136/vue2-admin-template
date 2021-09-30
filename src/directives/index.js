import Vue from 'vue'

import permission from './auth/permission'
import role from './auth/role'

Vue.directive('permission', permission)
Vue.directive('role', role)

