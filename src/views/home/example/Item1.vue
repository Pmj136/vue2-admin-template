<template>
  <div>
    <h2 v-permission="['user:add']">示例1</h2>
    <input type="text" />
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Item1',
}
</script>

<style scoped>

</style>
