/*Mr Zhang*/
import {setStore,getStore,removeStore} from './mUtils'
/*
**fetch请求封装
*/
function zrRequest(options){
	this.that = options.that||{};
	this.target = options.target || function(){};
	this.success = options.success || function(){};
	this.data = options.data || {};
	this.complete = options.complete || function(){};
	this.fail = options.fail || function(){};
	this.others = options.others || function(){}

	//初始化方法
	this.init();
}
//初始化方法
zrRequest.prototype.init = function(){
	//获取本地存储的用户信息
	this.getUser()

}
//获取本地存储的用户信息
zrRequest.prototype.getUser = function(){
	//获取用户信息
	let userLogin = JSON.parse(getStore("userLogin"));
	this.data.userLogin = {};

	if(userLogin){
		this.data.userLogin.sessionId = userLogin.sessionId || null;
		this.data.userLogin.loginName = userLogin.loginName || null;
		this.data.userLogin.userId = userLogin.userId || null;
		this.data.userLogin.roleType = userLogin.roleType || null;
		this.data.userLogin.writeCard = userLogin.writeCard || null;
	}else{
		this.data.userLogin.sessionId = null
		this.data.userLogin.loginName = null
		this.data.userLogin.userId = null
		this.data.userLogin.roleType = null
		this.data.userLogin.writeCard = null
	}
	this.data.userLogin = JSON.stringify(this.data.userLogin)
	//请求数据
	this.doRequest();
}
//请求数据
zrRequest.prototype.doRequest = function(){
	//请求开始
	this.target(this.data).then(res => {
		if(res.code == 2000){
			//请求成功
			this.success(res)
		}else if(res.code == 3000){
			//请求失败
			this.that.zrToast({
				showText:'请求失败'
			})
		}else if(res.code == 3001){
			//未登录跳转至登录页面
			this.that.$router.push('/login')
		}else if(res.code == 3002){
			//当前登录账号没有该权限
			this.that.zrToast({
				showText:'当前登录账号没有权限'
			})
		}else{
			this.others(res)
		}
		
		//存储用户信息
		this.setUser(res);
	})
}
//设置存储信息
zrRequest.prototype.setUser = function(res){
	let userLogin = {};
	userLogin.sessionId = res.data.user_data.sessionId || null;
	userLogin.loginName = res.data.user_data.loginName || null;
	userLogin.userId = res.data.user_data.userId || null;
	userLogin.roleType = res.data.user_data.roleType || null;
	userLogin.writeCard = res.data.user_data.writeCard || null;

	//本地缓存用户信息
	setStore("userLogin",userLogin)
} 

export default zrRequest;
