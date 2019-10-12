<template>
	<div class="box w-flex">
		<div class="bottom-box" v-for="(item,index) in navList" :key="index" @click="goDetails(item)">
			<div class="bottom-top w-flex">
				<span class="bottom-left">{{item.name}}</span>
			</div>
			<div class="bottom-mind">

			</div>
			<div class="bottom-btm w-flex">
				<div class="bottom-text">
					{{item.details}}
				</div>
			</div>
			<div class="bottom-btn  w-flex">
				<span class="w-flex"><img src="@/assets/img/icon_time2@3x.png" alt="">{{item.time}}</span>
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
				navList: [
					{
						id: '1',
						name: "请于2019年4月15日12:30前完成位置上报",
						details: '【杭州市司法局】请及时上报你的位置请及时上报你的位置请及时上报你的位置请及时上报你的位置',
						time: '2019-01-10  21:30:33'
					},
					{
						id: '2',
						name: "请于2019年4月15日12:30前完成位置上报",
						details: '【杭州市司法局】请及时上报你的位置请及时上报你的位置请及时上报你的位置请及时上报你的位置',
						time: '2019-01-10  21:30:33',
					},
					{
						id: '3',
						name: "请于2019年4月15日12:30前完成位置上报",
						details: '【杭州市司法局】请及时上报你的位置请及时上报你的位置请及时上报你的位置请及时上报你的位置请及时上报你的位置请及时上报你的位置请及时上报你的位置请及时上报你的位置请及时上报你的位置请及时上报你的位置请及时上报你的位置请及时上报你的位置',
						time: '2019-01-10  21:30:33'
					}
				]
			}
			},
			methods: {
					goDetails(item) {
						this.$router.push({
							path: '/noReport',
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
		justify-content: center;
		align-items: center;
		position: relative;
		background: #F0EFF5;
		height: 100%;
	}
	.bottom-box {
		width: 6.72rem;
		height: 3.22rem;
		background: rgba(255, 255, 255, 1);
		border-radius: .12rem;
		margin-top: .2rem;
		.bottom-top {
			height:.3rem;
			padding: .26rem .24rem .24rem;
			justify-content: space-between;
			align-items: center;
			.bottom-left {
				max-width: 6rem;
				font-size: .3rem;
				color: #333333;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
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
			height: 1.4rem;
			justify-content: center;
			.bottom-text {
				width: 6.24rem;
				height: 1.2rem;
				font-size: .28rem;
				line-height:.4rem;
				color: #666666;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3; //这里是在第二行有省略号
				overflow: hidden;
			}
		}

		.bottom-btn {
			border-top: .02rem solid #E9E9E9;
			width: 100%;
			height: .8rem;
			align-items: center;
			justify-content: space-between;

			span {
				align-items: center;
				margin-left: .26rem;
				color: #999999;
				font-szie: .28rem;
				img{
					width:.28rem;
					height:.28rem;
					margin-right: .1rem;
				}
			}

			button {
				width: 1.4rem;
				height: .56rem;
				background: rgba(255, 255, 255, 1);
				border-radius: .08rem;
				opacity: 0.5;
				border: .02rem solid rgba(74,90,255,1);
				color: #4A5AFF;
				font-size: .24rem;
				margin-right: .24rem;
			}
		}
	}
</style>
