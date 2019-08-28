var arr=new Array("扑克牌.jpeg","笔记本.jpg","纪念品1.jpeg")
var index=0;

//窗口加载就运行
window.onload=function(){
	window.setInterval("change()",2000);
}

function change(){
	index++;

	//切换图片
	document.getElementById("zhoubian_image").src="images/zhoubian/"+arr[index];
	//找到对应的圆圈 并设置为数组
	var circlearr=document.getElementById("zhoubian_circlelist").children;
	//将之前的样式去掉
	for(var i=0;i<circlearr.length;i++)
		circlearr[i].className="zhoubian circle"
	//给选中的添加样式
	circlearr[index].className="zhoubian circle focus"
	//一轮结束重新开始
	if(index==2)
		index=-1;

}