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

//add helper functions and results comparision


//SELECTIONS/ OPTIONS COMPARISON
//for, through selections array
//for, through hikes array

//ifs, filter
//breakdown into functions for each question

//will return the unique id of chosen hike
function getResults(){

    // question 1, option 1
    if (selections[0] === "0"){

      if (selections[1] === "1"){
        return 3;
      }
      if (selections[1] === "2"){
        return 6;
      }
      if (selections[1] === "3"){
        return 8;
      }
    }
    //question 1, option 2
    if (selections[0] === "1"){

      if (selections[1] === "0"){
        return 2;
      }
      if (selections[1] === "1"){
        return 4;
      }
      if (selections[1] === "2"){
        return 9;
      }
    }
    //question 1, option 3
    if (selections[0] === "2"){

      if (selections[1] === "0"){
        return 1;
      }
      if (selections[1] === "1"){
        return 5;
      }
      if (selections[1] === "2"){
        return 7;
      }
    }
}

function getHikeInfo(num){
  for (var i = 0; i < hikeArr.length; i++) {
    if (hikeArr[i].uuid === parseInt(num)){
      return hikeArr[i];
    }
  }
}











