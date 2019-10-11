<template>
  <div class="box">
    <div class="top paddL">
      <p class="title w-flex">
        问题和意见 <span>{{ textLength }}/200</span>
      </p>
      <textarea
        class="title-text"
        @input="remaketextLength"
        v-model="textNumber"
        maxlength="200"
        placeholder="请填写10字以上的问题描述以便我们提供更好的帮助"
      ></textarea>
    </div>
    <div class="top paddL">
      <p class="title w-flex">图片（选填，提供问题截图）<span>0/4</span></p>
      <div class="title-img"></div>
    </div>
    <div class="btn-box w-flex">
      <button class="feedback-btn">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      textNumber: "",
      textLength: 0
    };
  },
  methods: {
    remaketextLength() {
      this.textLength = this.textNumber.length;
    }
  }
};
</script>

<style scoped lang="scss">
.box {
  height: 100%;
}
.paddL {
  padding-left: 0.32rem;
}
.top {
  border-bottom: 0.005rem solid #dddcde;
  .title {
    height: 0.86rem;
    align-items: center;
    font-size: 0.32rem;
    color: #333333;
    border-bottom: 0.005rem solid #dddcde;
    justify-content: space-between;
    span {
      font-size: 0.28rem;
      color: #cccccc;
      margin-right: 0.32rem;
    }
  }
  .title-text {
    width: 6.56rem;
    min-height: 4.08rem;
    font-size: 0.32rem;
    color: #8f8e94;
    line-height: 0.44rem;
    resize: none;
  }
  .title-img {
    width: 6.56rem;
    min-height: 2.18rem;
    font-size: 0.32rem;
    color: #8f8e94;
  }
}
.btn-box {
  .feedback-btn {
    background: #fff;
    background-image: url("../../assets/img/bg_btn.png");
    background-size: 100%;
    background-repeat: no-repeat;
    width: 4.8rem;
    height: 0.94rem;
    margin: 30px auto;
    color: #fff;
    font-size: 0.36rem;
  }
}
</style>
