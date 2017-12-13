<template>
	<div class="reco-wrap">
		<ul class="recommend-nav clearfix">
			<router-link to="/recommend/1" tag="li" active-class="curr">全部</router-link>
			<router-link to="/recommend/2" tag="li" active-class="curr">合适人选</router-link>
			<router-link to="/recommend/3" tag="li" active-class="curr">已面试</router-link>
			<router-link to="/recommend/4" tag="li" active-class="curr">已录用</router-link>
			<router-link to="/recommend/5" tag="li" active-class="curr">已入职</router-link>
			<router-link to="/recommend/6" tag="li" active-class="curr">不合适</router-link>
		</ul>
		<dl class="recommend-list" id="recommend-list">
			<dd v-for="item in loadData">
				<div class="recom-top">
					<h3 class="recom-talent">推荐人才：{{item.talentName}}<span class="recom-tag curr" v-if="item.pushType==2">系统帮推</span><span class="recom-tag" v-if="item.pushType==1">主动推荐</span></h3>
					<div class="recom-time">状态变更：{{item.jjrToBlOperateDateShow}}</div>
				</div>
				<div class="recom-main">
					<div class="ep-logo"><img :src="item.epImg"/></div>
					<div class="ep-main">
						<div class="posi-info">
							<h3 class="ellipsis">{{item.epBountyPositionName}}</h3>
							<span class="recom-status color-blue">【{{item.jjrToBlCurrOperateShow}}】</span>
						</div>
						<div class="ep-info ellipsis">{{item.epName}}</div>
						<div class="posi-award"><i class="iconfont icon-shangjin color-org">￥{{item.moneyReward}}</i> <i class="iconfont icon-hongbao color-org">￥{{item.downCvMoneyReward}}</i></div>
					</div>
				</div>
			</dd>
		</dl>
		<div class="loading" v-if="isLoading"><img src="../../assets/image/loading.gif"/>加载更多</div>
		<div class="no-resutl" v-if="noResult"><img src="../../assets/image/no_result.png"><span>暂无记录，主动推荐人才赚取更多奖励</span></div>
	</div>
</template>
<script>
import {recommendList} from '../../service/getData'
import zrPage from '../../assets/js/zrPage'
import zrRequest from '../../assets/js/zrRequest'

export default {
	name:'recommendChild',
	data(){
		return {
			loadData:[],
			isLoading:false,
			noResult:false,
		}
	},
	mounted(){
		this.fetchData();
	},
	methods:{
		fetchData:function(){
			var _this = this
			this.dataIndex = parseInt(this.$route.params.id);
			this.zrPage({
				that:this,
				data:{
					queryType:this.dataIndex
				},
				element:document.getElementById("recommend-list"),
				obj:recommendList
			})
		},
		zrPage:(options) => new zrPage(options),
		zrRequest:(options) => new zrRequest(options)
	},
	//路由导航监听路由的变化
	watch: {
		// 如果路由有变化，会再次执行该方法
		'$route': 'fetchData'
	},
}
</script>
<style>
.recommend-nav{
	width:100%;
	height:2.25rem;
	border-bottom:1px solid #ebebeb;
	display: flex;
	background-color: #fff;
}
.recommend-nav li{
	padding:0 0.3rem;
	text-align: center;
	flex: auto; 
	line-height: 2.25rem;
	color:#999;
	font-size: 0.7rem;
}
.recommend-nav li.curr{
	color:#00C4C0;
	border-bottom:2px solid #00C4C0;
}
.recommend-list{
	width:100%;
	display: flex;
	flex-direction:column;
}
.recommend-list dd{
	padding:0 0.8rem;
	background-color: #fff;
	margin-bottom: 0.5rem;
}
.recom-top{
	height: 1.5rem;
	padding:0.5rem 0;
	line-height: 1.5rem;
	border-bottom: 1px solid #ebebeb;
	display: flex;
	flex-direction:row;
	justify-content:space-between;
}
.recom-top .recom-talent{
	font-size:0.75rem;
	color:#353535;
}
.recom-top .recom-tag{
	margin-left: 0.4rem;
	color:#fff;
	background-color: #7DD6D4;
	border-radius: 0.7rem;
	height: 0.7rem;
	align-items:center;
	font-size: 0.5rem;
	padding:0 0.3rem;
	line-height: 0.7rem;
}
.recom-top .recom-tag.curr{
	background-color:#FDC670;
}
.recom-top .recom-time{
	font-size: 0.6rem;
	color:#b2b2b2;
}
.recom-main{
	padding:0.5rem 0;
	display: flex;
	flex-direction:row;
}
.recom-main .ep-logo{
	width: 3.1rem;
	height: 3.1rem;
	margin:0.2rem 0.6rem 0 0.2rem;
}
.recom-main .ep-logo img{
	width: 3.1rem;
	height: 3.1rem;
}
.recom-main .ep-main{
	flex:1;
	display: flex;
	flex-direction:column;
	line-height: 1.1rem;
}
.recom-main .posi-info{
	display: flex;
	flex-direction:row;
	justify-content:space-between;
	font-size: 0.85rem;
	line-height: 1.2rem;
}
.recom-main .posi-info h3{
	font-size: 0.85rem;
	flex:1;
	color:#353535;
}
.recom-main .ep-info{
	font-size: 0.6rem;
	color:#B2B2B2;
}
.recom-main .posi-award{
	font-size: 0.7rem;
}
.go-login{
  padding:0 0.75rem;
}
.go-login .login-btn{
  height: 2.25rem;
  line-height: 2.25rem;
  text-align: center;
  border-radius: 0.15rem;
  font-size: 0.9rem;
  color:#fff;
}
</style>