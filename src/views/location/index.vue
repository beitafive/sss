<template>
  <div class="map">
    <div class="map-title w-flex">
      {{address.addressComponent.township}}
      <img src="/static/img/times.png" />
      <span>{{ nowDate }}</span>
    </div>
    <div id="maps"></div>
    <div class="location-info">
      <div class="location">
        <p>我的位置</p>
        <p>{{ address.formatted_address }}</p>
      </div>
    </div>
    <div class="btns">
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
      address: {addressComponent: {}}
    };
  },
  mounted() {
    this.initMap();
    this.getLocation();
    this.nowDate = time2Obj().symbolStr;
    this.nowTime = time2Obj()
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
        this.address = res.data.regeocode;
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
