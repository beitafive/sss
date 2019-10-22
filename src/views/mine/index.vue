<template>
    <div class="mine">
        <div class="mine-info w-flex">
            <img :src="'https://api.fengtengfei.cn/JudicialZjjzFx/app/file/download.action?fileuuid=' + userInfo.faceImgids" />
            <div>
                <p><span>{{userInfo.userCName}}</span> / {{userInfo.departmentName}}</p>
                <p>管理等级：{{userInfo.mangaerLevel}}</p>
                <p>罪名：{{userInfo.charge}}</p>
            </div>
        </div>
        <div class="mine-title">日常管理</div>
        <div class="mine-list w-flex">
            <div class="mine-item">
                <img src="@/assets/img/xuexi.png" />
                在线学习
            </div>
        </div>
        <div class="borders"></div>
        <div class="mine-title">其他</div>
        <div class="mine-list w-flex">
            <div class="mine-item" @click="toQa">
                <img src="@/assets/img/wenti.png" />
                问题反馈
            </div>
            <div class="mine-item">
                <img src="@/assets/img/jiaozheng.png" />
                矫正小组
            </div>
            <div class="mine-item">
                <img src="@/assets/img/password.png" />
                修改密码
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        computed: {
            userInfo () {
                return this.$store.getters.mine
            }
        },
        methods: {
            toQa () {
                this.$push('/feedback')
            }
        }
    }
</script>

<style scoped lang="scss">
    .mine {
        height: 100%; background-image: url("../../assets/img/mine_bg.png"); background-size: 100%; background-repeat: no-repeat;
        .mine-info {
            height: 2.8rem; padding-top: .38rem; box-sizing: border-box;
            img { width: 1.4rem; height: 1.4rem; object-fit: cover; border: 3px solid #7279FC; border-radius: 100%; margin: 0 .36rem 0 .6rem; }
            div {
                color: #fff; box-sizing: border-box; padding-top: .1rem; font-size: .24rem;
                p:nth-of-type(1) {
                    font-size: .28rem;
                    span { font-size: .32rem; }
                }
                p:nth-of-type(2) { margin: .32rem 0 .16rem; }
            }
        }
        .mine-title {
            height: .8rem; line-height: .8rem; padding: 0 .32rem; color: #333; font-size: .3rem; background: #fff; border-bottom: 1px solid #F0EFF5;
        }

        .mine-list {
            justify-content: space-between; padding: 0 .68rem; align-items: center;
            .mine-item {
                display: flex; flex-direction: column; justify-content: space-between; align-items: center; height: 2.12rem; box-sizing: border-box; padding: .34rem 0; color: #333; font-size: .26rem;
                img { width: .88rem; height: .88rem; }
            }
        }
        .borders { height: .2rem; background: #F0EFF5; }
    }
</style>
