//Created By Sidharth Vemula
//Student# 700673975

var xhr;
window.addEventListener("load",function(){
	displayPara = document.getElementById("displayPara");
	xhr = new XMLHttpRequest();
	xhr.open("GET","AboutUs.txt",false);
	xhr.send(null);
	
	displayText();
},false);//end of window load event listiener

function displayText(){
	var message = xhr.responseText;
	displayPara.innerHTML=message;
}//end of function