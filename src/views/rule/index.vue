<template>
  <div class="box w-flex">
    <div
      class="rules-box"
      v-for="(item, index) in info"
      :key="index"
      @click="goDetails(item)"
    >
      <div class="rules-top w-flex">
        <span class="rules-left">{{ item.orgName }}</span>
        <span class="rules-right w-flex"
          >{{ item.time }} <img src="@/assets/img/right.png"
        /></span>
      </div>
      <div class="rules-mind"></div>
      <div class="rules-btm w-flex">
        <div class="rules-text">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTime } from "@/utils/time";
export default {
  name: "index",
  data() {
    return {
      info: []
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.$http.get(this.$api.rule.list, {
          useruuid: localStorage.uuid,
          page: 1
        }).then(res => {
          if (res.state === "1") {
            res.data.map(item => {
              item.time = formatTime(item.time)
            })
            this.info = res.data
          }
        })
    },
    goDetails(item) {
    	this.$push(`/ruledetail/?id=${item.uuid}`)
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background: rgba(240, 239, 245, 1);
  padding-top: 0.2rem;
}
.rules-box {
  width: 6.72rem;
  height: 2.04rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.12rem;
  margin-bottom: 0.2rem;
  padding-bottom: 0.32rem;
  .rules-top {
    padding: 0.26rem 0.24rem 0.24rem;
    justify-content: space-between;
    align-items: center;
    .rules-left {
      max-width: 4rem;
      font-size: 0.3rem;
      color: #333333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .rules-right {
      font-size: 0.26rem;
      color: #8f8e94;
      text-align: right;
      line-height: 0.26rem;
      img {
        margin-left: 0.16rem;
        width: 0.14rem;
        height: 0.24rem;
      }
    }
  }
  .rules-mind {
    width: 100%;
    height: 0.2rem;
    background: linear-gradient(
      180deg,
      rgba(74, 90, 255, 0.16) 0%,
      rgba(74, 90, 255, 0) 100%
    );
    opacity: 0.5;
  }
  .rules-btm {
    width: 100%;
    height: 1.04rem;
    justify-content: center;
    .rules-text {
      width: 6.24rem;
      height: 0.8rem;
      font-size: 0.28rem;
      line-height: 0.4rem;
      color: rgba(102, 102, 102, 1);
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; //这里是在第二行有省略号
      overflow: hidden;
    }
  }
}
</style>
