<template>
  <div class="group-list">
    <div class="group-item w-flex" v-for="(item, index) in list" :key="index">
      <span>用户23</span>
      <div>司法工作人员</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'groupList',
    data () {
      return {
        list: [1,2,3]
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
    height: 100%; background: #F0EFF5; padding-top: .24rem; box-sizing: border-box;
    .group-item {
      height: 1.4rem; border-left: .1rem solid #697ADC; background: #fff; margin-bottom: .24rem; align-items: center;
      span {
        color: #333; font-size: .32rem; width: 1.2rem; margin-left: .34rem;
      }
      div {
        color: #4355CF; background: rgba(67,88,229,0.08); font-size: .24rem; border-radius: .04rem; padding: .08rem .16rem;
      }
    }
  }
</style>
