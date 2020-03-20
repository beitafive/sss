<template>
  <div class="group-list">

  </div>
</template>

<script>
  export default {
    name: 'groupList',
    data () {
      return {
        list: []
      }
    },
    mounted () {
      this.getList()
    },
    methods: {
      getList() {
        this.$http.get(this.$api.team_list, {
          useruuid: localStorage.uuid
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .group-list {

  }
</style>
