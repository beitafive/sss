<template>
    <div class="home">
        <div class="home-top w-flex">
            <div class="home-date">
                <div>期满解矫到期时间：<br/>
                    {{mine.overDate}}</div>
                <div>离解矫还剩{{mine.overTime.day}}天</div>
            </div>
            <div class="date-tips">
                {{mine.sqjzqx}}<br/>
                矫正期限
            </div>
        </div>
        <div class="home-nav w-flex">
            <div class="nav-item" v-for="(item, index) in navList" :key="index" @click="blankTips(index)">
                <img :src="item.img" />
                <div v-if="item.count">{{item.count}}</div>
            </div>
        </div>
        <div class="home-tips w-flex" @click="toMsg">
            <img src="@/assets/img/home_tips.png" />
            <w-message :list="msg_list" v-if="msg_list.length"/>
            <div v-else>暂无通知</div>
            <span v-if="msg_list.length !== '0'">{{msg_list.length}}</span>
        </div>

        <div class="home-record">
            <div class="record"><span @click="toRecord">记录</span></div>
            <div class="days" @click="toLocation">每日位置上报</div>
<!--            <div class="tips w-flex"><img src="@/assets/img/red_icon.png" />您有新的位置上报指令，请及时上报</div>-->
        </div>

        <div class="tips-box w-flex" @click="toCmd">
            <img src="@/assets/img/tips_1.png" class="logo" />
            <div>
                <p>位置上报指令</p>
                <p>一键进入查看位置上报完成情况</p>
            </div>
            <span v-if="info.lcorderNum !== '0'">{{info.lcorderNum}}</span>
            <img src="@/assets/img/right.png" class="icon" />
        </div>
        <div class="tips-box w-flex" @click="blankTips">
            <img src="@/assets/img/tips_2.png" class="logo" />
            <div>
                <p>再犯罪风险评估</p>
                <p>一键进入在线测评及查看测评记录</p>
            </div>
            <span v-if="info.remark4 !== '0'">{{info.remark4}}</span>
            <img src="@/assets/img/right.png" class="icon" />
        </div>
        <img src="@/assets/img/home_bottom_banner.png" width="100%" class="bottom_banner" @click="blankTips" />
    </div>
</template>

<script>
    import wMessage from './w-message'
    export default {
        name: "index",
        data () {
            return {
                navList: [
                    { img: require('@/assets/img/home_nav_1.png'), count: 0, route: '/' },
                    { img: require('@/assets/img/home_nav_2.png'), count: 0, route: '/' },
                    { img: require('@/assets/img/home_nav_3.png'), count: 0, route: '/' },
                    { img: require('@/assets/img/home_nav_4.png'), count: 0, route: '/' }
                    ],
                tips_count: 0,
                info: {
                    noticeNum: 0
                },
                msg_list: []
            }
        },
        components: {
            wMessage
        },
        computed: {
            mine () {
                return this.$store.getters.mine
            }
        },
        mounted () {
            this.inter = setInterval(() => {
                this.getMsg()
            }, 15000)
            this.getInfo()
            this.getMsg()
            this.navList[0].count = this.$app.get_msg_num()
        },
        destroyed() {
            clearInterval(this.inter)
        },
        methods: {
            toMsg () {
              this.$app.to_msg()
            },
            getInfo () {
                this.$http.get(this.$api.index.base_info, {
                    useruuid: localStorage.uuid
                }).then(res => {
                    if (res.state === '1') {
                        this.info = res.data[0]
                    }
                })
            },
            getMsg () {
                try {
                    this.navList[0].count = this.$app.get_msg_num()
                }
                catch {
                    console.log('err')
                }
                this.$http.get(this.$api.index.msg_list, {
                    useruuid: localStorage.uuid,
                    isReaded: 0,
                    page: 1
                }).then(res => {
                    if (res.state === '1') {
                        this.msg_list = res.data
                    }
                })
            },
            toCmd () {
                this.$push('/StatisticalCommand')
            },
            toLocation () {
                this.$app.face_location(function () {
                    ZLJNativeApi.push({ urlStr: 'http://223.4.74.40:7080/#/location?type=1&face=1'})
                })
            },
            toRecord () {
                this.$push('/location/record')
            },
            blankTips (index) {
                if (index === 0) {
                   this.$app.to_socket()
                } else {
                    this.$toast('此功能尚未开放')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .home {
        height: 100%; background-image: url("../../assets/img/home_top_bg.png"); background-size: 100%; background-repeat: no-repeat; padding: 1.02rem .32rem .8rem; color: #fff; font-size:.28rem;
        .home-top {
            justify-content: space-between;
            .home-date {
                margin-left: .08rem;
                div {
                    line-height: .5rem;
                }
                div:nth-of-type(1) {
                    margin-bottom: .1rem;
                }
            }
            .date-tips { width: 2.04rem; height: 1.64rem; padding-top: .4rem; margin-right: .4rem; box-sizing: border-box; text-align: center; line-height: .4rem; border: 2px dashed ; border-radius: 100%; }
        }

        .home-nav {
            justify-content: space-between; margin-top: .7rem;
            .nav-item {
                width: 1.52rem; position: relative;
                img { width: 100%; }
                div { font-size: .24rem; position: absolute; width: .44rem; height: .44rem; text-align: center; line-height: .44rem; right: -.12rem; top: -.22rem; background: #F52323; border-radius: 100%; }
            }
        }

        .home-tips {
            color: #333;  position: relative; align-items: center; margin-top: .2rem;
            img { width: .32rem; height: .32rem; line-height: .3rem; margin-right: .2rem; }
            div { flex: 1; white-space: nowrap; text-overflow:ellipsis; overflow:hidden;}
            span { color: #fff; font-size: .24rem; position: absolute; width: .36rem; height: .36rem; text-align: center; line-height: .36rem; left: .1rem; top: -.22rem; background: #F52323; border-radius: 100%; }
        }

        .home-record {
            height: 2.08rem; padding: .28rem .24rem; box-sizing: border-box; margin-top: .32rem; background-image: url("../../assets/img/record_bg.png"); background-size: 100%; background-repeat: no-repeat;
            .record { text-shadow:0px 2px 2px rgba(255,124,2,0.7); text-align: right; }
            .days { margin: .26rem 0 .32rem; text-align: center; font-size: .36rem; font-weight: bold; }
            .tips {
                align-items: center; justify-content: center; font-size: .24rem;
                img { width: .22rem; margin-right: .1rem; }
            }
        }

        .tips-box {
            align-items: center; margin-top: .4rem; padding: 0 .08rem; position: relative;
            .logo { width: .8rem; }
            div {
                flex: 1; margin: 0 .24rem;
                p:nth-of-type(1) { color: #333; font-size: .32rem; margin-bottom: .2rem; }
                p:nth-of-type(2) { color: #8F8E94; font-size: .24rem; }
            }
            .icon { width: .2rem; }
            span { font-size: .24rem; position: absolute; width: .44rem; height: .44rem; text-align: center; line-height: .44rem; left: .56rem; top: -.16rem; background: #F52323; border-radius: 100%; }
        }
        .bottom_banner { margin-top: .4rem; }
    }
</style>
