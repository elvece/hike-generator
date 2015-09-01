//JS OOP file - data constructors, instances, and methods

//global variables

//counting questions gone through
var questionCounter = 0;
//holds all questions
var quizArr = [];
//user questionnaire selections
var selections = [];
//holds all available hikes
var hikeArr = [];
// var totalQuestions = quizArr.length;

var areas = {
  1: "Greater Denver",
  2: "Fort Collins",
  3: "Colorado Springs",
  4: "Silverthorne",
  5: "Glenwood Springs",
  6: "Steamboat Springs",
  7: "Grand Junction",
  8: "Durango",
  9: "Telluride",
  10: "Estes Park"
};

//quiz constructor
function MakeQuizItem(id, question, options){
  this.id = id;//integer
  this.question = question;//string
  this.options = options;//array of strings
  quizArr.push(this);
}

//hike constructor
//add: good for kids,
function MakeHikeItem(id, name, location, area, distance, duration, difficulty, feature, img, lat, long, info){
  this.id = id;//integer
  this.name = name;//string
  this.location = location;//string
  this.area = area;//number
  this.distance = distance;//float
  this.duration = duration;//float
  this.difficulty = difficulty;//integer
  this.feature = feature;//string; if multiple: array of features so can access for filter
  this.img = img;
  this.map = [lat, long];
  this.info = info;
  hikeArr.push(this);
}

///////////////////
//QUIZ INSTANCES//
/////////////////
var question1 = new MakeQuizItem(1, "Which area is closest to where you currently are?", ["Great Denver Area (Boulder, Golden, Littleton)", "Fort Collins", "Estes Park", "Colorado Springs", "Silverthorne (Breckenridge)", "Glenwood Springs (Vail, Aspen)", "Steamboat Springs", "Grand Junction", "Durango", "Telluride"]);
var question2 = new MakeQuizItem(2, "How far do you want to travel?", ["Less than 2 hours", "Between 2 and 4 hours", "Between 4 and 6 hours", "Time does not matter"]);
//if yes, will assume beginner level
var question3 = new MakeQuizItem(3, "Will children be hiking with you?", ["Yes", "No"]);
//if no to children, ask level
var question4 = new MakeQuizItem(4, "How would you rate your experience level?", ["Beginner", "Intermediate", "Advanced"]);
var question5 = new MakeQuizItem(5, "How long are you interested in hiking for?", ["A few hours", "Half-day", "Full-day"]);
//how many can they select?
var question6 = new MakeQuizItem(6, "What features are you interested in?", ["Views", "Waterfalls", "Lake", "Wildflowers", "Wildlife", "Landscape (unique rock formations)"]);
//do I want this this? how do I filter?
var question7 = new MakeQuizItem(7, "Does paying a park fee make a difference?", ["Yes", "No", "I would prefer not to, but it's not a deciding factor"]);


///////////////////
//HIKE INSTANCES//
/////////////////
var hike1 = new MakeHikeItem(1, "Maroon Creek Trail", "Maroon Bells, Aspen, CO", 5, 3.2, 2.5, 1, "Lake", "img/maroon-bells.jpg", 39.0708, -106.9890, "Rated as a whole day hike due to its secluded location, the Maroon Creek Trail contains one of the most spectacular views in Colorado. The trail weaves through aspen groves, pine forests, and rock fields as you follow the Maroon Creek up to the Maroon Bells. The trail starts from west side of the Maroon Lake parking area, before you reach Maroon Lake. You’ll see the bridge to the left of the parking area. Cross it and turn left to follow the trail down the valley along Maroon Creek The easiest way to hike this trail is to start from the top end and follow it down to the East Mearoon Portal. That way, you can catch the bus back up to your car. If you choose this option, make sure you bring your Maroon Bells car pass with you. Show it to the bus driver, and you can then ride the bus for free. The forest service doesn’t check cars for passes at the parking area, so you don’t have to worry about that. Depending on the time of day, these buses run about every 20 minutes, so it's easy to catch a ride.");
var hike2 = new MakeHikeItem(2, "Alberta Falls", "Rocky Mountain National Park, Estes Park, CO", 10, 1.7, 1, 1, "Waterfall", img, lat, long, info);
var hike3 = new MakeHikeItem(3, "Flatirons Vista", "Chautauqua Park, Boulder, CO", 1, 3.3, 1.5, 1, "Views", img, lat, long, info);
var hike4 = new MakeHikeItem(4, "Isabelle Lake", "Indian Peaks Wilderness, Brainard Lake Recreation Area, Nederland, CO", 1, 4.2, 2.5, 2, "Lake, Views", img, lat, long, info);
var hike5 = new MakeHikeItem(5, "Hanging Lake", "Glenwood Springs, CO", 5, 1.7, 2, 2, "Waterfall", img, lat, long, info);
var hike6 = new MakeHikeItem(6, "Carpenter Peak Trail", "Roxborough State Park, Littleton, CO", 1, 6.4, 2.5, 2, "Views", img, lat, long, info);
var hike7 = new MakeHikeItem(7, "Sky Pond", "Rocky Mountain National Park, Estes Park, CO", 10, 9.0, 7, 3, "Lake", img, lat, long, info);
var hike8 = new MakeHikeItem(8, "Mohawk Lakes", "Breckenridge, CO", 4, 6.8, 3, 3, "Lake, Waterfall, Views", img, lat, long, info);
var hike9 = new MakeHikeItem(9, "Deer Mountain", "Rocky Mountain National Park, Estes Park, CO", 10, 6.2, 5, 3, "Views", img, lat, long, info);
var hike10 = new MakeHikeItem(10, "Garden of the Gods", "Colorado Springs, CO", 3, distance, duration, difficulty, "Landscape", img, lat, long, info);
var hike11 = new MakeHikeItem(11, "Red Feather Lakes", "Red Feather Lakes, CO", 2, distance, duration, difficulty, "Lakes, Landscape", img, lat, long, info);
// var hike12 = new MakeHikeItem(12, "Flatiron Loop 1", "Chautauqua Park, Boulder, CO", 1, distance, duration, difficulty, "Views", img, lat, long, info);
// var hike13 = new MakeHikeItem(13, "other easy roxborough", "Roxborough State Park, Littleton, CO", 1, distance, duration, 1, "Landscape", img, lat, long, info);

//Quiz method to render quiz item on DOM
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

MakeHikeItem.prototype.toString = function() {
  if (this.difficulty === 1){
    return "Easy";
  }
  if (this.difficulty === 2){
    return "Medium";
  }
  if (this.difficulty === 3){
    return "Hard";
  }
};

//Hike method to render hike results on the DOM
MakeHikeItem.prototype.render = function() {
  var results = $('#results');
  this.$element = results
    .append('<h2>Your suggested hike is:</h2><h3>'+this.name+'</h3><br>')
    .append('<div class="row"><div class="col-md-4 col-md-offset-2"><a href="#" class="thumbnail"><img src='+this.img+'></a><div class="row text-center"><div class="col-md-12"><ul class="list-group"><li class="list-group-item"><strong>Location: </strong>'+this.location+'</li><li class="list-group-item"><strong>Distance: </strong>'+this.distance+' miles</li><li class="list-group-item"><strong>Duration: </strong>'+this.duration+' hours</li><li class="list-group-item"><strong>Difficulty: </strong>'+this.toString()+'</li><li class="list-group-item"><strong>Features: </strong>'+this.feature+'</li></ul></div></div></div><div class="col-md-4"><p>'+this.info+'</p></div></div>')
    .append('<div class="row"><div class="col-md-6 col-md-offset-3" id="map">'+this.map+'</div></div>');
};

// hike1.render();





