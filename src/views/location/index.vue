<template>
    <div class="map">
        <div class="map-title w-flex">
            西溪景苑清晖园东区
            <img src="/static/img/times.png" />
            <span>{{nowDate}}</span>
        </div>
        <div id="maps"></div>
    </div>
</template>

<script>
    import { time2Obj } from "../../utils/time"
    export default {
        name: "index",
        data () {
            return {
                nowDate: ''
            }
        },
        mounted () {
            this.initMap()
            this.nowDate = time2Obj().symbolStr
        },
        methods: {
            initMap () {
                var map = new AMap.Map('maps', {
                    resizeEnable: true, //是否监控地图容器尺寸变化
                    zoom:121, //初始化地图层级
                    center: [116.397428, 39.90923] //初始化地图中心点
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .map {
        #maps { height: 4rem; }
        .map-title {
            align-items: center; height: .88rem; color: #333; font-size: .32rem; padding: 0 .2rem; color: #333; font-weight: bold;
            img { width: .32rem; height: .32rem; margin: 0 .12rem 0 auto; }
            span { font-weight: normal; color: #8F8E94; font-size: .24rem; }
        }
    }
</style>