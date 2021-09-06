<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="$route.path"
        :collapse="isCollapse"
        :text-color="variables.menuText"
        :unique-opened="false"
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
      showLogo: state => state.settings.sidebarLogo
    }),
    routes() {
      const currPath = this.$route.path
      return this.$router.options.routes.filter(v => currPath.includes(v.path) && !v.hidden)[0].children
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    getBasePath(route) {
      return path.resolve(getCommonPrefixPath(this), route)
    }
  }
}
</script>
