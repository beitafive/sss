<template>
  <div class="box">
    <form action="http://118.178.118.28:7080/JudicialZjjzFx/pri/problem/add.action" method="post" enctype="multipart/form-data" target="nm_iframe" id="form">
      <div class="top paddL">
        <p class="title w-flex">
          <input  name="useruuid" :value="uuid" style="display: none" />
          问题和意见 <span>{{ textLength }}/200</span>
        </p>
        <textarea
                class="title-text"
                @input="remaketextLength"
                v-model="textNumber"
                maxlength="200"
                placeholder="请填写10字以上的问题描述以便我们提供更好的帮助"
                name="proDesc"
        ></textarea>
      </div>
      <div class="top paddL">
        <p class="title w-flex">图片（选填，提供问题截图）<span>{{imgList.length}}/4</span></p>
        <div class="title-img">
          <input type="file" @change="addImg" id="files" v-show="false"/>
          <div class="img-item borders" v-show="imgList.length < 4" @click="selectImg">+</div>
          <div class="img-item" v-for="(item, index) in imgList" :key="index" >
            <input  name="imageFile" :value="item.value" style="display: none" />
            <img :src="item.value" />
            <div @click="imgDel(index)">x</div>
          </div>
        </div>
      </div>
      <div class="btn-box w-flex">
        <div class="feedback-btn" @click="submit">提交</div>
      </div>
    </form>
    <iframe id="id_iframe" name="nm_iframe" style="display:none;"></iframe>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      textNumber: "",
      textLength: 0,
      imgList: [],
      uuid: localStorage.uuid
    };
  },
  methods: {
    remaketextLength() {
      this.textLength = this.textNumber.length;
    },
    imgDel (index) {
      this.imgList.splice(index, 1)
    },
    addImg (e) {
      var reader=new FileReader();
      reader.onload=(e)=>{
        this.imgList.push({
          name: 'imageFile',
          value:e.target.result
        })
      }
      reader.readAsDataURL(e.target.files[0])
      document.querySelector('#files').value = ''
    },
    selectImg () {
      document.querySelector('#files').click()
    },
    submit () {
      if (this.textNumber.length < 10) {
        this.$toast('请填写10字以上的问题描述以便我们提供更好的帮助')
        return null
      }
      document.querySelector('#form').submit()
      this.$toast.loading({
        mask: true,
        message: '提交中...',
        onClose: () => {
          this.textNumber = ''
          this.imgList = []
          this.$toast('提交成功')
        }
      })

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
    margin-bottom: .34rem;
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
    display: flex;
    flex-wrap: wrap;
    width: 6.56rem;
    min-height: 2.18rem;
    font-size: 0.32rem;
    color: #8f8e94;
    .img-item {
      width: 1.52rem; height: 1.52rem; position: relative; margin-right: .1rem;
      img {
        width: 1.52rem; height: 1.52rem;
      }
      div {
        position: absolute; right: -.15rem; top: -.15rem; width: .3rem; height: .3rem; text-align: center; background: #8f8e94; color: #fff; border-radius: 100%; font-size: .24rem;
      }
    }
    .borders {
      text-align: center;
      line-height: 1.3rem;
      font-size: 1.7rem;
      border: 1px solid rgba(221,220,222,1);
      color: #DDDCDE;
    }
  }
}
.btn-box {
  .feedback-btn {
    text-align: center;
    background: #fff;
    background-image: url("../../assets/img/bg_btn.png");
    background-size: 100%;
    background-repeat: no-repeat;
    width: 4.8rem;
    height: 0.94rem;
    line-height: .94rem;
    margin: 30px auto;
    color: #fff;
    font-size: 0.36rem;
  }
}
</style>
