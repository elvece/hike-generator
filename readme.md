## miHike: Hiking Suggestion Generator

###Project Description
miHike aims to provide an easy and efficent hike gerentating service for individuals travelling to Colorado, or individuals simply seeking a straightforward resouce for finding their next adventure.

###Key Features
1. About section
1. Quiz questions
1. Image gallery in results
1. Suggestions if result not ideal
1. Google Maps to see trail location
1. Trail informaiton/Ratings(?)

####Quiz Questions:
* Length of hike: few hours, half day, whole day
* Ability level: beginner, intermediate, advanced (having a fit guide for each category)
  *Not sure? : how many hikes have you been on?, age?, do you exercise regularly?
* Children? yes or no
* Visiting colorado? yes or no (altitude adjustment)
* Features? (panoramic views, waterfalls, lakes)
* Location - where are you staying/ how far do you want to travel
* Pay for entrance? yes or no

####Quiz Results:
* Your specifications with lakes, with waterfalls
* Give options if what they select is not totally encompassed in a certain category
  * Recommendations for something a little easier and a littler harder
  * Or, if you like this, you might like this
* Hike information: trail difficulty, trail rating (how determined??? necessary???)

###Technologies
* HTML/CSS
* CSS or jQuery - image transitions?
* JS/jQuery for quiz questions and printing results
* Jasmine testing
* Google Maps JavaScript API

###Paradigm
* OOP - will continually be adding new hikes with specific features, so will need prototypes. Need a master results object that if statements will pull from based on user input

###Wire Framing

![sketch] (./img/hike-wireframe.jpg )

###Challenges
* How to generate results dependent on user specifications/ give suggestions for various options dependent on what they are looking for (ie if want an easy hike with waterfalls but this does not match any hike, first suggest easy hike, and in alternative suggestions, give easiest hike with waterfall)
* Calculating hikes based on user location in CO and how far they want to travel

###Stretch Goals
* Make quiz interactive, ciricling answers, graphics for selections (mountains for difficulty)
* Email, contact form
* User contributions
* Build database (based on personal experiences)
* Use an API (? not sure because I ideally want to build my own database)

###Personal Notes
* Quiz: click button on homepage to get started -->opens up a pop up of first quiz question, blurs the background, should questions be interactive? (circle answer)
* Image Transitions - when click master image on results page, a seperate overlay will pop up and allow you to swipe through other images, have users add their own??
* Blurb: Have you ever wanted to find the perfect hike, but felt overwhelmed by the plethora of insufficient resources that take too much time an energy to search through? miHike does the work for you. Based on your answers to a few simple questions regarding your past and intended experiences hiking, miHike will offer  suggestions for your ideal adventure experience.
* Hikes to include: Boulder Flatirons, Garden of the Gods, The Loch (waterfall on the way there = easier, sky pond = harder), hike in Breckenridge, Lake Isabelle, Red Feather Lakes (easy), hike off the Boulder path with rock formations (look up name), Maroon Bells (easy), Bear Trail in RMNP (medium), Roxoborough (easy, close to denver, $)
