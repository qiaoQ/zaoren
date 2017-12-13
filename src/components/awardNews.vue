<template>
	<div class="award-news">
		<div class="award-lt"><img src="../assets/image/rwdNstic.png"/></div>
		<swiper :options="swiperOption" class="award-rt">  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide v-for="item in awardNews" :key="item.blue" class="ellipsis">{{item.descA+item.descB+item.descC}}</swiper-slide>  
        </swiper> 
	</div>
</template>
<script>
import {banner} from '../service/getData'
import zrRequest from '../assets/js/zrRequest'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	name:'award-news',
	data(){
		return {
			awardNews:'',
			swiperOption: {
		       // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
		       notNextTick: true,
		       // swiper configs 所有的配置同swiper官方api配置
		       autoplay: 3000,
		       prevButton:'.swiper-button-prev',
		       nextButton:'.swiper-button-next',
		       loop : true,
		       direction : 'vertical',
		     }
		}
	},
	mounted(){
		var that = this;
		//通过封装的zrRequest请求数据
		this.zrRequest({
			that:this,//当前页面对象
			target:banner,//请求的对象
			success:function(res){
				//请求成功的回调函数
				that.awardNews = res.data.reward;
			}
		})
	},
	components: {  
        swiper,  
        swiperSlide  
    },
    methods:{
    	zrRequest:(options) => new zrRequest(options),
    }
}
</script>
<style type="text/css">
@import '../assets/css/swiper.min';
</style>
<style type="text/css">
.award-news{
	padding:0 0.75rem;
	height: 2rem;
	display: flex;
	flex-direction:row;
	border-top: 1px solid #EBEBEB;
	background-color: #fff;
}
.award-news .award-lt{
	width:3rem;
	height: 2rem;
	justify-content:center;
	align-items:center;
}
.award-news .award-lt img{
	width:2.9rem;
	height: 0.7rem;
	margin-top: 0.65rem;
}
.award-news .award-rt{
	height: 1.5rem;
	line-height: 1.5rem;
	flex:1;
	margin-left: 0.5rem;
	margin-top: 0.25rem;
	color:#353535;
	font-size: 0.6rem;
}
</style>