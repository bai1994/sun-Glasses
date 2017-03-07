
// window.onload = function(){
	
	//登录时的验证
	function checkRegister(){
		var nameInput = document.getElementById("user");
		var nameValue = nameInput.value;
		var NumInput = document.getElementById("celNum");
		var numValue = NumInput.value;
		var emailInput = document.getElementById("email");
		var emailValue = emailInput.value;
		var cellphoneInput = document.getElementById("celNum");
		var cellphoneValue = emailInput.value;
		var psdInput = document.getElementById("psd");
		var psdValue = psdInput.value;
		var psddInput = document.getElementById("psdd");
		var psddValue = psddInput.value;
		
		if(nameValue==""){
			alert("姓名不能为空");
			return false;
		}else if(emailValue==""){
			alert("邮箱不能为空");
			return false;
		}else if(psdValue==""){
			alert("密码不能为空");
			return false;
		}else if( psddValue==""){
			alert("再次输入密码不能为空");
			return false;
		}
//		alert();
		return true;
	};
//};
	
	function nameChange(){
		var nameInput = document.getElementById("user");
		var nameValue = nameInput.value;
		var nameError1 = document.getElementById("name1_error");
		var nameError2 = document.getElementById("name2_error");
		if(nameValue==""){
			nameError1.style.display = "block";

		}else{
			nameError1.style.display = "none";
			if(nameValue.length<2 || nameValue.length>8){
				nameError2.style.display = "block";
			}else{
				nameError2.style.display = "none";
			};
		}
		
	}
	
	function cellNum(){
		var NumInput = document.getElementById("celNum");
		var numValue = NumInput.value;
		var NumError1 = document.getElementById("celNum1_error");
		var NumError2 = document.getElementById("celNum2_error");
		if (numValue=="") {
			NumError1.style.display="block";
		}
		else{
			NumError1.style.display="none";
			if (!(new RegExp("^1[34578]\d{9}$"))) {
				NumError2.style.display = "block";
			}
			else{
				NumError2.style.display = "none";
			}
		}
	}

	function emailChange(){
		var emailInput = document.getElementById("email");
		var emailValue = emailInput.value;
		var emailError1 = document.getElementById("email1_error");
		var emailError2 = document.getElementById("email2_error");
		if(!(new RegExp("\\S+")).test(emailValue)){
			emailError1.style.display = "block";
		}else{
			emailError1.style.display = "none";
			if(!(new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$")).test(emailValue)){
				emailError2.style.display = "block";
			}else{
				emailError2.style.display = "none";
			};
		}
	};

	
	function psdChange(){
		var psdInput = document.getElementById("psd");
		var psdValue = psdInput.value;
		var psdError1 = document.getElementById("psd1_error");
		var psdError2 = document.getElementById("psd2_error");
		if(psdValue==""){
			psdError1.style.display = "block";
		}else{
			psdError1.style.display = "none";
			if(psdValue.length<5 || psdValue.length>10){
				psdError2.style.display = "block";
			}else{
				psdError2.style.display = "none";
			};
		};
	};

	function psddChange(){
		var psdInput = document.getElementById("psd");
		var psdValue = psdInput.value;
		var psddInput = document.getElementById("psdd");
		var psddValue = psddInput.value;
		var psddError1 = document.getElementById("psdd1_error");
		if(psdValue !== psddValue){
			psddError1.style.display = "block";
		}else{
			psddError1.style.display = "none";	
		}
	}

				// 选项卡

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


			//cookie设置登录
			function setCookie(key, value, time) {
				//现在时间
				var now = new Date();
				//过期时间
				var expire = new Date();
				//如果没有设置过期时间,默认设置1天
				if(time == null || time == 0 || time == undefined) {
					time = 1;
				}
				expire.setTime(now.getTime() + time * 24 * 60 * 60 * 1000); //获取毫秒数
				document.cookie = key + "=" + value + ";expires=" + expire.toGMTString(); //格林威治时间
			}

			function submit(){
				var nameValue = document.getElementById("user").value;
				var psdValue = document.getElementById("psd").value;
				if(nameValue!="" && psdValue!=""){
					var time = new Date();
					time.setTime(time.getTime()-3600000000000);
					setCookie("username",nameValue,7);
					document.cookie = "username='"+nameValue+"'";
					document.cookie = "password='"+psdValue+"'";
					document.cookie = "password='"+psdValue+"';expire="+time.toGMTString();
					alert("请到登录页进行登录");
				}else{
					alert("存在必选项为空！！！");
					return false;
				}
			};

			//写cookies函数
function SetCookie(name,value)//两个参数，一个是cookie的名子，一个是值
{ var Days = 30;
var exp = new Date(); //new Date("December 31, 9998");
exp.setTime(exp.getTime() + Days*24*60*60*1000); //此 cookie 将被保存 30 天
document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}// escape拿来干嘛？记住解决中文问题的。
//上面就算新定义了一个cookie
//取cookies函数
function getCookie(name)
{
	var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
	if(arr != null) return unescape(arr[2]); return null;
}
//删除cookie
function delCookie(name)
{
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
SetCookie ("xiaoqi", "3")
alert(getCookie('xiaoqi'));


// }