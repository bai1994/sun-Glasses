
window.onload = function(){

// 设置返回顶部的函数
	// var reBtn=document.getElementsByClassName("return_top")[0].children;
	var reBtn=document.getElementById("return_img");
	var timer=null;
	reBtn.onclick = function(){
					// clearInterval(timer);
					timer=setInterval(function(){
						var oSt = document.documentElement.scrollTop || document.body.scrollTop;
						var speed=Math.floor(-oSt/6);
						
						if(document.body.scrollTop){
							document.body.scrollTop = oSt+speed;
						}else{
							document.documentElement.scrollTop = oSt+speed;
						}
						
						if (oSt==0) {
							clearInterval(timer);
						}
					},30);
				}

}