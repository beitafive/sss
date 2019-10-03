<template>
    <div class="mine">
        <div class="mine-info w-flex">
            <img src="/static/img/mine_bg.png" />
            <div>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
    .mine {
        height: 100%; background-image: url("/static/img/mine_bg.png"); background-size: 100%; background-repeat: no-repeat;
        .mine-info {
            height: 2.6rem; box-sizing: border-box; padding-top: .32rem;
            img { width: 1.4rem; height: 1.4rem; object-fit: cover; border: 3px solid #7279FC; border-radius: 100%; margin: 0 .36rem 0 .6rem; }
            div {
                p:nth-of-type(1) {  }
            }
        }
    }
</style>