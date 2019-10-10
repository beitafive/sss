<template>
  <div class="box">
    <div class="top paddL">
      <p class="title w-flex">标题</p>
      <div class="title-text">
        关于《XXXX》的规章制度
      </div>
    </div>
    <div class="top paddL">
      <div class="title-bar  w-flex">
        <span class="title-left">类型</span
        ><span class="title-right">刑法</span>
      </div>
      <p class="title w-flex">法律法规内容</p>
      <div class="title-text">
        此处是法律法规内容文字
      </div>
    </div>
    <div class="top paddL">
      <p class="title w-flex">来源</p>
      <div class="title-bar  w-flex">
        <span class="title-left">矫正机构</span
        ><span class="title-right">仙居县司法局富应执法中队</span>
      </div>
      <div class="title-bar  w-flex">
        <span class="title-left">登记人</span
        ><span class="title-right">张三</span>
      </div>
      <div class="title-bar  w-flex">
        <span class="title-left">登记日期</span
        ><span class="title-right">2019-07-12 08:41:50</span>
      </div>
      <div class="Enclosure w-flex">
        附件
      </div>
      <div
        class="pic-list w-flex"
        v-for="(item, index) in picList"
        :key="index"
      >
        <img class="LabelImg" src="/static/img/icon_fjxz.png" /><span>{{
          item.name
        }}</span
        ><img class="rightImg" src="/static/img/right.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      picList: [
        {
          name: "文件标题文件标题.doc"
        },
        {
          name: "文件标题文件标题.doc"
        },
        {
          name: "文件标题文件标题.doc"
        },
        {
          name: "文件标题文件标题.doc"
        }
      ]
    };
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
  width: 100%;
  border-bottom: 0.005rem solid #dddcde;
  .title-bar {
    width: 100%;
    height: 0.88rem;
    align-items: center;
    font-size: 0.32rem;
    color: rgba(51, 51, 51, 1);
    border-bottom: 0.005rem solid #dddcde;
    .title-left {
      width: 1.28rem;
    }
    .title-right {
      margin-left: 0.52rem;
      color: rgba(143, 142, 148, 1);
    }
  }
  .title {
    width: 100%;
    height: 0.86rem;
    align-items: center;
    font-size: 0.32rem;
    color: rgba(51, 51, 51, 1);
    border-bottom: 0.005rem solid #dddcde;
  }
  .title-text {
    min-height: 1.7rem;
    font-size: 0.32rem;
    color: rgba(143, 142, 148, 1);
    line-height: 0.44rem;
  }
  .Enclosure {
    width: 6.36rem;
    margin-top: 0.34rem;
    padding-left: 0.2rem;
    align-items: center;
    height: 0.6rem;
    background: rgba(240, 239, 245, 1);
    border-radius: 0.04rem 0.04rem 0 0;
    border: 0.02rem solid rgba(226, 226, 226, 1);
    font-size: 0.28rem;
    color: rgba(51, 51, 51, 1);
  }
  .pic-list {
    width: 6.56rem;
    align-items: center;
    height: 0.72rem;
    background: rgba(255, 255, 255, 1);
    border: 0.02rem solid rgba(226, 226, 226, 1);
    .LabelImg {
      width: 0.28rem;
      height: 0.28rem;
      margin: 0 0.2rem 0 0.3rem;
    }
    .rightImg {
      width: 0.14rem;
      height: 0.24rem;
      margin-right: 0.24rem;
    }
    span {
      flex: 1;
      font-size: 0.28rem;
      color: rgba(51, 51, 51, 1);
    }
  }
}
</style>
