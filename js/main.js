//globals
var totalQuestions = 2;
var questionCounter = 0;
var quizArr = [];
var selections = [];
var hikeArr = [];

//quiz constructor
function makeQuizItem(uuid, question, options){
  this.uuid = uuid;//integer
  this.question = question;//string
  this.options = options;//array of strings
  quizArr.push(this);
}

//hike constructor
function makeHikeItem(uuid, name, location, distance, duration, difficulty, feature, img, map ){
  this.uuid = uuid;//integer
  this.name = name;//string
  this.location = location;//string
  this.distance = distance;//float
  this.duration = duration;//float
  this.difficulty = difficulty;//integer
  this.feature = feature;//string
  this.img = img;
  this.map = map;//placeholder for now
  hikeArr.push(this);
}

//quiz instances
var question1 = new makeQuizItem(1, "How long are you interested in hiking for?", ["A few hours", "Half-day", "Full-day"]);
var question2 = new makeQuizItem(2, "What is your experience level?", ["Beginner", "Intermediate", "Advanced"]);

//hike instances
var hike1 = new makeHikeItem(1, "Marron Creek Trail", "Maroon Bells, Aspen, CO", 3.2, 2.5, 1, "Lake", "img", "map");
var hike2 = new makeHikeItem(2, "Alberta Falls", "Rocky Mountain National Park, Estes Park, CO", 1.7, 1, 1, "Waterfall");

//quiz methods tbd
//findhike

//render quiz item on DOM
makeQuizItem.prototype.render = function() {
  var question = $('#question');
  this.$element = question
    .append('<p><strong>'+this.question+'</strong></p>');
  for (var i = 0; i < this.options.length; i++) {
    this.$element
      .append('<input class="option" type="radio" name="option" value='+i+'> '+this.options[i]+'<br>');
  }
  return this.$element;
};
// console.log(question1.render());
//create question on DOM using index from quiz array
function createQuestion (index){
  quizArr[index].render();
}

//gets the value of the checked user selection and pushes the value to selections array
function chooseOption() {
  selections[questionCounter] = $('input[name="option"]:checked').val();
}

//display next question and next button
function displayNext() {
  var quiz = $('#quiz');
  quiz.fadeOut(function() {
    //if question counter is less than the length of the quiz array, make the next question appear by creating it using the create question function using the current value of the question counter as the index
    if (questionCounter < quizArr.length){
      var nextQuestion = createQuestion([questionCounter]);
      quiz.append(nextQuestion).fadeIn();
      //if the selection at index equal to question counter is not NaN
      if (!(isNaN(selections[questionCounter]))) {
        $('input[value='+selections[questionCounter]+']').prop('checked', true);
      }
      $('#next').show();
    }
    //if last question, hide next button and show finish button
    if (questionCounter === quizArr.length){
      $('#next').hide();
      $('#finish').show();
    }
  });
}

//display results
function displayResults(){

}




//hike methods
//render total results







  //----------//
 //---MAP----//
//----------//

//map initalize
//add marker to spot
// function initialize() {
//   var mapCanvas = document.getElementById('map');
//    var mapOptions = {
//       center: new google.maps.LatLng(39.0708, -106.9890),
//       zoom: 10,
//       mapTypeId: google.maps.MapTypeId.TERRAIN
//     };
//   var map = new google.maps.Map(mapCanvas, mapOptions);
// }
// google.maps.event.addDomListener(window, 'load', initialize);
