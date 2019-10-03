<template>
    <div class="home">
        <div class="home-top w-flex">
            <div class="home-date">
                <div>期满解矫到期时间：<br/>
                    2019年2月20日</div>
                <div>离解矫还剩2年3个月03天</div>
            </div>
            <div class="date-tips">
                两年四个月<br/>
                矫正期限
            </div>
        </div>
        <div class="home-nav w-flex">
            <div class="nav-item" v-for="(item, index) in navList" :key="index">
                <img :src="item.img" />
                <div>{{item.count}}</div>
            </div>
        </div>
        <div class="home-tips w-flex">
            <img src="/static/img/home_tips.png" />
            <div> 您有一条来自XX司法所的消息通知，请asdjkhjaskkasjhdk及时查看</div>
            <span>{{tips_count}}</span>
        </div>

        <div class="home-record">
            <div class="record"><span>记录</span></div>
            <div class="days">每日位置上报</div>
            <div class="tips w-flex"><img src="/static/img/red_icon.png" />您有新的位置上报指令，请及时上报</div>
        </div>

        <div class="tips-box w-flex">
            <img src="/static/img/tips_1.png" class="logo" />
            <div>
                <p>位置上报指令</p>
                <p>今日还未有指令</p>
            </div>
            <span>0</span>
            <img src="/static/img/right.png" class="icon" />
        </div>
        <div class="tips-box w-flex">
            <img src="/static/img/tips_2.png" class="logo" />
            <div>
                <p>再犯罪风险评估</p>
                <p>一键进入在线测评及查看测评记录</p>
            </div>
            <span>0  </span>
            <img src="/static/img/right.png" class="icon" />
        </div>
        <img src="/static/img/home_bottom_banner.png" width="100%" class="bottom_banner" />
    </div>
</template>

<script>
    export default {
        name: "index",
        data () {
            return {
                navList: [
                    { img: '/static/img/home_nav_1.png', count: 0, route: '/' },
                    { img: '/static/img/home_nav_2.png', count: 0, route: '/' },
                    { img: '/static/img/home_nav_3.png', count: 0, route: '/' },
                    { img: '/static/img/home_nav_4.png', count: 0, route: '/' }
                    ],
                tips_count: 0
            }
        },
        mounted () {

        },
        methods: {
            getInfo () {
                this.$http.post(this.$api.index.base_info, {
                    username: '123',
                    password: '2323'
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .home {
        height: 100%; background-image: url("/static/img/home_top_bg.png"); background-size: 100%; background-repeat: no-repeat; box-sizing: border-box; padding: 1.02rem .32rem 0; color: #fff; font-size:.28rem;
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
            img { width: .32rem; height: .32rem; line-height: .3rem; margin-right: .1rem; }
            div { flex: 1; white-space: nowrap; text-overflow:ellipsis; overflow:hidden;}
            span { color: #fff; font-size: .24rem; position: absolute; width: .36rem; height: .36rem; text-align: center; line-height: .36rem; left: .1rem; top: -.22rem; background: #F52323; border-radius: 100%; }
        }

        .home-record {
            height: 2.08rem; padding: .28rem .24rem; box-sizing: border-box; margin-top: .32rem; background-image: url("/static/img/record_bg.png"); background-size: 100%; background-repeat: no-repeat;
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