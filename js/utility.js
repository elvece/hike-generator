//JS Logic

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

  //-----------//
 //---QUIZ----//
//-----------//
//in, process, out
//WHAT IS THE BETTER WAY TO DO THIS? HOW CAN I BETTER ACCESS QUIZ OBJECT???



//gets questions from an array and pushes them into a new array
function getQuestion(arr){
  var tempArr = [];
  for (var i = 0; i < arr.length; i++) {
    var question = arr[i].Question;
    tempArr.push(question);
  }
  return tempArr;
}
//variable to hold questions from quiz array
var questionArr = getQuestion(quiz);


//gets options from an array and pushes them into a new array
function getOptions(arr){
  var tempArr = [];
  for (var i = 0; i < arr.length; i++) {
    var options = arr[i].Options;
    tempArr.push(options);
  }
  return tempArr;
}
//variable to hold options from quiz array
var optionsArr = getOptions(quiz);



















//??OOP - could make a question class and answer class, then a render method
// function Questions (obj, key){
//   this.obj = obj;
//   this.key = key;
// }
// var question1 = Question.prototype.method_name = function(first_argument) {
//   // body...
// };

