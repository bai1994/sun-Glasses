
window.onload=function(){
			var num = 0;   //旧图片的下标
			var index=0;     //新图片的下标
			var a = document.getElementById("num").children;

			var photo = document.getElementById("pic");
			var ph_img = photo.getElementsByTagName("img");
			var parent = document.getElementById("pic");
			var timer = setInterval(autoMove,3000);
			
			function autoMove(){
				index ++;
				if(index==ph_img.length){index=0;} //超出最后一张图片就返回第一张
				move(index);			//没有对象调用，this指向window
			}
			
			parent.onmouseover = function(){
				clearInterval(timer);
			}
			parent.onmouseout = function(){
				timer = setInterval(autoMove,3000)
			}
			
			for(var i=0;i<ph_img.length;i++){
				a[i].index = i;				//存储对应<a>的下标
				a[i].onmouseover = move;   //有对象调用，this指向调用者
			}
			
			function move(index){
				for (var i = 0; i < a.length; i++) {
					a[i].className="";
				}
				for (var i = 0; i < ph_img.length; i++) {
					ph_img[i].className="";
				}
				a[index].className = "Num_Show";
				
				ph_img[index].className = "show_banner";
				
			}
			
			// 设置上一张图片
			document.getElementById("left").onclick=function(){

				clearInterval(timer);

				index--;
				if (index<0) {index=3}


					for (var i = 0; i < a.length; i++) {
						a[i].className="";
					}
					for (var i = 0; i < ph_img.length; i++) {
						ph_img[i].className="";
					}
					a[index].className = "Num_Show";

					ph_img[index].className = "show_banner";


				}

			// 设置想下一张图片
			document.getElementById("right").onclick=function(){

				clearInterval(timer);
				index++;
				if (index>3) {index=0}

					for (var i = 0; i < a.length; i++) {
						a[i].className="";
					}
					for (var i = 0; i < ph_img.length; i++) {
						ph_img[i].className="";
					}
					a[index].className = "Num_Show";

					ph_img[index].className = "show_banner";

				}

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
// 下拉菜单的样式
var list = document.getElementById("tit").getElementsByTagName("a");
var block = document.getElementsByClassName("infor-block")[0];

for(var i=0,len=list.length;i<len;i++){
	list[i].onmouseover = function(){
		block.style.display="block";
	};
	list[i].onmouseout = function(){
		block.style.display="none";
	};
	
};

 
//鼠标滑过图片变大和不透明度降低
var imgNum = document.getElementById("Aenean").getElementsByTagName("img");
for (var i = 0; i < imgNum.length; i++) {
	imgNum[i].onmouseover = function(){
		this.style.opacity = "0.5";
	}
	imgNum[i].onmouseout = function(){

		this.style.opacity = "1";
	}
}


}
