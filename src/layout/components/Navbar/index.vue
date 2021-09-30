<template>
  <div class="navbar">
    <div class="navbar-left">
      <hamburger />
      <span v-if="projectTitle!==false" class="project-title">{{ projectTitle }}</span>
      <top-menu class="top-menu" />
    </div>
    <div class="navbar-right">
      <span class="role-name">当前账号：开发测试</span>
      <span style="color: red;cursor: pointer;margin-left: 10px" @click="logout">退出</span>
    </div>
  </div>
</template>

<script>
import Hamburger from './Hamburger'
import TopMenu from './TopMenu'
import settings from '@/settings'

export default {
  components: {
    Hamburger,
    TopMenu
  },
  computed: {
    projectTitle() {
      return settings.title
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      // this.$router.replace(`/login?redirect=${this.$route.fullPath}`)
      this.$router.replace(`/login`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  //box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  padding: 0 15px;
  box-sizing: border-box;

  .navbar-left {
    height: 100%;
    display: flex;
    align-items: center;

    .project-title {
      margin-left: 15px;
      color: #0075FF;
      font-weight: 600;
      font-size: 18px;
      white-space: nowrap;
    }

    .top-menu {
      margin-left: 20px;
    }
  }

  .navbar-right {
    display: flex;
    align-items: center;

    .role-name {
      font-size: 15px;
      color: #353333;
    }
  }
}
</style>
