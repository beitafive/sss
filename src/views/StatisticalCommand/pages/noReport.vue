<template>
	<div class="box w-flex">
		<img src="/static/img/pic_ljsb@3x.png" alt="">
		<div class="btn-box w-flex">
			<button class="feedback-btn">立即上报</button>
		</div>
		<div class="tips">
			<span>请于2019年4月15日</span><i>12:30</i><span>前完成位置上报</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'index',
		data(){
			return{

			}
		},
		methods:{

		},
		created:{

		}

	}
</script>

<style scoped lang="scss">
	.box {
		flex-direction: column;
		justify-content: cneter;
		align-items: center;
		height: 100%;
		img{
			width:5.68rem;
			height:4.72rem;
			margin:.78rem 0 .82rem;
		}
		.btn-box{
			.feedback-btn{
				background:#fff;
				background-image: url("/static/img/bg_btn.png");
				background-size: 100%;
				background-repeat: no-repeat;
				width:4.8rem;
				height:.94rem;
				color:#fff;
				font-size:.36rem;
			}
		}
		.tips{
			margin-top:.42rem;
			color:#666666;
			font-size:.28rem;
			i{
				color:#F52323;
				margin: 0 .2rem;
			}
		}
	}
</style>
