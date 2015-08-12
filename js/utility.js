//JS Logic

var quiz = [
  {
    uniqueID: 1,
    question: "How long are you looking to hike?",
    options: ["A few hours", "Half-day", "Whole day"],
  },
  {
    uniqueID: 2,
    question: "How would you rate your ability level?",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    uniqueID: 3,
    question: "Do you have children that will be hiking with you?",
    options: ["Yes", "No"],
  },
  {
    uniqueID: 4,
    question: "Do you live in Colorado, or are you just visiting?",
    options: ["I live here!", "Just stopping by"],
  },
  {
    uniqueID: 5,
    question: "If you live in Colorado, which area is closest to you?",
    options: ["Great Denver Area", "Fort Collins", "Colorado Springs", "Silverthorne", "Glenwood Springs", "Steamboat Springs", "Grand Junction", "Durango"],
  },
  {
    uniqueID: 6,//sub question of where are you located?
    question: "How far do you want to travel?",
    options: ["Less than 2 hours", "Less than 4 hours", "Time does not matter"],
  },
  {
    uniqueID: 7,
    question: "Does paying a park fee make a difference?",
    options: ["Yes", "No", "I would prefer not to, but it's not a deciding factor"],
  },
  {///select features you want, different input type
    uniqueID: 8,
    question: "Select the features you want:",
    options: ["Panoramic Views", "Waterfalls", "Wildflowers", "Wildlife", "Lake", ],
  },
