<template>
	<div class="toast-model animated" :class="show?'toastFadeIn':'toastFadeOut'" v-html="showText"></div>
</template>
<script>
export default {
	name:'toast',
	data(){
		return {

		}
	},
	props:{
		show:{
			default:false,//默认不显示toast
		},
		showText:{
			default:'loading',//提示文字
		},
		showTime:{
			default:1500,//提示显示时间
		},
		showSuccess:{
			default:Function,
		}
	},
	mounted(){

	}
}
</script>
<style type="text/css">
.toast-model{
	max-width: 80%;
	padding:0.2rem 0.4rem;
	position: fixed;
	top:50%;
	left: 50%;
	transform: translate(-50%,-50%);
	background-color: rgba(0,0,0,0.5);
	border-radius: 5px;
	line-height: 1rem;
	color:#fff;
	font-size: 0.65rem;
	z-index: 999;
}
@keyframes toastFadeIn {
	0% {
		opacity: 0;
		display: none;
		transform: translate3d(-50%,0,0)
	}

	100% {
		opacity: 1;
		display: block;
		transform: translate3d(-50%,-50%,0)
	}
}
.toastFadeIn {
	-webkit-animation-name: toastFadeIn;
	animation-name: toastFadeIn
}
@keyframes toastFadeOut {
	0% {
		opacity: 1;
		display: block;
		transform: translate3d(-50%,-50%,0)
	}

	100% {
		opacity: 0;
		display: none;
		transform: translate3d(-50%,0,0)
	}
}

.toastFadeOut {
	-webkit-animation-name: toastFadeOut;
	animation-name: toastFadeOut
}
</style>
