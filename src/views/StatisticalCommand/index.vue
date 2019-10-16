<template>
  <div class="box w-flex">
    <div class="header w-flex">
      <img class="header-img" src="@/assets/img/pic_tx108@3x.png" alt="" />
      <div class="header-name w-flex">
        <span>张宏伟</span>
        <img src="@/assets/img/pic_wwc@3x.png" alt="" />
        <!-- <img src="../../../public/static/img/pic_ywc@3x.png" alt=""> -->
      </div>
      <div class="header-time w-flex">
        <img class="time-img" src="@/assets/img/icon_riqib@3x.png" alt="" />
        <span>2019-05-05</span>
        <img class="down-img" src="@/assets/img/icon_xz@3x.png" alt="" />
      </div>
    </div>
    <div class="mind w-flex">
      <div>
        <p>3<i>次</i></p>
        <span>指令总计</span>
      </div>
      <img src="@/assets/img/line_wzsbzl.png" alt="" />
      <div>
        <p>1<i>次</i></p>
        <span>按指令要求按时上报</span>
      </div>
    </div>
    <div
      class="bottom-box"
      v-for="(item, index) in navList"
      :key="index"
      @click="goDetails(item)"
    >
      <div class="bottom-top w-flex">
        <span class="bottom-left">{{ item.name }}</span>
        <span
          class="bottom-right w-flex"
          :class="item.state == '待上报' ? 'report' : ''"
          >{{ item.state }}</span
        >
      </div>
      <div class="bottom-mind"></div>
      <div class="bottom-btm w-flex">
        <div class="bottom-text">
          {{ item.details }}
        </div>
      </div>
      <div class="bottom-btn  w-flex">
        <span>上报截止时间：{{ item.time }}</span>
        <button>立即上报</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      navList: [
        {
          id: "1",
          name: "余杭区司法局南苑司法所",
          state: "待上报",
          details:
            "请于2019年4月1日  15:30前完成位置上报。完成位置上报。请于2019年4月1日  15:30前完成位置上报。完成位置上报。",
          time: "12:30"
        },
        {
          id: "2",
          name: "下城司法所",
          state: "已上报",
          details: "请于2019年4月1日  15:30前完成位置上报。完成位置上报。",
          time: "12:30"
        },
        {
          id: "3",
          name: "下城司法所",
          state: "已上报",
          details: "请于2019年4月1日  15:30前完成位置上报。完成位置上报。",
          time: "12:30"
        }
      ]
    };
  },
  mounted () {
  	this.getList()
  },
  methods: {
    goDetails(item) {
      this.$push(`/location?id=${item.id}`);
    },
  	getList () {
    	this.$http.get(this.$api.cmd.all, {
    		useruuid: localStorage.uuid
		})
	}
  }
};
</script>

<style scoped lang="scss">
.box {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #f0eff5;
  height: 100%;
}

.header {
  position: relative;
  width: 100%;
  height: 2.4rem;
  background-image: url("../../assets/img/bg_wzsbzl@3x.png");
  background-size: 100%;
  background-repeat: no-repeat;
  margin-bottom: 0.88rem;

  .header-img {
    width: 1.2rem;
    height: 1.2rem;
    margin: 0.32rem 0.28rem 0 0.24rem;
  }

  .header-name {
    flex-direction: column;
    color: #ffffff;
    font-size: 0.36rem;
    margin-top: 0.4rem;

    span {
      margin-bottom: 0.2rem;
    }

    img {
      width: 1.48rem;
      height: 0.48rem;
    }
  }

  .header-time {
    width: 2.3rem;
    height: 0.52rem;
    position: absolute;
    right: 0.24rem;
    top: 0;
    font-size: 0.24rem;
    color: #ffffff;
    align-items: center;
    justify-content: center;
    background-image: url("../../assets/img/bg_riqi.png");
    background-size: 100%;
    background-repeat: no-repeat;

    span {
      margin: 0 0.1rem 0 0.08rem;
    }

    .time-img {
      width: 0.24rem;
      height: 0.24rem;
    }

    .down-img {
      width: 0.2rem;
      height: 0.12rem;
    }
  }
}

.mind {
  width: 6.72rem;
  height: 1.32rem;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/img/bg_yj.png");
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  top: 1.84rem;

  div {
    width: 3.34rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: cneter;
    text-align: center;

    p {
      color: #333333;
      font-size: 0.36rem;

      i {
        font-size: 0.24rem;
      }
    }

    span {
      font-size: 0.26rem;
      color: #999999;
    }
  }
}

.bottom-box {
  width: 6.72rem;
  height: 2.82rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.12rem;
  margin-bottom: 0.2rem;
  .bottom-top {
    padding: 0.26rem 0.24rem 0.24rem;
    justify-content: space-between;
    align-items: center;
    height: 0.3rem;
    .bottom-left {
      max-width: 4rem;
      font-size: 0.3rem;
      color: #333333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .bottom-right {
      font-size: 0.26rem;
      color: #999999;
      text-align: right;
      line-height: 0.26rem;
    }

    .report {
      color: #f95922;
    }
  }

  .bottom-mind {
    width: 100%;
    height: 0.2rem;
    background: linear-gradient(
      180deg,
      rgba(74, 90, 255, 0.16) 0%,
      rgba(74, 90, 255, 0) 100%
    );
    opacity: 0.5;
  }

  .bottom-btm {
    width: 100%;
    height: 1rem;
    justify-content: center;

    .bottom-text {
      width: 6.24rem;
      height: 0.8rem;
      font-size: 0.28rem;
      color: #666666;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; //这里是在第二行有省略号
      overflow: hidden;
      line-height: 0.4rem;
    }
  }

  .bottom-btn {
    border-top: 0.02rem solid #e9e9e9;
    height: 0.8rem;
    align-items: center;
    justify-content: space-between;

    span {
      margin-left: 0.24rem;
      color: #999999;
      font-szie: 0.28rem;
    }

    button {
      width: 1.4rem;
      height: 0.56rem;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.04rem;
      opacity: 0.5;
      border: 0.02rem solid rgba(102, 102, 102, 1);
      color: #666666;
      font-size: 0.24rem;
      margin-right: 0.24rem;
    }
  }
}
</style>
