<template>
  	<div class="posi-wrap" id="posi-list">
        <h3 class="posi-tit">为您推荐的好职位</h3>
        <dl class="posi-list clearfix">
        	<dd class="posi-item clearfix" v-for="item in loadData" v-bind:key="item.id">
        		<div class="posi-logo fl"><img :src="item.epImg"></div>
        		<div class="posi-info">
        			<div class="posi-top">
        				<h4 class="posi-name ellipsis">{{item.positionName}}</h4>
        				<div class="posi-award"><i class="iconfont icon-shangjin color-org">￥{{item.moneyReward}}</i> <i class="iconfont icon-hongbao color-org">￥{{item.downCvMoneyReward}}</i></div>
        			</div>
        			<div class="posi-mid ellipsis">{{item.epName}}</div>
        			<div class="posi-bot"><span>{{item.salaryYearMin}}-{{item.salaryYearMax}}万 | 共{{item.browseCount}}人访问</span><span>{{item.createTimeShow}}</span></div>
        		</div>
        	</dd>
        </dl>
        <div class="loading" v-if="isLoading"><img src="../../assets/image/loading.gif"/>加载更多</div>
    </div>
</template>
<script>
import {posiList} from '../../service/getData'
import zrPage from '../../assets/js/zrPage'
import zrRequest from '../../assets/js/zrRequest'
export default {
	name:'posi-list',
	data(){
		return {
			loadData:[],
			isLoading:false,
		}
	},
	mounted(){
		// posiList(1).then(res => {
		// 	this.posiList = res.data.page_data.dataList;
		// });
		var that = this;
		this.zrPage({
			that:this,
			element:document.getElementById("posi-list"),
			obj:posiList
		})
	},
	methods:{
		zrPage:(options) => new zrPage(options),
		zrRequest:(options) => new zrRequest(options)
	}
}
</script>
<style type="text/css">
.posi-wrap{
	width:100%;
	background-color: #fff;
}
.posi-wrap .posi-tit{
	padding:0.5rem 0.65rem;
	height: 1.25rem;
	font-size: 0.75rem;
	line-height: 1.25rem;
}
.posi-wrap .posi-list{
	width:100%;
	display: flex;
	flex-direction:column;
}
.posi-wrap .posi-item{
	padding:0.6rem 0.65rem;
	box-sizing:border-box;
	float: left;
	border-top:1px solid #EBEBEB;
}
.posi-wrap .posi-logo,.posi-wrap .posi-logo img{
	width:3rem;
	height: 3rem;
}
.posi-logo{
  margin-right: 10px;
}
.posi-wrap .posi-info{
	flex:1;
	line-height: 1.1rem;
	font-size: 0.65rem;
}
.posi-top{
	display: flex;
	flex-direction:row;
	justify-content:space-between;
}
.posi-name{
	max-width: 7.4rem;
	height: 1.1rem;
	font-size: 0.85rem;
	color:#353535;
}
.posi-award{
	display: flex;
	flex-direction:row;
	width: 6rem;
	text-align: right;
}
.posi-award .iconfont{
	font-size: 0.7rem;
}
.posi-mid{
	color:#888;
}
.posi-bot{
	color:#B2B2B2;
	display: flex;
	flex-direction:row;
	justify-content:space-between;
}
</style>
