//created by Deeksha Khadsare studentid:700660741
$(document).ready(function () {

    $('.error').hide();
    $('#errorId')[0].innerHTML = '';

    $("#post-question").click(function () {
        $('.error').hide();
        $('#errorId')[0].innerHTML = '';

        var question = $('#questionTextareaId').val();
        if (!question) {
            $('#errorId').append('Please enter valid  Question.');
            $('.error').show();
            return false;
        }
        postQuestion(question);
    })


    function postQuestion(question) {
        var uniqueId = 'id' + (new Date()).getTime();
        var postedDate = new Date().toLocaleDateString() + ": " + new Date().toLocaleTimeString();
        var postData = {
            DT_RowId: uniqueId,
            Question: question,
            type: 'Question',
            PostedDate: postedDate
        }
        localStorage.setItem(uniqueId, JSON.stringify(postData));
        window.location.href = 'forum.html';
    }

});