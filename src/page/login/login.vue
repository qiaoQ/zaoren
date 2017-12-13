<template>
<div class="page login-warp">
  <div class="login-top clearfix">
    <span class="login-tit fl">登录枣仁</span>
    <router-link to="" class="login-link color-blue fr" replace>注册</router-link>
  </div>
  <div class="login-main">
    <form class="form" autocomplete="off" @submit.prevent="formSubmit">
      <div class="form-item">
        <input type="text" placeholder="请输入手机号" v-model="loginName" name="loginName" id="loginName" v-validate.initial="'required|phone'" maxlength="11" :class="{'valid-error':errors.has('loginName')}"/>
      </div>
      <div class="form-item">
        <input type="password" placeholder="请输入密码" v-model="loginPassword" maxlength="18" name="loginPassword" id="loginPassword" :class="{'valid-error':errors.has('loginPassword')}" v-validate.initial="'required|password'" />
      </div>
      <div class="form-item clearfix">
        <router-link to="" class="login-link color-blue login-forget fr"><span class="iconfont icon-wenhao" replace></span>忘记密码</router-link>
      </div>
      <button class="form-btn bg-blue" type="submit">登录</button>
    </form>
  </div>
  <!--end login-main-->
  <div class="login-bot"><router-link to="" class="login-link color-blue" replace>验证码登录</router-link></div>
</div>
</template>
<script>
import zrToast from '../../assets/js/zrToast'
import {bllogin} from '../../service/getData'
import zrRequest from '../../assets/js/zrRequest'
import {setStore} from '../../assets/js/mUtils'

export default {
	name:'login',
	data(){
		return {
			loginName:'',
			loginPassword:''
		}
	},
	mounted(){

	},
	methods:{
        formSubmit(){
        	var _this = this;
        	this.$validator.validateAll().then((result) => {
		        if (result) {
		          // eslint-disable-next-line
		          _this.zrRequest({
		          	that:_this,//当前页面对象
		          	data:{
		          		loginName:_this.loginName,
		          		password:_this.loginPassword
		          	},//请求的上行参数
		          	target:bllogin,//请求的对象
		          	success:function(res){
		          		//请求成功的回调函数
		          		let userLogin = {};
		          		let userShow = {};

						userLogin.sessionId = res.data.user_data.sessionId || null;
						userLogin.loginName = res.data.user_data.loginName || null;
						userLogin.userId = res.data.user_data.userId || null;
						userLogin.roleType = res.data.user_data.roleType || null;
						userLogin.writeCard = res.data.user_data.writeCard || null;
						userShow.nickName = res.data.user_data.nickName || null;
						userShow.headImg = res.data.user_data.headImg || null;


		          		setStore('userLogin',userLogin)
		          		setStore('userShow',userShow)

		          		//返回上一页
		          		_this.$router.go(-1)
		          	},
		          	others:function(res){
		          		if (res.code == 5002){
						  _this.zrToast({
						    showText: "登录时账号或密码错误",//展示提示内容
						    duration: 1500      //延时时间
						  })
						} else if (res.code == 5004){
						  _this.zrToast({
						    showText: "	账号不能为空",//展示提示内容
						    duration: 1500      //延时时间
						  })
						} else if (res.code == 5005) {
						  _this.zrToast({
						    showText: "	密码不能为空",//展示提示内容
						    duration: 1500      //延时时间
						  })
						} else if (res.code == 7000) {
						  _this.zrToast({
						    showText: "	账号被禁用",//展示提示内容
						    duration: 1500      //延时时间
						  })
						} else if (res.code == 2005) {//没有填写名片
						  _this.zrToast({
						    showText: "您没有填名片",//展示提示内容
						    duration: 1500      //延时时间
						  })
						} 
		          	}
		          })
		          return;
		        }

		        this.zrToast({
			        showText:this.errors.all()[0],
			        showTime:5000
			    })
		    })
        },
        zrRequest:(options) => new zrRequest(options),
        zrToast:(options) => new zrToast(options),
	},
}
</script>
<style>
.login-warp{
	padding:0.75rem;
}
.login-top{
	padding:1.25rem 0;
	height: 1rem;
	line-height: 1rem;
}
.login-tit{
	font-size:0.8rem;
	width: 12.5rem;
}
.login-link{
	font-size: 0.7rem;
}
.login-main{
	width:100%;
}
.form-item{
	position: relative;
	margin-bottom: 0.25rem;
}
.form-item input{
	border:none;
	border-bottom:1px solid #ddd;
	padding:0.5rem;
	box-sizing:border-box;
}
.form-btn{
	margin-top: 1.5rem;
	height: 2rem;
	line-height: 2rem;
	border:none;
	width:100%;
	text-align: center;
	border-radius: 5px;
}
.login-bot{
	margin-top: 1rem;
	text-align: center;
}
.login-forget{
	margin-top:0.5rem;
}
</style>