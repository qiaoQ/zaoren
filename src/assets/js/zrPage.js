/*Mr Zhang*/
import {loadMore} from './mUtils'
/*
*触底分页
*/
function zrPage(options){
	options.that ? this.that = options.that : this.that = '';
	options.element ? this.element = options.element : this.element = '';
	options.obj ? this.obj = options.obj : this.obj = {};
	options.data ? this.data = options.data : this.data = {};
	options.callback ? this.callback = options.callback : this.callback = function(){};
	this.loadData = [];
	this.currentPage = 1;
	this.totalPage = 1;

	//初始化分页数据
	this.init();
}
//初始化数据方法

zrPage.prototype.init = function(){
	//请求数据
	this.getData(true);
}
//分页
zrPage.prototype.nextPage = function(){
	var that = this;
	//声明变量防止一次滚动请求多次数据
	this.oSys = true;
	loadMore(this.element,function(){
		//当一次请求尚未完成时不允许下一次请求
		if(!that.oSys) return;
		that.oSys = false;
		//请求数据
		that.getData(false)
		//当前页面大于总页数时终止loadMore方法
		if(that.currentPage > that.totalPage){
			that.isLoading = false;
			that.noResult = false;
			return
		};
	})
}
zrPage.prototype.getData = function(status){
	var that = this;
	//请求数据
	this.data.pageNum = that.currentPage;
	this.that.isLoading = true;
	this.that.zrRequest({
		that:this.that,
		data:this.data,
		target:this.obj,
		success:function(res){
			//没有数据时防止报错
			if (!res.data || !res.data.page_data || !res.data.page_data.dataList || !res.data.page_data.dataList.length) {
		        that.loadData = [];
		        that.that.isLoading = false;
				that.that.noResult = true;
		        return false;
		     }else{
		     	that.that.noResult = false;
		     }
			/*下一页*/
			let dataList = res.data.page_data.dataList;
			that.totalPage = res.data.page_data.pageTotal;

			for(var i = 0; i < dataList.length; i++){
				that.loadData.push(dataList[i]);
			}

			that.currentPage++;
			that.oSys = true;

			if(status){
				that.nextPage();
			}
			that.that.isLoading = false;
		}
	})
	this.that.loadData = that.loadData
	that.callback()
}


export default zrPage;
