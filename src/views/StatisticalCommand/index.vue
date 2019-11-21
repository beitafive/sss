<template>
  <div class="box w-flex">
    <div class="header w-flex">
      <img :src="'/webapi/app/file/download.action?fileuuid=' + mine.faceImgids" class="header-img" />
      <div class="header-name w-flex">
        <span>{{mine.userCName}}</span>
        <img src="@/assets/img/pic_wwc@3x.png" alt="" v-if="total !== success" />
         <img src="../../../public/static/img/pic_ywc@3x.png" alt="" v-else>
      </div>
      <div class="header-time w-flex" @click="show = true">
        <img class="time-img" src="@/assets/img/icon_riqib@3x.png" alt="" />
        <span>{{showDate}}</span>
        <img class="down-img" src="@/assets/img/icon_xz@3x.png" alt="" />
      </div>
    </div>
    <div class="mind w-flex">
      <div>
        <p>{{total}}<i>次</i></p>
        <span>指令总计</span>
      </div>
      <img src="@/assets/img/line_wzsbzl.png" alt="" />
      <div>
        <p>{{success}}<i>次</i></p>
        <span>按指令要求按时上报</span>
      </div>
    </div>
    <div
      class="bottom-box"
      v-for="(item, index) in list"
      :key="index"
    >
      <div class="bottom-top w-flex">
        <span class="bottom-left">{{ item.deptName }}</span>
        <span
          class="bottom-right w-flex"
          :class="item.type == 1 ? '' : 'report'"
          >{{ item.type === 1 ? '已上报' : item.type === 2 ? '待上报' : '未上报'}}</span
        >
      </div>
      <div class="bottom-mind"></div>
      <div class="bottom-btm w-flex">
        <div class="bottom-text">
          {{ item.orderDesc }}
        </div>
      </div>
      <div class="bottom-btn  w-flex">
        <span>上报截止时间：{{ item.endTime }}</span>
        <button @click="goDetails(item)" v-if="item.type !== 3">{{item.type === 2 ? '立即上报' : '查看详情'}}</button>
      </div>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker
        v-model="date"
        type="date"
        @cancel="show = false"
        @confirm="selectTime"
        :min-date="minDate"
        :formatter="formatter"
      />
    </van-popup>
  </div>
</template>

<script>
import { time2Obj, formatTimeObj } from "@/utils/time";
export default {
  name: "index",
  data() {
    return {
      show: false,
      date: new Date(),
      total: 0,
      success: 0,
      currentDate: new Date(),
      list: []
    };
  },
  computed: {
    mine () {
      return this.$store.getters.mine
    },
    showDate() {
      return time2Obj(this.currentDate).year + "-" + time2Obj(this.currentDate).month + '-' + time2Obj(this.currentDate).day;
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
    goDetails(item) {
      if (item.type === 1) {
        let tims = formatTimeObj(item.dwrq + item.dwsj)
        let obj = {
          location: item.dwszdmc,
          address: '',
          lon: item.jd,
          lat: item.wd,
          date: tims.month + '月' + tims.day + '日',
          time: tims.hour + ':' + tims.minute
        }
        // localStorage.recordItem = JSON.stringify(obj)
        setTimeout(()=>{
          this.$push(`/location/detail?address=${encodeURIComponent(obj.address)}&date=${encodeURIComponent(obj.date)}&lon=${obj.lon}&lat=${obj.lat}&location=${encodeURIComponent(obj.location)}&time=${obj.time}`)
        },300)
      } else {
        localStorage.ids = item.orderId
        this.$app.face_location(function () {
          ZLJNativeApi.push({ urlStr: `http://msj.zjsft.gov.cn/#/location?type=2&id=${localStorage.ids}`})
        })
      }
    },
    getList () {
      this.$http.get(this.$api.cmd.all, {
        useruuid: localStorage.uuid,
        datetime: time2Obj(this.currentDate).dateStr2
      }).then(res => {
        if (res.state === '1') {
          let nowStr = time2Obj().dateStr3
          for (let i = 0, len = res.data.length; i < len; i++) {
            if (res.data[i].wd) {
              this.success++
              res.data[i].send_time = formatTimeObj(res.data[i].sendTime)
              res.data[i].type = 1
            } else {
              if (nowStr >= res.data[i].endDelayTime) {
                res.data[i].type = 3
              } else {
                res.data[i].type = 2
              }
            }
            res.data[i].endTime = formatTimeObj(res.data[i].endDelayTime).symbolStr
          }
          this.total = res.data.length
          this.list = res.data
        }
      })
	},
    selectTime (val) {
      this.currentDate = val
      this.success = 0
      this.getList()
      this.show = false
    }
  }
};
</script>

<style scoped lang="scss">
.box {
  flex-direction: column;
  align-items: center;
  position: relative;
  background: #f0eff5;
}

.header {
  position: relative;
  width: 100%;
  height: 2.4rem;
  background-image: url("../../assets/img/bg_wzsbzl@3x.png");
  background-size: 100%;
  background-repeat: no-repeat;
  margin-bottom: 0.88rem;

  .header-img {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 100%;
    margin: 0.32rem 0.28rem 0 0.24rem;
  }

  .header-name {
    flex-direction: column;
    color: #ffffff;
    font-size: 0.36rem;
    margin-top: 0.4rem;

    span {
      margin-bottom: 0.2rem;
    }

    img {
      width: 1.48rem;
      height: 0.48rem;
    }
  }

  .header-time {
    width: 2.3rem;
    height: 0.52rem;
    position: absolute;
    right: 0.24rem;
    top: 0;
    font-size: 0.24rem;
    color: #ffffff;
    align-items: center;
    justify-content: center;
    background-image: url("../../assets/img/bg_riqi.png");
    background-size: 100%;
    background-repeat: no-repeat;

    span {
      margin: 0 0.1rem 0 0.08rem;
    }

    .time-img {
      width: 0.24rem;
      height: 0.24rem;
    }

    .down-img {
      width: 0.2rem;
    }
  }
}

.mind {
  width: 6.72rem;
  height: 1.32rem;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/img/bg_yj.png");
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  top: 1.84rem;
  left:.39rem;

  div {
    width: 3.34rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    p {
      color: #333333;
      font-size: 0.36rem;
      margin-bottom: .14rem;
      i {
        font-size: 0.24rem;
      }
    }

    span {
      font-size: 0.26rem;
      color: #999999;
    }
  }
}

.bottom-box {
  width: 6.72rem;
  height: 2.82rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.12rem;
  margin-bottom: 0.2rem;
  .bottom-top {
    padding: 0.26rem 0.24rem 0.24rem;
    justify-content: space-between;
    align-items: center;
    height: 0.3rem;
    .bottom-left {
      max-width: 4rem;
      font-size: 0.3rem;
      color: #333333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .bottom-right {
      font-size: 0.26rem;
      color: #999999;
      text-align: right;
      line-height: 0.26rem;
    }

    .report {
      color: #f95922;
    }
  }

  .bottom-mind {
    width: 100%;
    height: 0.2rem;
    background: linear-gradient(
      180deg,
      rgba(74, 90, 255, 0.16) 0%,
      rgba(74, 90, 255, 0) 100%
    );
    opacity: 0.5;
  }

  .bottom-btm {
    width: 100%;
    height: 1rem;
    justify-content: center;

    .bottom-text {
      width: 6.24rem;
      height: 0.8rem;
      font-size: 0.28rem;
      color: #666666;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; //这里是在第二行有省略号
      overflow: hidden;
      line-height: 0.4rem;
    }
  }

  .bottom-btn {
    border-top: 0.02rem solid #e9e9e9;
    height: 0.8rem;
    align-items: center;
    justify-content: space-between;

    span {
      margin-left: 0.24rem;
      color: #999999;
      font-szie: 0.28rem;
    }

    button {
      width: 1.4rem;
      height: 0.56rem;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.04rem;
      opacity: 0.5;
      border: 0.02rem solid rgba(102, 102, 102, 1);
      color: #666666;
      font-size: 0.24rem;
      margin-right: 0.24rem;
    }
  }
}
</style>
