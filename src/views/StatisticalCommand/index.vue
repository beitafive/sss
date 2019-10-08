<template>
	<div class="box w-flex">
		<div class="header w-flex">
			<img class="header-img" src="../../../public/static/img/pic_tx108@3x.png" alt="">
			<div class="header-name w-flex">
				<span>张宏伟</span>
				<img src="../../../public/static/img/pic_wwc@3x.png" alt="">
				<!-- <img src="../../../public/static/img/pic_ywc@3x.png" alt=""> -->
			</div>
			<div class="header-time w-flex">
				<img class="time-img" src="../../../public/static/img/icon_riqib@3x.png" alt="">
				<span>2019-05-05</span>
				<img class="down-img" src="../../../public/static/img/icon_xz@3x.png" alt="">
			</div>
		</div>
		<div class="mind w-flex">
			<div>
				<p>3<i>次</i></p>
				<span>指令总计</span>
			</div>
			<img src="../../../public/static/img/line_wzsbzl.png" alt="">
			<div>
				<p>1<i>次</i></p>
				<span>按指令要求按时上报</span>
			</div>
		</div>
		<div class="bottom-box" v-for="(item,index) in navList" :key="index" @click="goDetails(item)">
			<div class="bottom-top w-flex">
				<span class="bottom-left">{{item.name}}</span>
				<span class="bottom-right w-flex" :class="item.state == '待上报'?'report':'' ">{{item.state}}</span>
			</div>
			<div class="bottom-mind">

			</div>
			<div class="bottom-btm w-flex">
				<div class="bottom-text">
					{{item.details}}
				</div>
			</div>
			<div class="bottom-btn  w-flex">
				<span>上报截止时间：{{item.time}}</span>
				<button>立即上报</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				navList: [{
						id: '1',
						name: "余杭区司法局南苑司法所",
						state: '待上报',
						details: '请于2019年4月1日  15:30前完成位置上报。完成位置上报。请于2019年4月1日  15:30前完成位置上报。完成位置上报。',
						time: '12:30'
					},
					{
						id: '2',
						name: "下城司法所",
						state: '已上报',
						details: '请于2019年4月1日  15:30前完成位置上报。完成位置上报。',
						time: '12:30'},
						{
							id: '3',
							name: "下城司法所",
							state: '已上报',
							details: '请于2019年4月1日  15:30前完成位置上报。完成位置上报。',
							time: '12:30'
						}
					]
				}
			},
			methods: {
					goDetails(item) {
						this.$router.push({
							path: '/StatisticalCommands',
							query: {
								id: item.id
							}

						})
					}
				},
				created: {

				}

		}
</script>

<style scoped lang="scss">
	.box {
		flex-direction: column;
		justify-content: cneter;
		align-items: center;
		position: relative;
		background: #F0EFF5;
		height: 100%;
	}

	.header {
		position: relative;
		width: 100%;
		height: 2.4rem;
		background-image: url("/static/img/bg_wzsbzl@3x.png");
		background-size: 100%;
		background-repeat: no-repeat;
		margin-bottom: .88rem;

		.header-img {
			width: 1.2rem;
			height: 1.2rem;
			margin: .32rem .28rem 0 .24rem;
			;
		}

		.header-name {
			flex-direction: column;
			color: #FFFFFF;
			font-size: .36rem;
			margin-top: .4rem;

			span {
				margin-bottom: .2rem;
			}

			img {
				width: 1.48rem;
				height: .48rem;
			}
		}

		.header-time {
			width: 2.3rem;
			height: .52rem;
			position: absolute;
			right: .24rem;
			top: 0;
			font-size: .24rem;
			color: #FFFFFF;
			align-items: center;
			justify-content: center;
			background-image: url("/static/img/bg_riqi.png");
			background-size: 100%;
			background-repeat: no-repeat;

			span {
				margin: 0 .1rem 0 .08rem;
			}

			.time-img {
				width: .24rem;
				height: .24rem;
			}

			.down-img {
				width: .2rem;
				height: .12rem;
			}
		}
	}

	.mind {
		width: 6.72rem;
		height: 1.32rem;
		justify-content: center;
		align-items: center;
		background-image: url("/static/img/bg_yj.png");
		background-size: 100%;
		background-repeat: no-repeat;
		position: absolute;
		top: 1.84rem;

		div {
			width: 3.34rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: cneter;
			text-align: center;

			p {
				color: #333333;
				font-size: .36rem;

				i {
					font-size: .24rem;
				}
			}

			span {
				font-size: .26rem;
				color: #999999;
			}
		}
	}

	.bottom-box {
		width: 6.72rem;
		height: 2.82rem;
		background: rgba(255, 255, 255, 1);
		border-radius: .12rem;
		margin-bottom: .2rem;
		.bottom-top {
			padding: .26rem .24rem .24rem;
			justify-content: space-between;
			align-items: center;
			height:.3rem;
			.bottom-left {
				max-width: 4rem;
				font-size: .3rem;
				color: #333333;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.bottom-right {
				font-size: .26rem;
				color: #999999;
				text-align: right;
				line-height: .26rem;
			}

			.report {
				color: #F95922;
			}

		}

		.bottom-mind {
			width: 100%;
			height: .2rem;
			background: linear-gradient(180deg, rgba(74, 90, 255, 0.16) 0%, rgba(74, 90, 255, 0) 100%);
			opacity: 0.5;
		}

		.bottom-btm {
			width: 100%;
			height: 1rem;
			justify-content: center;

			.bottom-text {
				width: 6.24rem;
				height: .8rem;
				font-size: .28rem;
				color: #666666;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2; //这里是在第二行有省略号
				overflow: hidden;
				line-height:.4rem;
			}
		}

		.bottom-btn {
			border-top: .02rem solid #E9E9E9;
			height: .8rem;
			align-items: center;
			justify-content: space-between;

			span {
				margin-left: .24rem;
				color: #999999;
				font-szie: .28rem;
			}

			button {
				width: 1.4rem;
				height: .56rem;
				background: rgba(255, 255, 255, 1);
				border-radius: .04rem;
				opacity: 0.5;
				border: .02rem solid rgba(102, 102, 102, 1);
				color: #666666;
				font-size: .24rem;
				margin-right: .24rem;
			}
		}
	}
</style>
