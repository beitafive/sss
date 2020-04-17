<template>
  <div class="diary-list">
    <div class="diary-item" v-for="(item, index) in list" :key="index" @click="toDetail(item)">
      <div class="diary-title w-flex">
        <span>{{item.diaryTitle}}</span>
        <img src="@/assets/img/icon_more@3x.png" />
      </div>
      <img src="@/assets/img/border.png" class="border-img" />
      <p>{{item.diaryContent}}</p>
      <div class="type-date w-flex">
        <span>{{item.diaryTypeName}}</span>
        <span>{{item.date}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { str2Date } from '@/utils/calendar'
  export default {
    name: 'list',
    data () {
      return {
        list: [],
        page: 0,
        disabled: false
      }
    },
    mounted () {
      this.getList()
      window.onscroll =  () => {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        let domHeight = document.querySelector('.diary-list').offsetHeight
        let bodyHeight = document.body.offsetHeight
        if ( domHeight - bodyHeight - scrollTop <= 50 ) {
          this.getList()
        }
      }
    },
    methods: {
      getList () {
        if (!this.disabeld) {
          this.disabeld = true
          this.page++
          this.$http.get(this.$api.diary.list, {
            useruuid: localStorage.uuid,
            page: this.page
          }).then(res => {
            for (let i = 0, len = res.data.length; i < len; i++) {
              res.data[i].date = str2Date(res.data[i].diaryTime).symbolStr
            }
            this.list = this.list.concat(res.data)
            setTimeout(() => {
              this.disabeld = false
            }, 500)
          })
        }
      },
      toDetail (item) {
        this.$push(`/diary/detail/${item.diaryId}`)
      }
    }
  }
</script>

<style scoped lang="scss">
  .diary-list {
    padding: .2rem 0; background: #F0EFF5; min-height: 100%; box-sizing: border-box;
    .diary-item {
      background: #fff; border-radius: 6px; height: 3rem; margin: 0 .24rem .2rem; font-size: .32rem;
      .diary-title {
        height: .8rem; align-items: center; justify-content: space-between; padding: 0 .24rem;
        span {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-all;
        }
        img {
          width: .14rem;
        }
      }
      .border-img {
        width: 100%;
      }
      p {
        border-bottom: 1px solid #E9E9E9; height: .9rem; padding: .06rem .24rem .1rem; font-size: .28rem; color: #666; line-height: .48rem; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
      }
      .type-date {
        justify-content: space-between; align-items: center; height: .8rem; padding: 0 .24rem;
        span:nth-of-type(1) {
          color: #2289F2; font-size: .28rem;
        }
        span:nth-of-type(2) {
          color: #666666; font-size: .26rem;

        }
      }
    }
  }
</style>
