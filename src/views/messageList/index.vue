<template>
	<div class="box">
		<div class="message-box w-flex" v-for="(item,index) in navList" :key="index" @click="goDetails(item)">
			<div class="message-top w-flex">
				<span class="message-left">{{item.name}}</span>
				<span class="message-right w-flex">{{item.time}} <img src="@/assets/img/right.png" /></span>
			</div>
			<div class="message-bottom w-flex">
				<span class="tag" :class="item.tag == '未读'? 'read' : 'noread'">{{item.tag}}</span>
				<span class="messagedetails">{{item.details}}</span>
			</div>
		</div>
	</div>

</template>

<script>
	export default{
		name:'index',
		data(){
			return{
				navList:[{
						id:'1',
						name:"下城司法所",
						time:'2019-04-04  12:00:30',
						tag:'已读',
						details:'请于2019年2月3日13:30到XX司法所报道司法所报道…'
					},
					{		id:'2',
							name:"警察局",
							time:'2019-10-4 18:23:44',
							tag:'未读',
							details:'请于2019年2月3日13:30到XX司法所报道司法所报道12312331232'
						}
				]
			}
		},
		methods:{
			goDetails(item){
				this.$router.push({
					path:'messageDetails',
					query:{id:item.id}

				})
			}
		},
		created:{

		}

	}
</script>

<style scoped lang="scss">
	.box{
		padding-left:.24rem ;
	}
	.message-box{
		height:100%;
		padding:.24rem .24rem .2rem 0;
		flex-direction:column;
		border-bottom:.01rem #DDDCDE solid;
		div{
			align-items: center;
		}
		.message-top{
			justify-content:space-between;
			margin-bottom:.14rem;
			.message-left{
				max-width:4rem;
				font-size:.32rem;
				line-height:.32rem;
				color: #333333;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
			.message-right{
				font-size:.24rem;
				color:#8F8E94;
				text-align: right;
				line-height:.24rem;
				img{
					margin-left:.12rem;
					width:.14rem;
					height:.24rem;
				}
			}

		}
		.message-bottom{
			.tag{
				width:.56rem;
				height:.28rem;
				font-size:.2rem;
				color:#fff;
				border-radius:.02rem;
				text-align:center;
				margin:0 .2rem 0 .04rem;

			}
			.read{
				background :#FC2626;
			}
			.noread{
				background:#B5B5B5;
			}
			.messagedetails{
				font-size:.24rem;
				line-height:.24rem;
				color:#8F8E94;
				width:5.96rem;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
		}
	}
</style>
