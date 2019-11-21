<template>
    <div class="login">
        <img src="@/assets/img/china.png" class="china" v-if="!is_face" />
        <img :src="'/webapi/app/file/download.action?fileuuid=' + mine.faceImgids" class="head" v-else />
        <div class="login-title w-bold">浙里矫</div>
        <div class="form-box">
            <div class="form-item w-flex" v-show="!is_face">
                <img src="@/assets/img/login_user.png" class="icon" />
                <input v-model="username" placeholder="用户名" />
            </div>
            <div class="form-item w-flex" v-show="!is_face">
                <img src="@/assets/img/login_pwd.png" class="icon" />
                <input v-model="password" placeholder="密码" :type="isPwd ? 'password' : 'text'" />
                <img src="@/assets/img/no_pwd.png" class="pwd" @click="isPwd = !isPwd" v-if="isPwd"/>
                <img src="@/assets/img/pwd.png" class="pwd" @click="isPwd = !isPwd" v-else/>
            </div>
            <div class="remember-box w-flex" v-show="!is_face">
                <van-checkbox v-model="remember" shape="square">记住账号</van-checkbox>
            </div>
            <div class="account-box w-flex" v-show="is_face">
                <span>账号</span>{{username.replace(username.slice(4,username.length-4), '**********')}}
            </div>
            <div class="login-btn" @click="login">{{is_face ? '刷脸登录' : '登录'}}</div>

            <div class="scan-btn w-flex" @click="changeLogin">
                <img :src="is_face ? require('@/assets/img/pwd_login.png') : require('@/assets/img/login_scan.png')" />{{is_face ? '密码登录' : '刷脸登录'}}
            </div>
        </div>
    </div>
</template>

<script>
    import { formatTimeObj, getOverTime } from "@/utils/time"

    export default {
        name: "index",
        data () {
            return {
                username: localStorage.account || '',
                password: '',
                isPwd: true,
                remember: false,
                is_face: false
            }
        },
        computed: {
            mine () {
                return this.$store.getters.mine
            }
        },
        mounted () {
          this.remember = localStorage.account ? true : false
        },
        methods: {
            login () {
                if (!this.is_face) {
                    if (this.username === '') {
                        return this.$toast('用户名不能为空')
                    }
                    if (this.password === '') {
                        return this.$toast('密码不能为空')
                    }
                    this.$http.get(this.$api.login, {
                        username: this.username,
                        userpwd: this.password
                    }).then(res => {
                        if (res.state === '1') {
                            if (this.remember) {
                            localStorage.account = this.username
                        } else {
                            localStorage.removeItem('account')
                        }
                            let times = formatTimeObj(res.data[0].sqjzjsrq)
                            res.data[0].overDate = times.year + '年' + times.month + '月' + times.day + '日'
                            res.data[0].overTime = getOverTime(res.data[0].sqjzjsrq, res.data[0].sqjzksrq)
                            this.$store.dispatch('setUserInfo', res.data[0])
                            localStorage.userInfo = JSON.stringify(res.data[0])
                            localStorage.uuid = res.data[0].userUuid
                            this.$app.send_uuid(res.data[0].userUuid)
                            this.$push('/')
                        }
                    })
                }else {
                    this.toFace()
                }
            },
            toFace () {
                this.$app.face_login()
            },
            changeLogin () {
                if (!localStorage.account) {
                    this.$toast('第一次登录需要密码登录')
                } else {
                    this.is_face = !this.is_face
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .login {
        height: 100%; padding-top: .5rem; background-image: url("../../assets/img/login_bg.png"); background-size: 100%; background-repeat: no-repeat;
        .china { width: 30%; margin-left: 35%; }
        .head { width: 2.16rem; height: 2.16rem; margin-left: 35%; border-radius: 100%;}
        .login-title { text-align: center; font-size: .5rem; color: #fff; margin: .22rem 0 2.7rem; }
        .form-box {
            padding: 0 .52rem;
            .form-item {
                height: .96rem; align-items: center; border-bottom: 1px solid #DDDCDE; font-size: .32rem; color: #666;
                .icon { width: .36rem; margin-right: .32rem; }
                input { height: .94rem; font-size: .32rem; flex: 1; }
                .pwd { width: .34rem; }
            }
            .account-box {
                justify-content: center; color: #666; font-size: .32rem; padding-top: 1rem;
                span { margin-right: .44rem; }
            }
            .login-btn { width: 5rem; height: 1rem; font-size: .36rem; text-align: center; line-height: 1rem; border-radius: .5rem; background: #4A5AFF; color: #fff; margin: .8rem auto; }
            .scan-btn {
                align-items: center; justify-content: center; font-size: .28rem; color: #666;
                img { width: .32rem; height: .32rem; margin-right: .2rem; }
            }
        }
        .remember-box {
            margin-top: .2rem; justify-content: flex-end;
        }
    }
</style>
