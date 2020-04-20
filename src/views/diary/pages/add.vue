<template>
  <div class="diary-add">
    <div class="add-box">
      <div class="add-item w-flex">
        <div class="add-label">标题</div>
        <input v-model="title"  placeholder="请输入标题（暂不支持特殊字符和表情）" maxlength="50" v-show="isInput" @focus="handleFocus" class="add-value add-input" />
        <div class="add-value">{{title}}<span></span></div>
      </div>
      <div class="add-item w-flex">
        <div class="add-label">类型</div>
        <div class="add-value">{{$route.query.type === 'YMQ01' ? '日记' : '周记'}}</div>
      </div>
      <div class="add-item w-flex">
        <div class="add-label">心情</div>
        <div class="add-value" style="text-align: right;" @click="moodShow = true">{{moodList.length ? moodList[selectIndex].text : ''}}</div>
        <img src="@/assets/img/icon_more@3x.png"  @click="moodShow = true"  />
      </div>
      <div class="add-item w-flex">
        <div class="add-label">日记内容</div>
        <div class="add-value"></div>
      </div>
      <textarea v-model="content" placeholder="请输入日记内容（暂不支持特殊字符和表情）" class="text-input" maxlength="500"></textarea>
    </div>
    <div class="text-num">
      {{content.length}}/500
    </div>
    <div class="confirm-btn" @click="onSubmit"> 提 交 </div>
    <van-popup
      v-model="moodShow"
      position="bottom"
      :style="{ height: '30%' }">
      <van-picker :columns="moodList" @change="onChange"  show-toolbar @cancel="onCancel" @confirm="onConfirm"/>
    </van-popup>
  </div>
</template>

<script>
  import { getNum } from '@/utils/common'
  export default {
    name: 'add',
    data () {
      return {
        isInput: true,
        title: '',
        type: '',
        moodList: [],
        content: '',
        selectIndex: 0,
        moodShow: false
      }
    },
    mounted () {
      this.getMood()
    },
    methods: {
      handleFocus (e) {
        this.isInput = false
      },
      getMood () {
        this.$http.get(this.$api.diary.mood, {
          useruuid: localStorage.uuid
        }).then(res => {
          this.moodList = res.data
        })
      },
      onChange (picker, value, index) {
        this.selectIndex = index
      },
      onCancel () {
        this.moodShow = false
      },
      onConfirm () {
        this.mood = this.moodList[this.selectIndex].value
        this.moodShow = false
      },
      onSubmit () {
        if (!this.title) {
          return this.$toast('请输入标题')
        }
        if (!this.content) {
          return this.$toast('请输入日记内容')
        }
        this.$http.get(this.$api.diary.add, {
          useruuid: localStorage.uuid,
          diaryId: getNum(),
          diaryTitle: this.title,
          selectionDate: this.$route.query.date,
          diaryType: this.$route.query.type,
          mood: this.moodList[this.selectIndex].value,
          diaryContent: this.content
        }).then(res => {
          if (res.state === '1') {
            this.$app.replace_new_url('/diary/list')
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .diary-add {
    overflow: hidden;
    .add-box {
      padding-left: .32rem;
      .add-item {
        height: .88rem; align-items: center; border-bottom: 1px solid #DDDCDE; font-size: .28rem;
        .add-label {
          color: #333333; width: 1.8rem;
        }
        .add-value {
          color: #8F8E94; height: .88rem; flex: 1; line-height: .88rem;
        }
        .add-input { padding-right: .5rem; }
        img {
          width: .2rem; margin: 0 .32rem 0 .2rem;
        }
      }
      .text-input {
        width: 100%; height: calc(100vh - 6rem); resize: none; box-sizing: border-box; padding: .2rem 0; color: #8F8E94; font-size: .32rem; line-height: .44rem;
      }
    }

    .text-num {
      padding: .2rem .32rem 0; border-top: 1px solid #DDDCDE; font-size: .32rem; color: #8F8E94; text-align: right;
    }
    .confirm-btn {
      margin: 4rem auto 0; position: fixed; bottom: .3rem; left:0; right:0; background: #4A5AFF; color: #fff; width: 4.8rem; height: .94rem; line-height: .94rem; border-radius: .47rem; text-align: center; font-size: .32rem;
    }
  }
</style>
