<template>
  <div style="font-weight: bold;padding: 20px;box-sizing: border-box">
    dev --- {{ currRoute }}
  </div>
</template>

<script>
export default {
  name: 'Dev',
  computed: {
    currRoute() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>

</style>
