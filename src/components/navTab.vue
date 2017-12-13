<template>
	<div class="nav-tab">
		<ul class="nav-list clearfix">
			<li :class="{'curr':navIndex==0}" @click="navChange(0)"><i class="iconfont icon-shouyexuanzhong"></i>首页</li>
			<li :class="{'curr':navIndex==1}" @click="navChange(1)"><i class="iconfont icon-tuijianxuanzhong"></i>推荐进展</li>
			<li :class="{'curr':navIndex==2}" @click="navChange(2)"><i class="iconfont icon-woxuanzhong"></i>我</li>
		</ul>
	</div>
</template>
<script>
export default {
	name:'nav-tab',
	data(){
		return {

		}
	},
	props:{
		navIndex:{
			default:0,
		}
	},
	mounted(){

	},
	methods:{
		navChange:function(index){
			this.$emit('navChange',index)
			if(index == 2){
				this.$router.push('/myself')
			}else if(index == 1){
				this.$router.push('/recommend')
			}else{
				this.$router.push('/home')
			}
		}
	}
}
</script>
<style type="text/css">
.nav-tab{
	width:100%;
	height: 2.5rem;
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: #fff;
	border-top: 1px solid #ebebeb;
	z-index: 99;
}
.nav-list{
	width:99%;
	margin:0 auto;
}
.nav-list li{
	width:33%;
	float: left;
	display: flex;
	flex-direction: column;
	text-align: center;
	line-height: 1rem;
	color:#999;
	font-size: 0.75rem;
}
.nav-list li .iconfont{
	line-height: 1.5rem;
	font-size: 1.2rem;
	margin: 0;
}
.nav-list li.curr{
	color:#00C4C0;
}
</style>
