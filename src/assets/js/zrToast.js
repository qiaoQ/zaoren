/*Mr Zhang*/
import Vue from 'vue'
import toast from '../../components/toast'
/*
*toast提示插件
*/
function zrToast(options){
	options = options || {};
	//初始化赋值
	this.showText = options.showText || 'loading';
	this.showTime = options.showTime || 1500;
	this.showSuccess = options.showSuccess || function(){};
	this.timer = {}

	//初始化调用方法
	this.init();
}
//初始化扩展实例构造器
zrToast.prototype.init = function(){
	let zrToast = Vue.extend(toast);
	let $zrToast = new zrToast();
	let appendToast = $zrToast.$mount().$el;

	//调用toast提示插件
	if(document.getElementsByClassName('toast-model').length){
		//当toast提示已存在时则删除原有
		document.body.removeChild(document.querySelector('.toast-model'))
	}
	//清除定时器
	clearInterval(this.timer);
	//新加toast提示元素
	document.body.appendChild(appendToast)
	//显示toast提示
	$zrToast.show = true;

	//改变提示的参数
	$zrToast.showText = this.showText;
	$zrToast.showTime = this.showTime;

	//调用成功函数
	this.success($zrToast,appendToast);
}
//toast提示成功时执行
zrToast.prototype.success = function(target,ele){
	this.timer = setTimeout(() => {
		//隐藏toast提示
		target.show = false;
		//移除toast提示
		//document.body.removeChild(ele)
	},target.showTime)
}

export default zrToast;
