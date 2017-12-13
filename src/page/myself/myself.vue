<template>
	<div class="page">
		<router-link to="/login" class="self-login" v-if="!userId">
			<div class="self-tx"><img src="../../assets/image/default_tx.png"></img></div>
			<span class="login-btn">登录/注册</span>
		</router-link>
		<div class="self-login" v-if="userId">
			<div class="self-tx"><img :src="userShow.headImg"></img></div>
			<span class="login-btn">{{userShow.nickName}}</span>
		</div>
		<div class="self-card fn">
		    <span class="go-card">伯乐君，完善基本信息才能更懂你！<span class="color-blue">去完善</span></span>
		</div>
		<div class="self-biz">
		    <div class="biz-info"><div class="biz-item"><span class="iconfont icon-woderencai color-blue"></span><span>我的人才</span></div><span class="iconfont icon-youjiantou"></span></div>
		    <div class="biz-info"><div class="biz-item"><span class="iconfont icon-wodejiangli color-blue"></span><span>我的奖励</span></div><span class="iconfont icon-youjiantou"></span></div>
		    <div class="biz-info"><div class="biz-item"><span class="iconfont icon-wodeshoucang color-blue"></span><span>我的收藏</span></div><span class="iconfont icon-youjiantou"></span></div>
		</div>
		<div class="self-biz">
		    <div class="biz-info"><div class="biz-item"><span class="iconfont icon-shenfenbangding color-blue"></span><span>身份绑定</span></div><div class="biz-rt"><span class="biz-font">支付宝认证</span><span class="iconfont icon-youjiantou"></span></div></div>
		    <div class="biz-info"><div class="biz-item"><span class="iconfont icon-ziliaoxiugai color-blue"></span><span>资料修改</span></div><span class="iconfont icon-youjiantou"></span></div>
		    <div class="biz-info"><div class="biz-item"><span class="iconfont icon-mima color-blue"></span><span>密码修改</span></div><span class="iconfont icon-youjiantou"></span></div>
		</div>
		<div class="self-out">
		    <button class="bg-blue out-btn" @click="getOut" v-if="userId">退出登录</button>
		</div>
		<div class="nav-bottom"></div>
    	<nav-tab :navIndex="navIndex" @navChange="navChange"></nav-tab>
	</div>
</template>
<script>
import navTab from '../../components/navTab'
import {getStore,removeStore} from '../../assets/js/mUtils'

export default {
	name:'myself',
	components:{
		navTab
	},
	data(){
		return {
			navIndex:2,
			userId:null,
			userShow:{}
		}
	},
	mounted(){
		let userLogin = JSON.parse(getStore("userLogin"));
		this.userShow = JSON.parse(getStore("userShow"));

		if(userLogin){
			this.userId = userLogin.userId
		}
	},
	methods:{
		//此处可以使用路由的选中状态做
		navChange:function(res){
		  this.navIndex = res;
		},
		//退出登录
		getOut:function(){
			removeStore("userLogin");
			removeStore("userShow");

			this.userId = null;
			this.userShow = {}
		}
	}
}
</script>
<style>
.self-login{
  width:100%;
  height: 5rem;
  background-color: #fff;
  display: flex;
  flex-direction: row;
}
.self-tx{
  width:3rem;
  height: 3rem;
  margin:1rem;
}
.self-tx img{
  width:3rem;
  height: 3rem;
  border-radius: 50%;
}
.login-btn,.login-name{
  height:1.5rem;
  line-height: 1.5rem;
  margin:1.75rem 0;
  font-size: 0.9rem;
  color:#353535;
}
.self-biz{
  width:100%;
  padding:0 0.85rem;
  box-sizing: border-box;
  background-color: #fff;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
}
.biz-info{
  height: 2.3rem;
  line-height: 2.3rem;
  color:#888;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.biz-item .iconfont{
  margin-right: 0.65rem;
  font-size: 0.85rem;
}
.biz-rt .iconfont{
  margin-left: 0.9rem;
}
.self-out{
  padding:0.75rem;
  margin-top: 1.15rem;
}
.btn-out{
  height: 2.25rem;
  line-height: 2.25rem;
}
.self-biz .biz-info:last-child{
  border:none;
}
.biz-kf{
  width:100%;
  background: none;
  padding:0;
}
.biz-font{
  color:#B2B2B2;
  font-size:0.65rem;
}
.go-card{
  font-size: 0.75rem;
  height: 2.25rem;
  line-height: 2.25rem;
  width:100%;
  text-align: center;
}
.self-card{
  width:100%;
  box-sizing:border-box;
  padding:0 0.85rem;
  background-color:#fff;
}
.out-btn{
	width:100%;
	height: 2.25rem;
	line-height: 2.25rem;
	border:none;
	border-radius: 5px;
}
</style>