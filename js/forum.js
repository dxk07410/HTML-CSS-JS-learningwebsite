//created by Deeksha Khadsare studentid:700660741
$(document).ready(function () {
    displayQuestions();
    $("#create-post").click(function () {

        window.location.href = 'question.html';
    });
});

function displayQuestions() {
    var questions = getAllData();
    var length = questions.length;
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
        var th3 = document.createElement("th");
        var th4 = document.createElement("th");
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        th1.innerHTML = 'Questions'
        th2.innerHTML = 'Answers';
        th3.innerHTML = 'Posted ON';
        th4.innerHTML = '';
        th1.className = 'frstColumn';
        th2.className = 'scndColumn';
        th3.className = 'thirdColumn';
        th4.className = 'forthColumn';
        thead.appendChild(tr);
        table.appendChild(thead);
        var tbody = document.createElement("tbody");
        for (var i in questions) {

            var tr = document.createElement("tr");
            var tdQuestions = document.createElement("td");
            tdQuestions.className = 'frstColumn'
            var tdAnswers = document.createElement("td");
            tdAnswers.className = 'scndColumn';
            var tdPostedDate = document.createElement("td");
            tdPostedDate.className = 'thirdColumn';
            var tdViewButton = document.createElement("td");
            tdViewButton.className = 'forthColumn';
            if (i % 2 == 0) {
                tr.className = 'odd'
            } else {
                tr.className = 'even'
            }
            tr.appendChild(tdQuestions);
            tr.appendChild(tdAnswers);
            tr.appendChild(tdPostedDate);
            tr.appendChild(tdViewButton);

            var viewButton = document.createElement("input");
            viewButton.setAttribute("type", "button");
            viewButton.setAttribute("id", questions[i].DT_RowId);
            viewButton.setAttribute("value", "View Details");
            viewButton.addEventListener("click",function(e){viewAnswers(e.target.id);}/*end of anonymouse func*/,false);

            tdViewButton.appendChild(viewButton);

            viewButton.className = 'button';

            tdQuestions.innerHTML = questions[i].Question;
            tdAnswers.innerHTML = questions[i].answersCount;
            tdPostedDate.innerHTML = questions[i].PostedDate;
            tbody.appendChild(tr);
        }//end for loop
        table.appendChild(tbody);
        myfavPara.appendChild(table);
    }else{
        var h1 = document.createElement("h1");
        h1.innerHTML =  "No questions posted.";
        myfavPara.appendChild(h1);
    }


}//end displayLocalStorage function
//////////////////////////////////////////////////////


function viewAnswers(key) {
    window.location.href = 'answer.html?id=' + key;
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
    var questions = [];
    data.forEach(function (item) {
        if (item.type === 'Question') {
            var answers = data.filter(function (key) {
                return key.type == 'Answer' && key.QuestionId == item.DT_RowId;
            });
            item.answersCount = answers.length;
            questions.push(item);
        }
    });
 
    return questions;
}