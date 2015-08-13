//globals
var totalQuestions = 2;
var currentQuestion = 1;
var questionObjArr = [];

//quiz constructor
function makeQuizItem(uuid, question, options){
  this.uuid = uuid;//integer
  this.question = question;//string
  this.options = options;//array of strings
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
}

//quiz instances
var questionObj1 = new makeQuizItem(1, "How long are you looking to hike?", ["A few hours", "Half-day", "Full-day"]);
var questionObj2 = new makeQuizItem(2, "What is your experience level?", ["Beginner", "Intermediate", "Advanced"]);

//push intances to question object array
questionObjArr.push(questionObj1, questionObj2);

//hike instances
var hike1 = new makeHikeItem(1, "Marron Creek Trail", "Maroon Bells, Aspen, CO", 3.2, 2.5, 1, "Lake", "img", "map");

//quiz methods tbd
//findhike

//render quiz item on DOM
makeQuizItem.prototype.render = function() {
  this.$element = $('#questions')
    .append('<p><strong>'+this.question+'</strong></p>');
  for (var i = 0; i < this.options.length; i++) {
    this.$element = $('#questions')
      .append('<input class="option" type="radio" name="questionObj.uuid" value=1> '+this.options[i]+'<br>');
  }
  return this.$element;
};

//go to next question
function nextQuestion(currentQuestion){
  questionObjArr.get(currentQuestion);

  if (currentQuestion == questionObjArr[currentQuestion]){
    return questionObjArr[currentQuestion+1];
  }
}








//hike methods
//render total results






//testing
// console.log(questionObj1);
// console.log(hike1);
// console.log(questionObj1.render());













