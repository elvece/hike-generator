// jQuery DOM maniuplation

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

//gets the value of the checked user selection and pushes the value to selections array
function chooseOption() {
  selections[questionCounter] = $('input[name="option"]:checked').val();
}

//display next question and next button
function displayNext() {
  quiz.fadeOut(function() {
    //if question counter is less than the length of the quiz array, make the next question appear by creating it using the create question function using the current value of the question counter as the index
    if (questionCounter < quizArr.length){
      var nextQuestion = createQuestion([questionCounter]);
      quiz.append(nextQuestion).fadeIn();
      //if the selection at index equal to question counter is not NaN
      if (!(isNaN(selections[questionCounter]))) {
        $('input[value='+selections[questionCounter]+']').prop('checked', true);
      }
      next.show();
    }
    //if last question, hide next button and show finish button
    if (questionCounter === quizArr.length){
      next.hide();
      finish.show();
    }
  });
}

  //on click of start button, display first question and show next button
  start.on ('click', function(event){
    event.preventDefault();
    start.hide();
    chooseOption();
    displayNext();
  });

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

  //render user results on finish button click
  finish.on('click', function(){
    //user results
    var results = getHikeInfo(getResults());
    results.render();
    //maps ready load
    google.maps.event.addDomListener(window, 'load', initialize());
  });

});









