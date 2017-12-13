<template>
  	<div class="page">
  		<div class="search">
  			<div class="search-wrap"><input type="text" disabled /><i class="iconfont icon-sousuo"> 搜索职位或公司</i></div>
  		</div>
      <banner></banner>
      <div class="nav-small">
      	<div class="nav-item"><img src="../../assets/image/myRward.png"/><span>我的奖励</span></div>
      	<div class="nav-item"><img src="../../assets/image/myPerson.png"/><span>我的人才</span></div>
      	<div class="nav-item"><img src="../../assets/image/sharePgs.png"/><span>分享进展</span></div>
      	<div class="nav-item"><img src="../../assets/image/blWays.png"/><span>伯乐攻略</span></div>
      </div>
      <award-news></award-news>
      <div class="award-tips">
      	<div class="tips-item"><i class="iconfont color-blue icon-shangjin"> 佣金</i><span>您推荐的人才入职，获得的奖金</span></div>
      	<div class="tips-item"><i class="iconfont color-blue icon-hongbao"> 红包</i><span>您推荐的人才被企业查看可获得的奖金</span></div>
      </div>
      <posi-list></posi-list>
      <div class="nav-bottom"></div>
      <nav-tab :navIndex="navIndex" @navChange="navChange"></nav-tab>
      <comfirm :show="show" @comfirmSuccess="comfirmSuccess" @comfirmClose="comfirmClose"></comfirm>
    </div>
</template>
<script>

import banner from '../../components/banner'
import awardNews from '../../components/awardNews'
import posiList from '../list/list'
import navTab from '../../components/navTab'
import comfirm from '../../components/comfirm'
import zrToast from '../../assets/js/zrToast'

export default {
	components:{
		banner,awardNews,posiList,comfirm,navTab
	},
  data(){
    return {
      show:false,
      navIndex:0,
    }
  },
  mounted(){
    // this.zrToast({
    //   showText:'我是第一个'
    // })
  },
  methods:{
	zrToast:(options) => new zrToast(options),
    clickMe:function(){
      this.zrToast({
        showText:'我是第二个',
        showTime:5000
      })
    },
    //comfirm框的成功回调函数
    comfirmSuccess:function(){
      this.show = false;
    },
    //comfirm框的取消回调函数
    comfirmClose:function(){
      this.show = false;
    },
    navChange:function(res){
      this.navIndex = res;
    }
	}
}
</script>
<style type="text/css">
.search{
	width:100%;
	height: 2rem;
	display: flex;
	align-items:center;
	box-sizing:border-box;
	padding:0 0.75rem;
	text-align: center;
}
.search .search-wrap{
	height: 1.4rem;
	width: 100%;
	position: relative;
	line-height: 1.4rem;
}
.search-wrap input{
	position: absolute;
	left: 0;
	z-index: 1;
	background-color: #ECECEC;
	border-radius: 0.7rem;
	width: 100%;
	height: 1.4rem;
}
.search-wrap .iconfont{
	position: relative;
	z-index: 2;
	color:#999;
	font-size: 0.7rem;
}
.nav-small{
	width:100%;
	height: 5rem;
	display:flex;
	flex-direction:row;
	background-color: #fff;
}
.nav-small .nav-item{
	width:25%;
	display: flex;
	flex-direction:column;
	text-align: center;
	justify-content:center;
}
.nav-small .nav-item img{
	width:2.3rem;
	height: 2.3rem;
	margin:0.8rem auto 0.2rem auto;
}
.nav-small .nav-item span{
	font-size: 0.6rem;
	line-height: 1.2rem;
	color:#888;
}
.award-tips{
	padding:0 0.65rem;
	margin:0.5rem 0;
	background-color: #fff;
	display: flex;
	flex-direction:column;
}
.award-tips .tips-item{
	height: 1.5rem;
	line-height: 1.5rem;
	font-size: 0.6rem;
	color:#888;
}
.award-tips .tips-item .iconfont{
	font-size: 0.7rem;
	font-weight: bold;
}
</style>
