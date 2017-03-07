window.onload = function(){
function checkForm(){
				if(checkUsername()&&checkPassword()&&checkPwd()){
					return true;
				}else{
					return false;
				}
			}
			
			function nameChange(){
				var username = document.getElementById("user");
				var regexp = /^\w{4,16}$/;
				if(regexp.test(username.value)){
//					console.log(o.nextSibling);   //得到同级的下一个元素
					username.nextSibling.innerHTML = "<img src='images/check.png' class='icon-ok'/>";
					return true;
				}else{
					username.nextSibling.innerHTML = "<img src='images/error.png' class='icon-error'/>您输入的有误";
					return false;
				}
			}
			
			function psdChange(o){
				var password = document.getElementById("psd");
				var regexp = /^[A-Za-z0-9]{6,16}$/;
				if(regexp.test(password.value)){
//					console.log(o.nextSibling);   //得到同级的下一个元素
					password.nextSibling.innerHTML = "<img src='images/check.png' class='icon-ok'/>";
					return true;
				}else{
					password.nextSibling.innerHTML = "<img src='images/error.png' class='icon-error'/>您输入的有误";
					return false;
				}
			}
			
			function psddChange(){
				var password = document.getElementById("psdd");
				var cPwd = document.getElementById("confirmPassword");
				if(password.value===""){
					cPwd.nextSibling.innerHTML = "<img src='images/error.png' class='icon-error'/>请先输入密码";
					return false;
				}else if(cPwd.value===password.value){
					cPwd.nextSibling.innerHTML = "<img src='images/check.png' class='icon-ok'/>";
					return true;
				}else{
					cPwd.nextSibling.innerHTML = "<img src='images/error.png' class='icon-error'/>两次输入不一致";
					return false;
				}
			}






	}