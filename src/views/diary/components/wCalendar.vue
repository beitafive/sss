<template>
  <div class="w-calendar">
    <div class="w-week w-flex">
      <div>日</div>
      <div>一</div>
      <div>二</div>
      <div>三</div>
      <div>四</div>
      <div>五</div>
      <div>六</div>
    </div>
    <div class="list-box w-flex">
      <div :class="['date-item', selectIndex === index ? 'active-item' : '']" v-for="(item, index) in list" :key="index" @click="selectItem(item, index)">
        <div :style="{ color: selectIndex === index ? '#fff' : item.fillSituation ? '#000' : '' }">{{item.name}}</div>
        <div>{{item.lunar}}</div>
        <img src="@/assets/img/diary_que.png" v-if="item.fillSituation === '缺'"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wCalendar',
    props: {
      list: {
        type: Array,
        default() {
          return []
        }
      },
      selectIndex: {
        type: Number
      }
    },
    methods: {
      selectItem (item, index) {
        if (item.fillSituation) {
          this.$emit('callback', index)
        } else {
          this.$emit('change', item)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .w-calendar{
    background: #fff;
    .w-week {
      align-items: center; justify-content: space-between; padding: .4rem .3rem 0; margin-bottom: .2rem;
      div { width: .72rem; color: #B5BBC0; font-size: .24rem; text-align: center;  }
    }
    .list-box {
      flex-wrap: wrap; padding: 0 .1rem;
      .date-item {
        width: .72rem; height: .72rem; position: relative; margin: .1rem .16rem; font-size: .24rem; box-sizing: border-box; padding-top: .14rem; border-radius: 100%; text-align: center; color: #B5BBC0;
        div:nth-of-type(2) {
          transform: scale(.8);
        }
        img {
          position: absolute; right: -.1rem; top: -.1rem; width: .36rem; height: .36rem;
        }
      }
      .active-item {
        color: #fff;
        background: #4A84FF;
      }
    }
  }
</style>
