// jQuery DOM maniuplation
var selections = [];

$(document).on('ready', function() {
  //start button
  var start = $('#start');
  //next button
  var next = $('#next');
  //questions div
  var quiz = $('#quiz');
  //finish button
  var finish = $('#finish');
  //hide next button initially
  next.hide();
  //hides finsih button
  finish.hide();
  //on click of start button, display first question and show next button
  start.on ('click', function(event){
    event.preventDefault();
    start.hide();
    chooseOption();
    displayNext();
  });

//on click of next button
  //if finished (currentQuestion === totalQuestions)
    //grade()
  //if !finished
    //current question ++
    //render next question by doing nextquestion(1)

  next.on('click', function(event){
    event.preventDefault();
    chooseOption();
    // if no user selection, progress is stopped until selection is made
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    }
    else {
      questionCounter++;
      displayNext();
    }
    console.log("selections:" +selections);
    console.log("counter:" +questionCounter);

  });


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
