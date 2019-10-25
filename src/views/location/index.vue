<template>
  <div class="map">
    <div class="map-title w-flex">
      {{address.addressComponent.neighborhood.name}}
      <img src="@/assets/img/times.png" />
      <span>{{ nowDate }}</span>
    </div>
    <div id="maps"></div>
    <div class="location-info">
      <div class="location">
        <p>我的位置</p>
        <p>{{ address.formatted_address }}</p>
      </div>
    </div>
    <div class="btns" @click="upload">
      位置上报<br/>
      <span>{{nowTime.hour}}:{{nowTime.minute}}</span>
    </div>
    <div class="tips">今日你还未完成位置上报</div>
  </div>
</template>

<script>
import { time2Obj } from "../../utils/time";
import axios from "axios";
export default {
  name: "index",
  data() {
    return {
      nowDate: "",
      nowTime: "",
      system: {},
      address: {addressComponent: {
          neighborhood: { name: '' }
        }}
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
  },
  methods: {
    initMap () {
      this.$toast.loading()
      this.$app.get_location(function(info) {
        let ios = JSON.parse(info)
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
        sessionStorage.ios = info
      })
      setTimeout(() => {
        let ios = JSON.parse(sessionStorage.ios)
        this.system = ios
        axios({
          url: `https://restapi.amap.com/v3/geocode/regeo?location=${ios.lon},${ios.lat}&key=ea4ea3d1c7a9c1bf5e97c1eebcd2e065`,
          methods: "get",
          responseType: "json"
        }).then(res => {
          this.address = res.data.regeocode;
          this.$toast.clear()
        });
      },300)
    },
    // 上传位置
    upload () {
      if (!this.$route.query.face) {
        this.$app.face_location(function () {
          window.location.href = window.location.href + '&face=1'
        })
      } else {
        if (this.$route.query.type === '1') {
          this.$http.get(this.$api.location.upload, {
            useruuid: localStorage.uuid,
            sqjzryXm: this.$store.state.userInfo.userCName,
            longitude: this.system.lon,
            latitude: this.system.lat,
            posName: this.address.addressComponent.township,
            detailAddr: this.address.formatted_address
          }).then(res => {
            if (res.state === '1') {
              this.$push('/location/record')
              this.$toast.success('上报成功')
            }
          })
        } else {
          this.callLocation()
        }
      }
    },
    callLocation () {
      this.$http.get(this.$api.cmd.upload, {
        useruuid: localStorage.uuid,
        orderId: this.$route.query.id,
        dwrq: time2Obj().dateStr2,
        dwsj: time2Obj().datestr4,
        dwsblx: this.system.device,
        dwsbh: this.system.deviceToken,
        jd: this.system.lon,
        wd: this.system.lat,
        swszdmc: this.address.addressComponent.township,
        dwzt: 'Y6901'
      }).then(res => {
        if (res.state === '1') {
          this.$push('/location/record')
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
