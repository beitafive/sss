<template>
	<div class="box w-flex">
		<div class="rules-box"  v-for="(item,index) in navList" :key="index" @click="goDetails(item)">
			<div class="rules-top w-flex">
				<span class="rules-left">{{item.name}}</span>
				<span class="rules-right w-flex">{{item.time}} <img src="../../../public/static/img/right.png" /></span>
			</div>
			<div class="rules-mind">
				
			</div>
			<div class="rules-btm w-flex">
				<div class="rules-text">
					{{item.details}}
				</div>
				
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
						details:'这里是规章制度内容文字这里是规章制度内容文字这里是规章制度内容文字adssadsadsadsadsa阿萨德萨达四大adsd'
					},
					{		id:'2',
							name:"下城司法所",
							time:'2019-10-4 18:23:44',
							details:'这里是规章制度内容文字这里是规章制度内容文字这里是规章制度内容文字这里是规章制度内容文字这里是规章制度内容文字这里是规章制度内容文字这里是规章制度内容文字这里是规章制度内容文字这里是规章制度内容文字'
						}
				]
			}
		},
		methods:{
			goDetails(item){
				this.$router.push({
					path:'/ruledetail',
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
		width:100%;
		height:100%;
		flex-direction:column;
		align-items:center;
		background:rgba(240,239,245,1);
		padding-top:.2rem;
	}
	.rules-box{
		width:6.72rem;
		height:2.04rem;
		background:rgba(255,255,255,1);
		border-radius:.12rem;
		margin-bottom:.2rem;
		padding-bottom:.32rem;
		.rules-top{
			padding:.26rem .24rem .24rem;
			justify-content:space-between;
			align-items:center;
			.rules-left{
				max-width:4rem;
				font-size:.3rem;
				color: #333333;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
			.rules-right{
				font-size:.26rem;
				color:#8F8E94;
				text-align: right;
				line-height:.26rem;
				 img{
					margin-left:.16rem;
					width:.14rem;
					height:.24rem;
				}
			}
			
		}
	 .rules-mind{
		 width:100%;
		 height:.2rem;
		 background:linear-gradient(180deg,rgba(74,90,255,0.16) 0%,rgba(74,90,255,0) 100%);
		 opacity:0.5;
	 }
	 .rules-btm{
		 width:100%;
		 height:1.04rem;
		justify-content:center;
		 .rules-text{
			 width:6.24rem;
			 height:.8rem;
			 font-size:.28rem;
			 line-height:.4rem;
			 color:rgba(102,102,102,1);
			 display: -webkit-box;
			 -webkit-box-orient: vertical;
			 -webkit-line-clamp: 2; //这里是在第二行有省略号
			 overflow: hidden;
		 }
	 }
	}
	
</style>
