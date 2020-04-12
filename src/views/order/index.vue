<template>
  <div class="wrap">
   <index></index>
    <div class="content">
      <router-view/>
    </div>
  </div>

</template>

<script>
  import Index from  '../index'
  export default {
    name: "index",
    components:Index
  }
</script>

<style scoped>

</style>
