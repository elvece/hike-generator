//globals
var totalQuestions = 2;
var questionCounter = 0;
var quizArr = [];
var selections = [];
var hikeArr = [];

//quiz constructor
function MakeQuizItem(uuid, question, options){
  this.uuid = uuid;//integer
  this.question = question;//string
  this.options = options;//array of strings
  quizArr.push(this);
}

//hike constructor
function MakeHikeItem(uuid, name, location, distance, duration, difficulty, feature, img, map ){
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
var question1 = new MakeQuizItem(1, "How long are you interested in hiking for?", ["A few hours", "Half-day", "Full-day"]);
var question2 = new MakeQuizItem(2, "What is your experience level?", ["Beginner", "Intermediate", "Advanced"]);

//hike instances
var hike1 = new MakeHikeItem(1, "Marron Creek Trail", "Maroon Bells, Aspen, CO", 3.2, 2.5, 1, "Lake", "img", "map");
var hike2 = new MakeHikeItem(2, "Alberta Falls", "Rocky Mountain National Park, Estes Park, CO", 1.7, 1, 1, "Waterfall");

//render quiz item on DOM
MakeQuizItem.prototype.render = function() {
  var question = $('#question');
  this.$element = question
    .append('<p><strong>'+this.question+'</strong></p>');
  for (var i = 0; i < this.options.length; i++) {
    this.$element
      .append('<input class="option" type="radio" name="option" value='+i+'> '+this.options[i]+'<br>');
  }
  return this.$element;
};

//create question on DOM using index from quiz array
function createQuestion (index){
  quizArr[index].render();
}

//hike methods
//render total results
MakeHikeItem.prototype.render = function() {

};










