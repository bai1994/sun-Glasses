window.onload = function(){
	// 返回顶部的函数
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

// 产品详情的轮播效果
var num = 0;
var selNum = document.getElementById("pic_other").getElementsByTagName("li");
			// alert(selNum)
			var img = document.getElementById("pic_mes").getElementsByTagName("img");
			var p  = document.createElement("p")
			for (var i = 0; i < selNum.length; i++) {
				selNum[i].index = i;
				// alert(point[i].index)
				selNum[i].onmouseover = function(){

					this.appendChild(p);
					// selNum[i].appendChild(p);
					img[num].style.display = "none";
					img[this.index].style.display= "block";
					num = this.index;

				}
			}

// 评论区的js
var ulnum = 0;
var linum = document.getElementById("list_sel").getElementsByTagName("li");
var txt = document.getElementsByClassName("ulName");
for (var i = 0; i < linum.length; i++) {
	linum[i].index =i;
	linum[i].onclick = function(){
		txt[ulnum].style.display = "none";
		txt[this.index].style.display = "block";
		ulnum=this.index;

	}
}




}