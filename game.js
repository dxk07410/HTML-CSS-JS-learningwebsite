//Created By Sidharth Vemula
//Student# 700673975

window.addEventListener("load",function(){
	document.getElementById("gameButton").addEventListener("click",function(){
		window.open ('game_home.html','_self',false)
	},false);//end of game button event listiener
	
	document.getElementById("rulesButton").addEventListener("click",function(){
		var xhr = new XMLHttpRequest();
		
		xhr.onreadystatechange = function (){
			if(xhr.readyState==4 && xhr.status==200 && xhr.responseText){
				if(document.getElementById("displayRulesPara").innerHTML==""){
				document.getElementById("displayRulesPara").innerHTML=xhr.responseText;
				}
				else{
				document.getElementById("displayRulesPara").innerHTML="";
				}
			}//end of if block
		}//end of function
		
		xhr.open("GET","Rules.txt",true);
		xhr.send(null);
	},false);//end of rules button event listiener
},false);//end of window event listiener



