<template>
  <div class="wrap">
    <sider-bar></sider-bar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import SiderBar from '../components/siderbar/SiderBar'
  export default {
    name: "index",
    components:{
      SiderBar
    }
  }
</script>

<style scoped>

</style>
