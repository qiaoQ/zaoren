<template>
	<div class="page">
		<router-view></router-view>
		<div class="nav-bottom"></div>
    	<nav-tab :navIndex="navIndex" @navChange="navChange"></nav-tab>
	</div>
</template>
<script>
import navTab from '../../components/navTab'

export default {
	name:'recommend',
	components:{
		navTab
	},
	data(){
		return {
			navIndex:1,
			dataIndex:1
		}
	},
	mounted(){
		
	},
	methods:{
		navChange:function(res){
		  this.navIndex = res;
		}
	},
}
</script>