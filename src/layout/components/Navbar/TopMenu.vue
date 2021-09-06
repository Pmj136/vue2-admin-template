<template>
  <el-menu :default-active="currActive" mode="horizontal" router>
    <el-menu-item v-for="item in menus" :index="item.path" :key="item.path">{{ item.meta.title }}</el-menu-item>
  </el-menu>
</template>

<script>

import { getCommonPrefixPath } from '@/utils/validate'

export default {
  name: 'TopMenu',
  computed: {
    currActive() {
      return getCommonPrefixPath(this)
    },
    menus() {
      return this.$router.options.routes.filter(v => !v.hidden && v.meta && v.meta.title)
    }
  }
}
</script>

<style scoped>
.el-menu {
  height: 100%;
}

.el-menu-item {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
