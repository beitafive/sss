<template>
  <div class="change-pwd">
    <div class="add-box">
      <div class="add-item w-flex">
        <div class="add-label">新密码</div>
        <input v-model="new_pwd" placeholder="请输入新密码" type="password" class="add-value" />
      </div>
      <div class="add-item w-flex">
        <div class="add-label">确认密码</div>
        <input v-model="confirm_pwd" placeholder="请再次输写确认新密码" type="password" class="add-value" />
      </div>
      <div class="tips">密码必须包含英文字符及数字，且长度在6~20字符之间</div>
    </div>
    <div class="confirm-btn" @click="onSubmit"> 确 定 </div>
  </div>
</template>

<script>
  export default {
    name: 'changePwd',
    data () {
      return {
        old_pwd: '',
        new_pwd: '',
        confirm_pwd: ''
      }
    },
    mounted () {
      // this.$toast.success('修改成功');
      // this.$toast({
      //   icon: 'cross',
      //   message: '修改失败'
      // })
    },
    methods: {
      onSubmit () {
        if (this.new_pwd === this.confirm_pwd) {
          this.$http.get(this.$api.change_pwd, {
            useruuid: localStorage.uuid,
            newpwd: this.new_pwd
          }).then(res => {
            if (res.state === '1') {
              // eslint-disable-next-line no-console
              this.$push('/mine')
            }
          })
        }else {
          this.$toast.fail('两次密码输入不一致')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .change-pwd {
    .add-box {
      padding-left: .32rem;
      .add-item {
        height: .88rem; align-items: center; border-bottom: 1px solid #DDDCDE; font-size: .32rem;
        .add-label {
          color: #333333; width: 1.8rem;
        }
        .add-value {
          color: #8F8E94; height: .88rem; flex: 1; line-height: .88rem;
        }
        img {
          width: .2rem; margin: 0 .32rem 0 .2rem;
        }
      }
      .tips {
        color: #FF7800; font-size: .24rem; margin-top: .2rem;
      }
    }
    .confirm-btn {
      margin: 4rem auto 0; position: fixed; bottom: 1rem; left:0; right:0; background: #4A5AFF; color: #fff; width: 4.8rem; height: .94rem; line-height: .94rem; border-radius: .47rem; text-align: center; font-size: .32rem;
    }
  }
</style>
