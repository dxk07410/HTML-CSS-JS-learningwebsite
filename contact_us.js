//Created By Sidharth Vemula
//Student# 700673975

var xhr;
var table;
var img;
var devPicArray=['sidharth.jpg','deeksha.jpeg','sridhar.jpg'];
window.addEventListener("load",function(){
	table = document.getElementById("contactUsTable");
	loadXMLDocument();
	display();
},false);//end of window event listiener

function loadXMLDocument(){
	xhr = new XMLHttpRequest();
	xhr.open("GET","ContactUs.xml",false);
	xhr.send(null);
	developerArray = xhr.responseXML.getElementsByTagName("developer");
}//end of function

function display(){
	while(table.firstChild){
		table.removeChild(table.firstChild);
	}//end of while loop
	
	table.setAttribute('width','auto');
	var trHeading = document.createElement("tr");
	var trPicHeading = document.createElement("th");
	var trNameHeading = document.createElement("th");
	var trEmailHeading = document.createElement("th");
	
	trPicHeading.innerHTML="PICTURE";
	trPicHeading.setAttribute("align","center");
	trNameHeading.innerHTML="NAME";
	trNameHeading.setAttribute("align","center");
	trEmailHeading.innerHTML="E-MAIL ADDRESS"
	trEmailHeading.setAttribute("align","center");
	
	trHeading.appendChild(trPicHeading);
	trHeading.appendChild(trNameHeading);
	trHeading.appendChild(trEmailHeading);
	table.appendChild(trHeading);
	
	for(var i in developerArray){
		var developer = developerArray[i];
		var devPic = developer.getElementsByTagName("pic").item(0).firstChild.nodeValue;
		var devName = developer.getElementsByTagName("name").item(0).firstChild.nodeValue;
		var devEmail = developer.getElementsByTagName("email").item(0).firstChild.nodeValue;
		
		var tableRow = document.createElement("tr");
		var tdPic = document.createElement("IMG");
		var tdName = document.createElement("td");
		var tdEmail = document.createElement("td");
		
		tdPic.setAttribute('src',devPicArray[devPic]);
		tdPic.setAttribute("width","230");
		tdPic.setAttribute("height","250");
		tdPic.setAttribute("border","2");
		tdPic.setAttribute("align","center");
		
		tdName.innerHTML= devName;
		tdName.setAttribute("width","230");
		tdName.setAttribute("align","center");
		
		tdEmail.innerHTML= devEmail;
		tdEmail.setAttribute("width","230");
		tdEmail.setAttribute("align","center");
		
		tableRow.appendChild(tdPic);
		tableRow.appendChild(tdName);
		tableRow.appendChild(tdEmail);
		table.appendChild(tableRow);
	}//end of for loop
}//end of function