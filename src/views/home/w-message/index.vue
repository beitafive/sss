<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in list" :key="index">
                {{item.content}}
            </div>
        </div>
    </div>
</template>

<script>
    import swiper from 'swiper'
    export default {
        name: 'wMessage',
        data () {
            return {
                mySwiper: {}
            }
        },
        props: {
            list: []
        },
        watch: {
            list: {
                handler (val) {
                    if (val.length) {
                        console.log('1')
                        this.$nextTick(() => {
                            this.init()
                        })
                    }
                },
                immediate: true
            }
        },
        methods: {
            init () {
                this.mySwiper = new swiper(".swiper-container", {
                    loop: true,
                    autoplay: true,
                    direction: "vertical"
                })
            }
        }
    }

</script>

<style scoped lang='scss'>
.swiper-container {
    height: .3rem;
    .swiper-slide {
        height: .3rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
    }
}
   

</style>