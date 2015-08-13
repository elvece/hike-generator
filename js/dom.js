// jQuery DOM maniuplation

$(document).on('ready', function() {

  // $('#start').on ('click', function(){
  //   $('#questions')
  //     .append("<p><strong>"+questionArr[0]+"</strong></p>");
  //   for (var i = 0; i < optionsArr.length; i++) {
  //     for (var j = 0; j < optionsArr[j].length; j++) {
  //       $('#questions')
  //       .append('<input class="option" type="radio" name="question1" value=1> '+optionsArr[i][j]+'<br>');
  //     }
  //   }
  // });

//on start click:
  // $('#start').on('click', function(){
  //   $('#questions')
  //     .append("<p><strong>"+quiz.Question1.Question+"</strong></p>");

  // });

//for first key in quiz
//find questions, append
//find options, append
//wait for selection
//show next button

//on next click:
//find next question, append
//find next options, append
//wait for selection
//show next button

  //on click of start button, render question1 and append next button
  $('#start').on ('click', function(){
    questionObj1.render();
    var nextButton = $('#questions')
      .append('<button id="next" class="btn btn-success" type="submit">Next</button>');
  });

//on click of next button
  //if finished (currentQuestion === totalQuestions)
    //grade()
  //if !finished
    //current question ++
    //render next question by doing nextquestion(1)

  // $('#next').on('click', function(){
  //   if (currentQuestion === totalQuestions){
  //     //grade()
  //   }
  //   if (currentQuestion !== totalQuestions){
  //     currentQuestion ++;
  //     .find(nextQuestion)
  //   }
  // });



});






















//getting value of selected option
// $('input[name=question1]:checked').val();

//to have questions fade in and out
// $(document).ready(function(){
// answers = new Object();
// $('.option').change(function(){
//     var answer = ($(this).attr('value'))
//     var question = ($(this).attr('name'))
//     answers[question] = answer
// })
// var item1 = document.getElementById('questions');

// var totalQuestions = $('.questions').size();
// var currentQuestion = 0;
// $questions = $('.questions');
// $questions.hide();
// $($questions.get(currentQuestion)).fadeIn();
// $('#next').click(function(){
//     $($questions.get(currentQuestion)).fadeOut(function(){
//         currentQuestion = currentQuestion + 1;
//         if(currentQuestion == totalQuestions){
//                var result = sum_values()
//                //do stuff with the result
//                alert(result);
//         }else{
//         $($questions.get(currentQuestion)).fadeIn();
//         }
//     });

// });
// });
