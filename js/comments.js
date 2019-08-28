


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