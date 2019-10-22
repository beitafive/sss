<template>
  <div class="record">
    <div class="time-box w-flex" @click="show = true">
      <img src="@/assets/img/time_icon.png" /> {{ showDate }}
      <img src="@/assets/img/icon_xz@3x.png" />
    </div>
    <div class="user w-flex">
      <div class="user-name">{{mine.userCName}}</div>
      <div class="base-info">
        <p>{{mine.userCName}}</p>
        <p>本月上报<span>{{count}}</span>次</p>
      </div>
    </div>
    <div class="record-list" v-for="(item, index) in list" :key="index">
      <div class="list-day w-flex"><span>{{item.day}}</span><span>{{item.month}}月</span><p></p></div>
      <div class="list-time w-flex" v-for="(times, indexs) in item.list" :key="indexs" @click="toDetail(item, times)">
        <div class="times">{{times.time}}</div>
        <div class="address">
          <p>{{times.location}}</p>
          <p>{{times.address}}</p>
        </div>
      </div>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker
        v-model="date"
        type="year-month"
        @cancel="show = false"
        @confirm="selectTime"
        :min-date="minDate"
        :formatter="formatter"
      />
    </van-popup>
  </div>
</template>

<script>
import { time2Obj } from "@/utils/time";
import { formatRecord} from "@/utils/formatData";

export default {
  name: "record",
  data() {
    return {
      show: false,
      date: new Date(),
      count: 0,
      list: [{
        day: '06',
        month: '03',
        list: []
      }]
    };
  },
  computed: {
    showDate() {
      return time2Obj(this.date).year + "-" + time2Obj(this.date).month;
    },
    mine() {
      return this.$store.getters.mine;
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    selectTime(time) {
      this.date = time;
      this.getList();
    },
    getList() {
      this.$http
        .get(this.$api.location.list, {
          useruuid: localStorage.uuid,
          dateTime: time2Obj(this.date).dateStr
        }).then(res => {
          if (res.state === '1') {
            this.list = formatRecord(res.data)
            this.count = res.data.length
          }
          this.show = false;
        })
    },
    toDetail (item, times) {
      let obj = {
        date: item.month + '月' + item.day + '日',
        ...times
      }
      localStorage.recordItem = JSON.stringify(obj)
      this.$push('/location/detail')
    }
  }
};
</script>

<style scoped lang="scss">
.record {
  height: 100%;
  padding-top: 0.24rem;
  background-image: url("../../../assets/img/map_bg.png");
  background-size: 100%;
  background-repeat: no-repeat;
  .time-box {
    width: 2.02rem;
    height: 0.64rem;
    color: #888;
    align-items: center;
    background-image: url("../../../assets/img/time_bg.png");
    background-size: 100%;
    background-repeat: no-repeat;
    margin-left: 0.34rem;
    font-size: 0.24rem;
    img:nth-of-type(1) {
      width: 0.24rem;
      height: 0.24rem;
      margin: 0 0.08rem 0 0.28rem;
    }
    img:nth-of-type(2) {
      width: 0.16rem;
      margin-left: 0.12rem;
    }
  }
  .user {
    margin: .96rem 0 .72rem;
    box-sizing: border-box;
    padding: 0 .32rem;
    .user-name {
      width: .96rem;
      height: .96rem;
      line-height: .96rem;
      color: #fff;
      background: #59ABF9;
      border-radius: 100%;
      text-align: center;
      font-size: .28rem;
    }
    .base-info {
      flex: 1; margin-left: .2rem;
      p:nth-of-type(1) {
        color: #333;
        font-size: .36rem;
        font-weight: bold;
        padding-top: .08rem;
      }
      p:nth-of-type(2) {
        color: #666;
        font-size: .3rem;
        margin-top: .2rem;
        span { color: #0070D2; font-weight: bold; }
      }
    }
  }
  .record-list {
    box-sizing: border-box; padding-left: .32rem; color: #333;
    .list-day {
      align-items: center;
      span:nth-of-type(1) { font-size: .4rem; }
      span:nth-of-type(2) { font-size: .26rem; margin: 0 auto 0 .04rem; }
      p { width: 5.7rem; height: 1px; background: #DDDCDE; }
    }
    .list-time {
      margin-top: .4rem; font-family:Helvetica;
      .times { font-size: .36rem; font-weight: bold; }
      .address {
        width: 5.7rem; margin-left: auto; box-sizing: border-box; padding: 0 .36rem .28rem 0; border-bottom: 1px solid #DDDCDE;
        p:nth-of-type(1) {
          font-size: .32rem;
        }
        p:nth-of-type(2) {
          font-size: .28rem; color: #8F8E94; line-height: .4rem; margin-top: .2rem;
        }
      }
    }
  }
}
</style>
