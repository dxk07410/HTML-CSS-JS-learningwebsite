//created by Deeksha Khadsare studentid:700660741
$(document).ready(function () {

    var data = getAllData();
    var questionId = findGetParameter('id');
	//get perticular question with the help of parameter id in findgetparameter function. 
    var question = data.filter(function (key) {
        return key.DT_RowId == questionId
    });
    //$('#spanQuestion').append(question[0].Question);
	var myfavPara = document.getElementById("myFavPara");
	var Question = document.getElementById("spanQuestion");
	Question.innerHTML	= question[0].Question;

    var answers = data.filter(function (key) {
        return key.type == 'Answer' && key.QuestionId == questionId;
    });

    displayPreviousAnswers(answers);

    $("#post-answer").click(function () {
        $('.error').hide();
        $('#errorId')[0].innerHTML = '';
        var answer = $('#answerTextareaId').val().trim();
        if (!answer) {
            $('#errorId').append('Please enter valid  Answer.');
            $('.error').show();
            return false;
        }
        postAnswer(answer, questionId);
    });

});

function displayPreviousAnswers(previousAnswers) {
    var length = previousAnswers.length;
    var myfavPara = document.getElementById("myFavPara");

    while (myfavPara.firstChild) {
        myfavPara.removeChild(myfavPara.firstChild);
    }//end while

    if (length > 0) {

        var table = document.createElement("table");
        table.setAttribute("id", "myTable");

        var thead = document.createElement("thead");
        var tr = document.createElement("tr");
        var th1 = document.createElement("th");
        var th2 = document.createElement("th");
        tr.appendChild(th1);
        tr.appendChild(th2);
        th1.innerHTML = 'Previous Answer'
        th2.innerHTML = 'Posted On';
        th1.className = 'firstColumn';
        th2.className = 'secondColumn';
        thead.appendChild(tr);
        table.appendChild(thead);
        var tbody = document.createElement("tbody");
        for (var i in previousAnswers) {

            var tr = document.createElement("tr");
            var tdAnswers = document.createElement("td");
            tdAnswers.className = 'firstColumn'
            var tdPostedDate = document.createElement("td");
            tdPostedDate.className = 'secondColumn';
            if (i % 2 === 0) {
                tr.className = 'odd'
            } else {
                tr.className = 'even'
            }
            tr.appendChild(tdAnswers);
            tr.appendChild(tdPostedDate);

            tdAnswers.innerHTML ="<pre>"+previousAnswers[i].Answer+"</pre>";
            tdPostedDate.innerHTML = previousAnswers[i].PostedDate;
            tbody.appendChild(tr);
        }//end for loop
        table.appendChild(tbody);
        myfavPara.appendChild(table);
    }else{
        var h1 = document.createElement("h1");
        h1.innerHTML =  "No Answers posted.";
        myfavPara.appendChild(h1);
    }


}//end displayLocalStorage function

///////////////////////////////////////////////////////



function postAnswer(answer, questionId) {
    var uniq = 'id' + (new Date()).getTime();
    var postedDate = new Date().toLocaleDateString() + ": " + new Date().toLocaleTimeString();
    var postData = {
        DT_RowId: uniq,
        QuestionId: questionId,
        Answer: answer,
        type: 'Answer',
        PostedDate: postedDate
    }
    localStorage.setItem(uniq, JSON.stringify(postData));
    $('#answerTextareaId')[0].value = '';
    window.location.href = 'answer.html?id=' + questionId;

}

function getAllData() {
    var data = [];
    var key, val;
    for (i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        val = JSON.parse(localStorage.getItem(key));
        if(typeof val == 'string' ){
            val = JSON.parse(val);
        }
        
        data.push(val);
    }
    return data;
}
//to get question id in the URL
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}