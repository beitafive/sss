<template>
  <div class="map">
    <div class="map-title w-flex">
      西溪景苑清晖园东区
      <img src="/static/img/times.png" />
      <span>{{ nowDate }}</span>
    </div>
    <div id="maps"></div>
    <div class="location-info">
      <div class="location">
        <p>我的位置</p>
        <p>{{ address }}</p>
      </div>
    </div>
    <div class="upload-btn"></div>
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
      address: ""
    };
  },
  mounted() {
    this.initMap();
    this.getLocation();
    this.nowDate = time2Obj().symbolStr;
  },
  methods: {
    initMap() {
      var map = new AMap.Map("maps", {
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom: 121, //初始化地图层级
        center: [116.397428, 39.90923] //初始化地图中心点
      });
    },
    getLocation() {
      axios({
        url:
          "https://restapi.amap.com/v3/geocode/regeo?location=116.310003,39.991957&key=ea4ea3d1c7a9c1bf5e97c1eebcd2e065",
        methods: "get",
        responseType: "json"
      }).then(res => {
        this.address = res.data.regeocode.formatted_address;
      });
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
      height: 1.8rem;
      padding-top: 0.28rem;
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
  .location-btn {
  }
}
</style>
