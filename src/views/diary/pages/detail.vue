<template>
  <div class="diary-detail">
    <div class="detail-box">
      <div class="add-item w-flex">
        <div class="add-label">标题</div>
        <div class="add-value">{{info.diaryTitle}}</div>
      </div>
      <div class="add-item w-flex">
        <div class="add-label">类型</div>
        <div class="add-value">{{info.diaryTypeName}}</div>
      </div>
      <div class="add-item w-flex">
        <div class="add-label">心情</div>
        <div class="add-value">{{info.moodName}}</div>
      </div>
      <div class="add-item w-flex">
        <div class="add-label">时间</div>
        <div class="add-value">{{info.date}}</div>
      </div>
      <div class="add-item w-flex">
        <div class="add-label">内容</div>
        <div class="add-value"></div>
      </div>
      <p class="content">
        {{info.diaryContent}}
      </p>
      <div class="add-item w-flex" v-if="info.diaryTypeName === '周记'">
        <div class="add-label">点评</div>
        <div class="add-value"></div>
      </div>
      <p class="content" v-if="info.diaryTypeName === '周记'">
        {{info.comment}}
      </p>
    </div>
  </div>
</template>

<script>
  import { str2Date } from "../../../utils/calendar"
  export default {
    name: 'detail',
    data () {
      return {
        info: {}
      }
    },
    mounted() {
      this.getInfo()
    },
    methods: {
      getInfo () {
        this.$http.get(this.$api.diary.detail, {
          useruuid: localStorage.uuid,
          diaryId: this.$route.params.id
        }).then(res => {
          res.data[0].date = str2Date(res.data[0].diaryTime).symbolStr
          this.info = res.data[0]
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .diary-detail {
    .detail-box {
      padding-left: .32rem;
      .add-item {
        height: .88rem; align-items: center; border-bottom: 1px solid #DDDCDE; font-size: .32rem;
        .add-label {
          color: #333333; width: 1.8rem;
        }
        .add-value {
          color: #8F8E94; height: .88rem; flex: 1; line-height: .88rem;
        }
        img {
          width: .2rem; margin: 0 .32rem 0 .2rem;
        }
      }
      .content {
        color: #8F8E94; font-size: .32rem; line-height: .44rem; margin: .1rem 0 .16rem;
      }
    }
  }
</style>
