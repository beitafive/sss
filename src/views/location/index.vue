<template>
  <div class="map">
    <div class="map-title w-flex">
      {{location}}
      <img src="@/assets/img/times.png" />
      <span>{{ nowDate }}</span>
    </div>
    <div id="maps"></div>
    <div class="location-info">
      <div class="location">
        <p>我的位置</p>
        <p>{{ address }}</p>
      </div>
    </div>
    <div class="btns" @click="upload">
      位置上报<br/>
      <span>{{nowTime.hour}}:{{nowTime.minute}}</span>
    </div>
    <div class="tips">{{lastTime ? '最近一次上报时间:' + lastTime : '今日你还未完成位置上报'}}</div>
  </div>
</template>

<script>
import { time2Obj, formatTime, formatTimeObj } from "../../utils/time";
import axios from "axios";
export default {
  name: "index",
  data() {
    return {
      nowDate: "",
      nowTime: "",
      system: {},
      address: '',
      location: '',
      township: '',
      list: [],
      lastTime: '',
      inter: {}
    };
  },
  computed: {
    mine () {
        return this.$store.getters.userInfo
    }
  },
  mounted() {
    this.initMap();
    this.nowDate = time2Obj().symbolStr;
    this.nowTime = time2Obj()
    this.inter = setInterval(() => {
      this.nowTime = time2Obj()
    }, 30000)
  },
  destroyed() {
    clearInterval(this.inter)
  },
  methods: {
    initMap () {
      this.$toast.loading()
      this.$http.get(this.$api.location.list, {
          useruuid: localStorage.uuid,
          datetime: time2Obj().dateStr
        }).then(res => {
        if (res.state === '1') {
          this.list = res.data
          if (res.data.length && formatTimeObj(res.data[0].posreportTime).day == time2Obj().day) {
            this.lastTime = formatTime(res.data[0].posreportTime)
          }
        }
      })
      this.$app.get_location(function(info) {
        let ios = ''
        try {
          ios = JSON.parse(info)
        }
        catch {
          this.$toast('位置信号弱 无法获取位置信息')
        }
        if (!ios.lon) {
          return this.$toast('位置信号弱 无法获取位置信息')
        }
        var icon = new AMap.Icon({
          size: new AMap.Size(40, 50),    // 图标尺寸
          image: 'static/img/map_icon.png',  // Icon的图像
          // imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(20, 30)   // 根据所设置的大小拉伸或压缩图片
        });
        var marker = new AMap.Marker({
          position: new AMap.LngLat(ios.lon, ios.lat),
          offset: new AMap.Pixel(-10, -10),
          icon: icon, // 添加 Icon 实例
          zoom: 13
        });
        var map = new AMap.Map("maps", {
          resizeEnable: true, //是否监控地图容器尺寸变化
          zoom: 10, //初始化地图层级
          center: [ios.lon, ios.lat] //初始化地图中心点
        });
        map.add(marker)
        localStorage.ios = info
      })
      setTimeout(() => {
        let ios = JSON.parse(localStorage.ios)
        this.system = ios
        axios({
          url: `https://restapi.amap.com/v3/geocode/regeo?location=${ios.lon},${ios.lat}&key=ea4ea3d1c7a9c1bf5e97c1eebcd2e065`,
          methods: "get",
          responseType: "json"
        }).then(res => {
          this.location = res.data.regeocode.addressComponent.neighborhood.name.length ? res.data.regeocode.addressComponent.neighborhood.name : (res.data.regeocode.addressComponent.streetNumber.street + res.data.regeocode.addressComponent.streetNumber.number)
          this.address = res.data.regeocode.formatted_address
          this.township = res.data.regeocode.addressComponent.township
          if (!this.address) {
            window.location.reload()
          }
          this.$toast.clear()
        })
      }, 1500)
    },
    // 上传位置
    upload () {
      if (this.$route.query.type === '1') {
        this.$http.get(this.$api.location.upload, {
          pushtosjt_user_deptid: '',
          pushtosjt_user_id: this.mine.userUuid,
          pushtosjt_user_name: this.mine.userCName,
          pushtosjt_type: '01',
          sfzh: this.mine.sfzh,
          errorInfo: '',
          dwhm: '',
          dwzt: '',
          dwsblx: 'Y5703',
          activeReportFlag: '',
          uuid: localStorage.uuid,
          sqjzryXm: this.$store.state.userInfo.userCName,
          longitude: this.system.lon,
          latitude: this.system.lat,
          posName: this.location,
          detailAddr: this.address,
          posreportTime: time2Obj().dateStr3,
          corrpsnappaccName: this.$store.state.userInfo.userName
        }).then(res => {
          if (res.state === '1') {
            this.$app.replace_new_url('/location/record')
            this.$toast.success('上报成功')
          }
        })
      } else {
        this.callLocation()
      }
    },
    callLocation () {
      this.$http.get(this.$api.cmd.upload, {
        useruuid: localStorage.uuid,
        orderId: this.$route.query.id,
        dwrq: time2Obj().dateStr2,
        dwsj: time2Obj().dateStr4,
        dwsblx: this.system.device,
        // dwsbh: this.system.deviceToken,
        jd: this.system.lon,
        wd: this.system.lat,
        posName: this.township,
        dwszdmc: this.address,
        dwzt: 'Y6901'
      }).then(res => {
        if (res.state === '1') {
          this.$app.replace_new_url('/location/record')
          this.$toast.success('上报成功')
        }
      })
    }
  }
};
</script>

<style scoped lang="scss">
.map {
  #maps {
    height: 4rem;
  }
  .map-title {
    align-items: center;
    height: 0.88rem;
    color: #333;
    font-size: 0.32rem;
    padding: 0 0.2rem;
    color: #333;
    font-weight: bold;
    img {
      width: 0.32rem;
      height: 0.32rem;
      margin: 0 0.12rem 0 auto;
    }
    span {
      font-weight: normal;
      color: #8f8e94;
      font-size: 0.24rem;
    }
  }
  .location-info {
    padding: 0 0.32rem;
    .location {
      padding: 0.28rem 0;
      border-bottom: 1px solid #dddcde;
      p:nth-of-type(1) {
        font-size: 0.32rem;
        color: #333;
        font-family: Helvetica;
        margin-bottom: 0.1rem;
      }
      p:nth-of-type(2) {
        font-size: 0.28rem;
        line-height: 0.4rem;
        color: #8f8e94;
      }
    }
  }
  .btns {
    width: 3.12rem;
    height: 3.12rem;
    background-image: url("../../assets/img/loca_btn.png");
    background-size: 100%;
    text-align: center;
    color: #fff;
    box-sizing: border-box;
    padding-top: 1rem;
    font-size: .36rem;
    margin: .2rem auto 0;
    span {
      display: inline-block;
      font-size:.32rem;
      margin-top: .2rem;
    }
  }
  .tips {
    color: #8F8E94; font-size: .24rem; text-align: center;
  }
}
</style>
