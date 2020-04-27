<template>
  <div class="diary">
    <w-calendar :list="calendarList" :selectIndex="currentIndex" @callback="handleIndex" @change="changeList" />
    <img src="@/assets/img/diary_add.png" class="add-btn" v-show="currentIndex !== 100 && calendarList[currentIndex].isButton === '0'" @click="toAdd" />
    <div class="diary-info">
      <div class="tips">周一至周六写日记，周日写周记</div>
      <div class="date-view">{{dateInfo.year}}年{{dateInfo.month}}月{{dateInfo.day}}日 {{dateInfo.week}}</div>
      <div v-for="(mon, ind) in statList" :key="ind">
        <div class="year-title">
          {{mon.year}}年
        </div>
        <div class="month-stat" v-for="(item, index) in mon.list" :key="index">
          <div class="w-flex">
            <span></span>
            {{item.monthTime * 1}}月
          </div>
          <div class="infos">
            有{{item.noDiaryCount}}天的日记缺失，请及时补充（注：一周只允许补充{{item.patchCount}}次，剩余{{item.monthPatchCount}}次）<br/>
            本月总共完成{{item.diaryCount}}篇交心日记的提交
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { time2Obj } from "../../utils/time";
  import { createList, str2Date, returnLunarDay } from "../../utils/calendar";
  import wCalendar from "./components/wCalendar";

  export default {
    name: 'index',
    components: {wCalendar},
    data () {
      return {
        calendarList: [],
        currentIndex: 100,
        dateInfo: time2Obj(),
        statList: []
      }
    },
    mounted () {
      document.addEventListener('visibilitychange', this.getList)
      this.getList()
    },
    destroyed () {
      document.removeEventListener('visibilitychange', this.getList, false)
    },
    methods: {
      handleIndex (index) {
        this.currentIndex = index
        this.dateInfo = time2Obj(this.calendarList[this.currentIndex].date)
      },
      changeList (item) {
        this.dateInfo = time2Obj(item.date)
        this.getList()
      },
      getList () {
        this.$http.get(this.$api.diary.day_detail, {
          useruuid: localStorage.uuid,
          currentMonth: this.dateInfo.year + (this.dateInfo.month + '')
        }).then(res => {
          if (res) {
            for (let i = 0, len = res.data.length; i < len; i++) {
              const obj = str2Date(res.data[i].currentDate)
              res.data[i].date = obj.symbolStr
              res.data[i].name = obj.day * 1
              res.data[i].lunar = returnLunarDay(res.data[i].currentDate)
            }
            this.calendarList = createList(res.data)
            for (let i = 0, len = this.calendarList.length; i < len; i++) {
              if (this.calendarList[i].name === new Date(this.dateInfo.symbolStr).getDate()) {
                this.currentIndex = i
                break
              }
            }
          }
        })
        this.$http.get(this.$api.diary.month_detail, {
          useruuid: localStorage.uuid,
          currentMonth: this.dateInfo.year + (this.dateInfo.month + '')
        }).then(res => {
          if (res) {
            let checkList = []
            let dateList = []
            for (let i = 0, len = res.data.length; i < len; i++) {
              if (!checkList.includes(res.data[i].yearTime)) {
                checkList.push(res.data[i].yearTime)
                dateList.push({
                  year: res.data[i].yearTime,
                  list: []
                })
              }
            }
            for (let i = 0, len = checkList.length; i < len; i++) {
              res.data.map(row => {
                if (row.yearTime === dateList[i].year) {
                  dateList[i].list.push(row)
                }
              })
            }
            this.statList = dateList
          }
        })
      },
      toAdd () {
        this.$http.get(this.$api.diary.check, {
          useruuid: localStorage.uuid,
          selectionDate: this.dateInfo.dateStr2
        }).then(res => {
          if (res) {
            if (res.state === '1') {
              const type = this.currentIndex % 7 === 0 ? 'YMQ02' : 'YMQ01'
              this.$push('/diary/add?date=' + this.dateInfo.dateStr2 + '&type=' + type)
            } else {
              this.$toast(res.message)
            }

          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .diary {
    .add-btn {
      position: fixed; bottom: 1rem; right: .3rem; width: 1.28rem;
    }
    .diary-info {
      border-top: .2rem solid #F0EFF5; padding: .24rem .4rem;
      .tips {
        color: #B5BBC0; font-size: .26rem; text-align: center; margin-bottom: .2rem;
      }
      .date-view {
        color: #333; font-size: .26rem; text-align: center;
      }
      .year-title {
        font-size: .36rem; font-weight: bold; margin-top: .3rem;
      }
      .month-stat {
        margin-top: .26rem; padding-left: .2rem;
        .w-flex {
          align-items: center; font-size: .28rem;
          span {
            width: .16rem; height: .16rem; border-radius: 100%; background: #4A84FF; margin-right: .12rem;
          }
        }
        .infos {
          font-size: .26rem; line-height: .38rem; margin-top: .12rem;
        }
      }
    }
  }
</style>
