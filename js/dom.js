// jQuery DOM maniuplation

$(document).on('ready', function() {

  //start button
  var $start = $('#start');
  //next button
  var $next = $('#next');
  //questions div
  var $quiz = $('#quiz');
  //individual question
  var $question = $('#question');
  //hide next button initially
  $next.hide();


  //gets the value of the checked user selection and pushes the value to selections array
  function getSelection() {
    selections[questionCounter] = $('input[name="option"]:checked').val();
  }

  function showButtons(){
    //when the radio button is clicked, if option is selected, show next button
    $('input[type="radio"]').click(function() {
      if($('input[name="option"]:checked').length === 1) {
        $next.show();
      }
    });
    //if number is questions is the length of the quiz array, change the text of the next button
    if (questionCounter === quizArr.length){
      $next.text("Get your hike result!");
    }
  }

  //on click of start button, display first question and show next button
  $start.on ('click', function(event){
    event.preventDefault();
    $start.hide();
    //create first question
    $question.html(createQuestion(questionCounter)).hide().fadeIn();
    //increase counter by one
    questionCounter++;
    //run show buttons function
    showButtons();
  });

  $next.on('click', function(event){
    getSelection();
    event.preventDefault();
    // if no user selection, progress is stopped until selection is made
    if ($('input[name="option"]:checked').length !== 1) { // had previously isNaN(selections[questionCounter]
      alert('Please make a selection!');
    }
    if ($next.text() === "Get your hike result!"){
      selections.splice([0],1);
      //render user results
      console.log(getResults());
      getHikeInfo(getResults()).render();
      //maps ready load
      google.maps.event.addDomListener(window, 'load', initialize());
      $next.hide();
      $question.hide();
    }
    else {
      $next.hide();
      $question.html("").fadeOut(function() {
      //if question counter is less than the length of the quiz array, make the next question appear by creating it using the create question function using the current value of the question counter as the index
        if (questionCounter < quizArr.length){
          $question.html(createQuestion(questionCounter)).fadeIn();
        }
        questionCounter++;
        showButtons();
      });

    }

    console.log("selections:" +selections);
    console.log("counter:" +questionCounter);

  });


});









