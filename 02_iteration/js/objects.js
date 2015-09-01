//FILE NOT IN USE, ONLY FOR REFERENCE OF DATA - old attempt before OOP

//quiz questions
var quiz = {

  "Question1": {
    Priority: 1,
    Question: "How long are you looking to hike?",
    Options: [
      "A few hours",
      "Half-day",
      "Whole day"
    ]
  },

  "Question2": {
    Priority: 2,
    Question: "How would you rate your ability level?",
    Options: [
      "Beginner",
      "Intermediate",
      "Advanced"
    ],
  },

  "Question3": {///select features you want, different input type eventually since can select more than one?
    Priority: 3,
    Question: "Select a feature you are interested in:",
    Options: [
      "Views",
      "Waterfalls",
      "Lake"
      //wildflowers, wildlife
    ],
  },

  "Question4": {
    Priority: 3,
    Question: "Do you have children that will be hiking with you?",
    Options: ["Yes", "No"],
  },

  "Question5": {
    Priority: 4,
    Question: "Do you live in Colorado, or are you just visiting?",
    Options: ["I live here!", "Just stopping by"],
  },

  "Question6": {
    Priority: 5,
    Question: "If you live in Colorado, which area is closest to you?",
    Options: ["Great Denver Area (Boulder, Golden, Littleton)", "Fort Collins", "Colorado Springs", "Silverthorne (Breckenridge)", "Glenwood Springs (Vail, Aspen)", "Steamboat Springs", "Grand Junction", "Durango", "Telluride"],
  },

  "Question7": {
    Priority: 6,//sub question of where are you located?
    Question: "How far do you want to travel?",
    Options: ["Less than 2 hours", "Less than 4 hours", "Time does not matter"],
  },

  "Question8": {
    Priority: 7,
    Question: "Does paying a park fee make a difference?",
    Options: ["Yes", "No", "I would prefer not to, but it's not a deciding factor"],
  }
};


//hike data object
var allHikes = {

  "Hike1": {
    UniquieID: 1,
    Name: "Maroon Creek Trail",
    Location: "Maroon Bells, Aspen, CO",
    Distance: "3.2 miles one way",
    Duration: "2.5 hours one way",
    Difficulty: "Easy",//1
    Feature: "Lake"
    //whole day because location?
  },

  "Hike2": {
    UniquieID: 2,
    Name: "Alberta Falls",
    Location: "Rocky Mountain National Park, Estes Park, CO",
    Distance: "1.7 miles roundtrip",
    Duration: "1 hour roundtrip",
    Difficulty: "Easy",
    Feature: "Waterfall"
    //half day
  },

  "Hike3": {
    UniquieID: 3,
    Name: "Flatirons Vista",
    Location: "Chautauqua Park, Boulder, CO",
    Distance: "3.3 miles roundtrip",
    Duration: "1.5 hours roundtrip",
    Difficulty: "Easy",
    Feature: "Views"
    //few hours
  },

  "Hike4": {
    UniquieID: 4,
    Name: "Isabelle Lake",
    Location: "Indian Peaks Wilderness, Brainard Lake Recreation Area, Nederland, CO",
    Distance: "4.2 miles roundtrip",
    Duration: "2.5 hours",
    Difficulty: "Medium",//2
    Feature: "Lake"
      //half day
  },

  "Hike5": {
    UniquieID: 5,
    Name: "Hanging Lake",
    Location: "Glenwood Springs, CO",
    Distance: "1.7 miles roundtrip",
    Duration: "2 hours roundtrip",
    Difficulty: "Medium",
    Feature: "Waterfall"
    //whole day because of location?
  },

  "Hike6": {
    UniquieID: 6,
    Name: "Carpenter Peak Trail",
    Location: "Roxborough State Park, Littleton, CO",
    Distance: "6.4 miles roundtrip",
    Duration: "2.5 hours roundtrip",
    Difficulty: "Medium",
    Feature: "Views"
    //few hours
  },

  "Hike7": {
    UniquieID: 7,
    Name: "Sky Pond",
    Location: "Rocky Mountain National Park, Estes Park, CO",
    Distance: "9.0 miles roundtrip",
    Duration: "7 hours",
    Difficulty: "Hard",//3
    Feature: "Lake"
    //whole day
  },

  "Hike8": {
    UniquieID: 8,
    Name: "Mohawk Lakes",
    Location: "Breckenridge, CO",
    Distance: "6.8 miles roundtrip",
    Duration: "3 hours roundtrip",
    Difficulty: "Hard",
    Feature: "Waterfall"
    //few hours
  },

  "Hike9": {
    UniquieID: 9,
    Name: "Deer Mountain",
    Location: "Rocky Mountain National Park, Estes Park, CO",
    Distance: "6.2 miles roundtrip",
    Duration: "5 hours roundtrip",
    Difficulty: "Hard",
    Feature: "Views"
    //half day
  },
};
