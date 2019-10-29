<template>
  <div class="record">
    <div id="maps"></div>
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
          <div class="zhiling" v-if="item.isLcorder">指令上报</div>
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
      list: []
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
          datetime: time2Obj(this.date).dateStr
        }).then(res => {
          if (res.state === '1') {
            this.list = formatRecord(res.data)
            this.count = res.data.length
            if (res.data.length) {
              var icon = new AMap.Icon({
                size: new AMap.Size(40, 50),    // 图标尺寸
                image: require('@/assets/img/map_icon.png'),  // Icon的图像
                // imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
                imageSize: new AMap.Size(20, 30)   // 根据所设置的大小拉伸或压缩图片
              });
              var marker = new AMap.Marker({
                position: new AMap.LngLat(res.data[0].longitude, res.data[0].latitude),
                offset: new AMap.Pixel(-10, -10),
                icon: icon, // 添加 Icon 实例
                zoom: 13
              });
              var map = new AMap.Map("maps", {
                resizeEnable: true, //是否监控地图容器尺寸变化
                zoom: 10, //初始化地图层级
                center: [res.data[0].longitude, res.data[0].latitude] //初始化地图中心点
              });
              map.add(marker)
            }
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
  background-image: url("../../../assets/img/map_bg.png");
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
  #maps {
    height: 3rem; margin-bottom: .2rem;
  }
  .time-box {
    width: 2.02rem;
    height: 0.64rem;
    color: #888;
    align-items: center;
    margin-left: 0.34rem;
    font-size: 0.24rem;
    position: absolute; top: .2rem; left: .2rem; background: #fff; border-radius: .32rem;
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
    position: absolute;
    left: 0; top: 1.7rem;
    width: 100%;
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
        .zhiling {
          background: #E6A23C; margin-top: .1rem; width: 1.2rem; height: .36rem; border-radius: .18rem; text-align: center; line-height: .36rem; color: #fff;
        }
      }
    }

  }
}
</style>
