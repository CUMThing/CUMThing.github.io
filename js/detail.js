var arr=new Array("书签2.jpg","书签3.jpg")
var index=0;



//窗口加载就运行
window.onload=function(){

	window.setInterval("change()",2000);
	
}
function change(){

	index++;
	//切换图片
	document.getElementById("shuqianimage").src="images/xiangqing/shuqian/"+arr[index];
	//找到对应的圆圈 设置添加focus样式
	var circlearr=document.getElementById("circlelist").children;
	//现将之前的样式去掉
	for(var i=0;i<circlearr.length;i++)
		circlearr[i].className="circle";
	//设置选中的样式
	circlearr[index].className="circle focus";
	//一轮结束重新开始
	if(index==1)
		index=-1;
}


$(document).ready(function(){
	// init();
	$("#btn-1").bind('click', function(event) {
		var zan = $("#btn-1").text();
		if(zan=="点赞"){
			$("#btn-1").html("<span class='glyphicon glyphicon-heart' aria-hidden='true'></span>取消点赞");
		}else{
			$("#btn-1").html("<span class='glyphicon glyphicon-heart-empty' aria-hidden='true'></span>点赞");
		}
	});
})

$(document).ready(function(){
	// init();
	$("#btn-2").bind('click', function(event) {
		var cang = $("#btn-2").text();
		if(cang=="收藏"){
			$("#btn-2").html("<span class='glyphicon glyphicon-star' aria-hidden='true'></span>取消收藏");
		}else{
			$("#btn-2").html("<span class='glyphicon glyphicon-star-empty' aria-hidden='true'></span>收藏");
		}
	});
})



// $(document).ready(function (){

// var commodity={
//     name:"",
//     price:"",
//     abstract:"",
// }
//    function getUserInfo() {
//      $.ajax({
//         url: "../json/detail.json", //json文件位置
//         type: "GET", //请求方式为get
//         dataType: "json", //返回数据格式为json
//         success: function(data) { //请求成功完成后要执行的方法
//             commodity.name = data.commodity_01.name;
//             commodity.price = data.commodity_01.price;
//             commodity.abstract = data.commodity_01.abstract;
//             console.log(commodity);
//         },
//         error: function(xhr, type, errorThrown) {}
//      })
//    }
//    getUserInfo();

// var register = new Vue({
// 	el:"#register",
// 	data:commodity
// 	})
// });


window.onload=function() {
	/*建立模态框对象*/
	var modalBox = {};
	/*获取模态框*/
	modalBox.modal = document.getElementById("myModal");
    /*获得trigger按钮*/
	modalBox.triggerBtn = document.getElementById("triggerBtn");
    /*获得关闭按钮*/
	modalBox.closeBtn = document.getElementById("closeBtn");
	/*模态框显示*/
	modalBox.show = function() {
		console.log(this.modal);
		this.modal.style.display = "block";
	}
	/*模态框关闭*/
	modalBox.close = function() {
		this.modal.style.display = "none";
	}
	/*当用户点击模态框内容之外的区域，模态框也会关闭*/
	modalBox.outsideClick = function() {
		var modal = this.modal;
		window.onclick = function(event) {
            if(event.target == modal) {
            	modal.style.display = "none";
            }
		}
	}
    /*模态框初始化*/
	modalBox.init = function() {
		var that = this;
		this.triggerBtn.onclick = function() {
            that.show();
		}
		this.closeBtn.onclick = function() {
			that.close();
		}
		this.outsideClick();
	}
	modalBox.init();
 
};


// jsoncg({
// 	"commodity_01":{
// 		"name":"雨伞",
// 		"price":"¥20",
// 		"abstract":"下雨天还有CUMT陪着你呦 既有纪念意义 做工又精致 雨伞简约大方 质量有保证！",
// 	}
// })