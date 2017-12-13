<template>
	<div class="comfirm-model" v-if="show">
		<div class="mark-model" v-if="show" @click="hideComfirm"></div>
		<div class="comfirm-wrap animated" :class="show?'modulFadeIn':'modulFadeOut'">
			<h3 class="comfir-tit ellipsis">{{comfirmTitle}}</h3>
			<div class="comfirm-txt" v-html="comfirmText"></div>
			<div class="comfirm-footer">
				<slot name="comfirm-footer">
					<input type="button" class="half" name="makeSure" :value="comfirmSureText" @click="makeSure">
					<input type="button" class="half" name="makeConcle" value="取消" @click="hideComfirm">
				</slot>
			</div>
		</div><!--end comfirm-wrap-->
	</div>
</template>
<script>
export default {
	name:'comfirm',
	data(){
		return {

		}
	},
	props:{
		show:{
			default:false,//默认不显示toast
		},
		comfirmTitle:{
			default:'提示',//提示文字
		},
		comfirmText:{
			default:'这里是提示内容',//提示文字
		},
		comfirmSureText:{
			default:'确定'
		}
	},
	methods:{
		hideComfirm:function(){
			this.$emit("comfirmClose")
		},
		makeSure:function(){
			this.$emit("comfirmSuccess")
		}
	}
}
</script>
<style type="text/css">
.comfirm-model{
	width:100%;
	height: 100%;
	position: fixed;
	top:0;
	left:0;
	z-index: 999;
}
.mark-model{
	width:100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	position: relative;
	z-index: 1;
}
.comfirm-wrap{
	position: absolute;
	left: 50%;
	top:50%;
	width: 80%;
	z-index: 2;
	background-color: #fff;
	border-radius: 10px;
	transform: translate(-50%,-50%);
}
.comfir-tit{
	height: 2.1rem;
	font-size: 0.8rem;
	font-weight: bold;
	line-height: 1.5rem;
	text-align: center;
	width: 100%;
	padding:0.3rem;
	box-sizing: border-box;
	border-bottom:1px solid #ebebeb;
}
.comfirm-txt{
	display: flex;
	line-height: 1.1rem;
	font-size: 0.7rem;
	padding:0.5rem;
	text-align: center;
	align-items: center;
	justify-content: center;
	min-height: 2rem;
}
.comfirm-footer{
	display: flex;
	flex-direction: row;
	font-size: 0.8rem;
	font-weight: bold;
	border-top: 1px solid #ebebeb;
}
.comfirm-footer input{
	background: none;
	border:none;
	padding:0;
	margin:0;
	height: 2rem;
	line-height: 2rem;
	font-size: 0.8rem;
	font-weight: bold;
}
.comfirm-footer input.half{
	width: 50%;
}
.comfirm-footer input:last-child{
	border-left: 1px solid #ebebeb;
}
@keyframes modulFadeIn {
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
.modulFadeIn {
	-webkit-animation-name: modulFadeIn;
	animation-name: modulFadeIn
}
@keyframes modulFadeOut {
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

.modulFadeOut {
	-webkit-animation-name: modulFadeOut;
	animation-name: modulFadeOut
}
</style>
