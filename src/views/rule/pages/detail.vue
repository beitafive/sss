<template>
    <div class="box">
		<div class="top paddL">
				<p class="title w-flex">标题</p>
				<div class="title-text">{{info.title}}</div>
		</div>
		<div class="top paddL">
			<div class="title-bar  w-flex">
				<span class="title-left">类型</span><span class="title-right">{{info.typeName}}</span>
			</div>
			<p class="title w-flex">法律法规内容</p>
			<div class="title-text">
				{{info.content}}
			</div>
		</div>
		<div class="top paddL">
			<div class="title-bar  w-flex">
				<span class="title-left">来源</span><span class="title-right">{{info.source}}</span>
			</div>
			<div class="title-bar  w-flex">
				<span class="title-left">矫正机构</span><span class="title-right">{{info.orgName}}</span>
			</div>
			<div class="title-bar  w-flex">
				<span class="title-left">登记人</span><span class="title-right">{{info.remark1}}</span>
			</div>
			<div class="title-bar  w-flex">
				<span class="title-left">登记日期</span><span class="title-right">{{info.time}}</span>
			</div>
			<div class="Enclosure w-flex">
				附件
			</div>
			<div class="pic-list w-flex" >
				<img class="LabelImg" src="@/assets/img/icon_fjxz.png" /><a :href="'/webapi/app/file/download.action?fileuuid=' + info.fileIds" download="filename">{{info.fileNames}}</a><img class="rightImg" src="@/assets/img/right.png" />
			</div>
		</div>
	</div>
</template>

<script>
	import { formatTime } from "@/utils/time"
	export default {
        name: "detail",
		data () {
			return{
				picList:[],
				info: {}
			}
		},
		mounted () {
			this.getInfo()
		},
		methods: {
			getInfo () {
				this.$http.get(this.$api.rule.detail, {
					useruuid: localStorage.uuid,
					uuid: this.$route.query.id
				}).then(res => {
					if (res.state === '1') {
						this.info = res.data[0]
						this.info.time = formatTime(this.info.time)
					}
				})
			}
		}
    }
</script>

<style scoped lang="scss">
.box{
	height:100%;
}
.paddL{
	padding-left:.32rem;
}
.top{
	border-bottom:.005rem solid #DDDCDE;
	.title-bar {
		width: 100%;
		height: .88rem;
		align-items: center;
		font-size: .32rem;
		color: rgba(51, 51, 51, 1);
		border-bottom: .005rem solid #DDDCDE;

		.title-left {
			width: 1.28rem;
		}

		.title-right {
			margin-left: .52rem;
			color: rgba(143, 142, 148, 1);
		}
	}
	.title{
		width:100%;
		height:.86rem;
		align-items:center;
		font-size:.32rem;
		color:rgba(51,51,51,1);
		border-bottom:.005rem solid #DDDCDE;
	}
	.title-text{
		min-height:1.7rem;
		font-size:.32rem;
		color:rgba(143,142,148,1);
		line-height:.44rem;
	}
	.Enclosure{
		width:6.36rem;
		margin-top:.34rem;
		padding-left:.2rem;
		align-items:center;
		height:.6rem;
		background:rgba(240,239,245,1);
		border-radius:.04rem .04rem 0 0;
		border:.02rem solid rgba(226,226,226,1);
		font-size:.28rem;
		color:rgba(51,51,51,1);
	}
	.pic-list{
		width:6.56rem;
		align-items:center;
		height:.72rem;
		background:rgba(255,255,255,1);
		border:.02rem solid rgba(226,226,226,1);
		.LabelImg{
			width:.28rem;
			height:.28rem;
			margin: 0 .2rem 0 .3rem;
		}
		.rightImg{
			width:.14rem;
			height:.24rem;
			margin-right: .24rem;
		}
		a{
			flex:1;
			font-size:.28rem;
			color:rgba(51,51,51,1);
		}
	}
 }

</style>
