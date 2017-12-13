import Vue from 'vue'
import VeeValidate,{ Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'


Validator.extend('phone', {
    getMessage: (field, [args]) => `请输入正确的手机号码`,
    validate: (value, [args]) =>{
		const reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
		return reg.test(value) 
    }  
});
//验证非空
Validator.extend('require', {
    getMessage: (field, [args]) => `请输入内容`,
    validate: (value, [args]) =>{
    	if(value.replace(/(^\s*)|(\s*$)/g, "")){
    		return true
        }else{
        	return false
        }
    }
});
//验证密码
Validator.extend('password', {
    getMessage: (field, [args]) => `密码由6~18字母或数字组成`,
    validate: (value, [args]) =>{
		var regName = /(^[A-Za-z0-9]$)/;
	    var regName2 = /[^\u4e00-\u9fa5]/g;
	    if (regName.test(value) == false && !regName2.test(value) == false) {
	      return true;
	    } else {
	      return false;
	    }
    }  
});

Vue.use(VeeValidate);

//提示语汉化
Validator.locale ==="en" ? "zh_CN" : "en";
Validator.localize(Validator.locale,{
	messages: zh_CN.messages,
	attributes:{
		loginName:'登录名',
		loginPassword:'密码'
	}
});