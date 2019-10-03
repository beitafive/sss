<template>
  <div id="app">
    <router-view/>
    <w-nav />
  </div>
</template>
<script>
  import { wNav } from '@/components'
  export default {
    components: {
      wNav
    }
  }
</script>
<style scoped>
  #app { height: 100%; box-sizing: border-box; padding-bottom: 1rem; }
</style>
