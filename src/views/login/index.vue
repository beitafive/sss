<template>
    <div class="login">
        <img src="@/assets/img/china.png" class="china" />
        <div class="login-title w-bold">浙里矫</div>
        <div class="form-box">
            <div class="form-item w-flex">
                <img src="@/assets/img/login_user.png" class="icon" />
                <input v-model="username" placeholder="用户名" />
            </div>
            <div class="form-item w-flex">
                <img src="@/assets/img/login_pwd.png" class="icon" />
                <input v-model="password" placeholder="密码" type="password" />
                <img src="@/assets/img/pwd.png" class="pwd" />
            </div>
            <div class="login-btn" @click="login">登录</div>

            <div class="scan-btn w-flex" @click="toFace">
                <img src="@/assets/img/login_scan.png" />刷脸登录
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
                username: '33032519770506121X',
                password: '111111',
                isPwd: true
            }
        },
        methods: {
            login () {
                this.$http.get(this.$api.login, {
                    username: this.username,
                    userpwd: this.password
                }).then(res => {
                    if (res.state === '1') {
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
            },
            toFace () {
                this.$app.face_login()
            }
        }
    }
</script>

<style scoped lang="scss">
    .login {
        height: 100%; padding-top: .5rem; background-image: url("../../assets/img/login_bg.png"); background-size: 100%; background-repeat: no-repeat;
        .china { width: 30%; margin-left: 35%; }
        .login-title { text-align: center; font-size: .5rem; color: #fff; margin: .22rem 0 2.7rem; }
        .form-box {
            padding: 0 .52rem;
            .form-item {
                height: .96rem; align-items: center; border-bottom: 1px solid #DDDCDE; font-size: .32rem; color: #666;
                .icon { width: .36rem; margin-right: .32rem; }
                input { height: .94rem; font-size: .32rem; flex: 1; }
                .pwd { width: .34rem; }
            }
            .login-btn { width: 5rem; height: 1rem; font-size: .36rem; text-align: center; line-height: 1rem; border-radius: .5rem; background: #4A5AFF; color: #fff; margin: .8rem auto; }
            .scan-btn {
                align-items: center; justify-content: center; font-size: .28rem; color: #666;
                img { width: .32rem; height: .32rem; margin-right: .2rem; }
            }
        }
    }
</style>
