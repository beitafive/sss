<template>
    <div class="w-nav w-flex">
        <router-link tag="div" class="w-nav-item" to="/">
           <img :src="$route.path === '/' ? '/static/img/home_active.png' : '/static/img/home_normal.png'" /><br>
            首页
        </router-link>
        <router-link tag="div" class="w-nav-item" to="/rule">
            <img src="/static/img/nav_2.png" /><br>
            规章制度
        </router-link>
        <router-link tag="div" class="w-nav-item" to="/mine">
            <img :src="$route.path === '/mine' ? '/static/img/mine_active.png' : '/static/img/mine_normal.png'" /><br>
            个人中心
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
    .w-nav {
        color: #868789; font-size: .2rem; position: fixed; bottom: 0; left: 0; width: 100%; height: 1.36rem; padding-bottom: .08rem; box-sizing: border-box; background-image: url("/static/img/nav_bg.png"); background-size: 100%; justify-content: space-around; align-items: flex-end;
        .w-nav-item {
            text-align: center; width: 1.2rem;
            img { width: .48rem; height: .48rem; }
        }
        .w-nav-item:nth-of-type(2){
            img { width: .88rem; height: .88rem; }
        }
    }
    .router-link-exact-active {
        color: #4A5AFF;
    }
</style>