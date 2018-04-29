//Created By Sidharth Vemula
//Student# 700673975

var cardsFlipped = 0;
var numClick=0;
var matchFound=0;
var deck=['ace.png', '2.png', '3.png', '4.png', '5.png', '6.png', 'ace.png', '2.png', '3.png', '4.png', '5.png', '6.png'];
var shuffleDeck;
var totalClicks=0;
window.addEventListener("load",function(){
	document.getElementById("displpayPara").innerHTML="Matches Found:";
	document.getElementById("resultHeader").style.visibility="hidden";
	document.getElementById("resultTable").style.visibility="hidden";
	document.getElementById("0").addEventListener("click",function(){execute(this.id);},false);
	document.getElementById("1").addEventListener("click",function(){execute(this.id);},false);
	document.getElementById("2").addEventListener("click",function(){execute(this.id);},false);
	document.getElementById("3").addEventListener("click",function(){execute(this.id);},false);
	document.getElementById("4").addEventListener("click",function(){execute(this.id);},false);
	document.getElementById("5").addEventListener("click",function(){execute(this.id);},false);
	document.getElementById("6").addEventListener("click",function(){execute(this.id);},false);
	document.getElementById("7").addEventListener("click",function(){execute(this.id);},false);
	document.getElementById("8").addEventListener("click",function(){execute(this.id);},false);
	document.getElementById("9").addEventListener("click",function(){execute(this.id);},false);
	document.getElementById("10").addEventListener("click",function(){execute(this.id);},false);
	document.getElementById("11").addEventListener("click",function(){execute(this.id);},false);
	//document.getElementById("clueButton").style.visibility="hidden";
	
	shuffleDeck();
},false);//end of load event

function shuffleDeck(){
	 var i = 0
    , j = 0
    , temp = null

  for (i = deck.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }
  shuffleDeck = deck;
}//end of function

function execute(id){

	if(numClick==0){
		first = id;
		cardSwap(first);
		numClick=1;
		totalClicks++;
	}
	else if(numClick==1){
		var second = id;
		cardSwap(second);
		numClick=2;
		totalClicks++;
	}
	
	check(first,second);

}//end of function

function match(firstID,secondID){
	return (document.getElementById(firstID).src)==(document.getElementById(secondID).src)
}//end of function

function cardSwap(id){
	document.getElementById(id).src=shuffleDeck[id];
}//end of function

function check(first, second){
	if(numClick==2){
		if(first==second){
			alert("Dont click same card twice!!");
			document.getElementById(first).src="joker.jpg";
			document.getElementById(second).src="joker.jpg";
			numClick=0;
			return;
		}//end of if
		flag = match(first,second);
			if(flag){
				document.getElementById(first).style.visibility="hidden";
				document.getElementById(second).style.visibility="hidden";
				numClick=0;
				matchFound++;
				if(matchFound==7){
					document.getElementById("clueButton").style.visibility="visible";
				}//end of if to activate clue button
				document.getElementById("displpayPara").innerHTML="Matches Found:" + matchFound;
					if(matchFound==6){
					alert("all cards matched!! Congratulations!!");
					//window.open('game_result.html');
					document.getElementById("headerTable").innerHTML="";
					//document.getElementById("clueButton").style.visibility="hidden";
					document.getElementById("gameTable").innerHTML="";
					document.getElementById("resultHeader").style.visibility="visible";
					document.getElementById("resultTable").style.visibility="visible";
					saveToLocalStorage();
					displayLocalStorage();
					}//end of if block to check if all pairs have been matched.
			} //end of if block to check if two cards flipped are similar.
			else{
				numClick=0;
				document.getElementById(first).src="joker.jpg";
				document.getElementById(second).src="joker.jpg";
			}//turn both the cards to joker value cause the two cards do not match.
	}//end of if to check if 2 cards were clicked
}//end of function

function clueFunction(){
	
}//end of function

function saveToLocalStorage(){
	var nameValue = window.prompt("Enter Your Name:");
	var clicksKey = totalClicks/2;
	sessionStorage.setItem(clicksKey,nameValue);
	displayLocalStorage();
}//end of function

function displayLocalStorage(){
	var lsLength = localStorage.length;
	var displayTable = document.getElementById("resultTable");
	while(displayTable.firstChild){
		displayTable.removeChild(displayTable.firstChild);
	}//end of while loop to emplty the table
	
	var trHeaderRow = document.createElement("tr");
	var trHeaderName = document.createElement("th");
	var trHeaderClicks = document.createElement("th");
	trHeaderRow.appendChild(trHeaderName);
	trHeaderRow.appendChild(trHeaderClicks);
	trHeaderName.innerHTML="NAME";
	trHeaderName.setAttribute("width","200");
	trHeaderClicks.innerHTML="Clicks";
	trHeaderClicks.setAttribute("width","200");
	displayTable.appendChild(trHeaderRow);
	lsKeyArray = [];
	
	for(var i=0;i<lsLength;i++){
		lsKeyArray[i]=sessionStorage.key(i);
	}//end of for loop.
	
	lsKeyArray.sort(function(a, b){return a-b});
	
	for(var i in lsKeyArray){
		var lsKey = lsKeyArray[i];
		var tr = document.createElement("tr");
		var tdName = document.createElement("td");
		var tdClicks = document.createElement("td");
		tr.appendChild(tdName);
		tr.appendChild(tdClicks);
		tdName.innerHTML= sessionStorage.getItem(lsKey);
		tdName.setAttribute("width","200");
		tdName.setAttribute("align","center");
		tdClicks.innerHTML= lsKey;
		tdClicks.setAttribute("width","200");
		tdClicks.setAttribute("align","center");
		displayTable.appendChild(tr);
	}//end of for loop
}//end of function