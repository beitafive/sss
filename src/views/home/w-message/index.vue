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
                mySwiper: ""
            }
        },
        props: {
            list: []
        },
        watch: {
            list: {
                handler (val) {
                    if (val.length) {
                        this.$nextTick(() => {
                            if (this.mySwiper) this.mySwiper.destroy(false)
                            this.init()
                        })
                    }
                },
                immediate: true,
                deep: true
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
    height: .28rem;
    .swiper-slide {
        height: .28rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
    }
}
   

</style>