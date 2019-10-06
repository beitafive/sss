<template>
    <div class="record">
        <div id="maps"></div>
    </div>
</template>

<script>
    export default {
        name: "record",
        mounted () {
          this.initMap()
        },
        methods: {
            initMap () {
                var map = new AMap.Map('maps', {
                    resizeEnable: true, //是否监控地图容器尺寸变化
                    zoom:121, //初始化地图层级
                    center: [116.397428, 39.90923] //初始化地图中心点
                })
            },
        }
    }
</script>

<style scoped>

</style>