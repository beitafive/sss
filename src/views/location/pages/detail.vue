<template>
  <div class="record-detail">
    <div id="maps"></div>
    <div class="user-info w-flex">
        <img :src="'http://118.178.118.28:7080/JudicialZjjzFx/app/file/download.action?fileuuid=' + mine.faceImgids" />
        <div>
            <p>{{mine.userCName}}</p>
            <p>{{mine.companyName}}</p>
        </div>
    </div>
    <div class="base-info">
        <div class="date">{{info.date}}</div>
        <div class="info-box w-flex">
            <div class="time">{{info.time}}</div>
            <div class="address">
                <p>{{info.location}}</p>
                <p>{{info.address}}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  computed: {
    mine () {
      return this.$store.getters.mine
    },
    info () {
      return this.$route.query
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      var icon = new AMap.Icon({
        size: new AMap.Size(40, 50),    // 图标尺寸
        image: require('@/assets/img/map_icon.png'),  // Icon的图像
        // imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
        imageSize: new AMap.Size(20, 30)   // 根据所设置的大小拉伸或压缩图片
      });
      var marker = new AMap.Marker({
        position: new AMap.LngLat(this.info.lon, this.info.lat),
        offset: new AMap.Pixel(-10, -10),
        icon: icon, // 添加 Icon 实例
        title: this.info.location,
        zoom: 13
      });
      var map = new AMap.Map("maps", {
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom: 10, //初始化地图层级
        center: [this.info.lon, this.info.lat] //初始化地图中心点
      });
      map.add(marker)
    }
  }
};
</script>

<style scoped lang="scss">
    .record-detail {
        position: relative;
        #maps {
            height: 8.4rem;
        }
        .user-info {
            position: absolute; top: 7rem; left: 0; z-index: 999; width: 100%; box-sizing: border-box; height: 1.4rem; align-items: center; padding: 0 .32rem; background-image: url("../../../assets/img/bg_jianbian@2x.png"); background-size: 100%; background-repeat: no-repeat;
            img { width: .96rem; height: .96rem; border-radius: 100%; margin-right: .2rem; }
            div {
                p:nth-of-type(1) { color: #333; font-size: .36rem; font-weight: bold; }
                p:nth-of-type(2) { color: #666; font-size: .28rem; margin-top: .12rem; }
            }
        }
        .base-info {
            margin-top: .4rem; color: #333; box-sizing: border-box; padding: 0 .32rem;
            .date { font-size: .28rem; margin-bottom: .2rem; }
            .info-box {
                .time { font-size: .36rem; font-weight: bold; margin-right: .22rem; }
                .address {
                    p:nth-of-type(1) { font-size: .32rem; margin-bottom: .2rem; }
                    p:nth-of-type(2) { font-size: .28rem; line-height: .4rem; color: #666; }
                }
            }
        }
    }
</style>
