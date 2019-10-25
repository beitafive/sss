<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
<!--      <div class="swiper-slide" v-for="(item, index) in list" :key="index" >Slide{{item}}</div>-->
      <div class="swiper-slide">1</div>
      <div class="swiper-slide">12</div>
      <div class="swiper-slide">123</div>
      <div class="swiper-slide">1234</div>
      <div class="swiper-slide">12345</div>
      <div class="swiper-slide">123456</div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data () {
      return {
        active: 0,
        swiper: {},
        list: [1,2,3,4,5,6]
      }
    },
    mounted() {
      this.swiper = new Swiper ('.swiper-container', {
        spaceBetween: 3,
        loop: true,
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        on:{
          slideChange: () => {
            this.active = this.swiper.activeIndex
          },
          touchMove: function(event){
            console.log(event)
          },
        }
      })}
  }
</script>

<style scoped lang="scss">
  .swiper-container {
    height: 4rem; padding-top: .5rem;
    .swiper-wrapper {
      margin: 0 .4rem;
      .swiper-slide {
        width:2.4rem; margin-left: .3rem; height: 3rem; position: relative;
        background: #4A5AFF; border-radius: 10px;
        transform: scale(.9);
        transition: all .4s;
      }
      .swiper-slide-active { transform: scale(1); background: #07c160; }
      .swiper-slide-prev { transform: scale(.9) translateX(2.6rem); opacity: .8; transition: opacity .2s }
    }
  }
</style>
