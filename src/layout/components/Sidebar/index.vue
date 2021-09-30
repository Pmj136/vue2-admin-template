<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :key="commonPrefixPath"
        unique-opened
        :default-active="$route.path"
        :collapse="isCollapse"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="getBasePath(route.path)"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import { getCommonPrefixPath } from '@/utils/validate'
import path from 'path'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      showLogo: state => state.settings.sidebarLogo,
      permissionRoutes: state => state.permission.routes
    }),
    routes() {
      const currPath = this.$route.path
      if (this.permissionRoutes.length === 0) return []
      return this.permissionRoutes.filter(v => currPath.includes(v.path) && !v.hidden)[0].children
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    },
    commonPrefixPath() {
      return getCommonPrefixPath(this)
    }
  },
  methods: {
    getBasePath(route) {
      return path.resolve(this.commonPrefixPath, route)
    }
  }
}
</script>
