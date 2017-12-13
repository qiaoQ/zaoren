<template>
	<div class="banner clearfix">
		<swiper :options="swiperOption">
            <!-- 这部分放你要渲染的那些内容 -->
            <swiper-slide v-for="item in banner" :key="item.id"><img :src='item.bigImg'/></swiper-slide>
            <!-- 这是轮播的小圆点 -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
	</div>
</template>
<script>
import {banner} from '../service/getData'
import zrRequest from '../assets/js/zrRequest'
import zrToast from '../assets/js/zrToast'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	name:'banner',
	data(){
		return {
			banner:'',
			swiperOption: {
		       // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
		       notNextTick: true,
		       // swiper configs 所有的配置同swiper官方api配置
		       autoplay: 3000,
		       prevButton:'.swiper-button-prev',
		       nextButton:'.swiper-button-next',
		       loop : true,
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
				that.banner = res.data.banner;
			}
		})
	},
	components: {
        swiper,
        swiperSlide
    },
    methods:{
    	zrRequest:(options) => new zrRequest(options),
    	zrToast:(options) => new zrToast(options),
    }
}
</script>
<style type="text/css">
@import '../assets/css/swiper.min';
</style>
<style type="text/css">
.banner,.banner-item{
	width: 100%;
}
.banner img{
	width: 100%;
	float: left;
}
</style>
