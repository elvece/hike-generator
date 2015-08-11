## miHike: Hiking Suggestion Generator

###Project Description
miHike aims to provide an easy and efficent hike gerentating service for individuals travelling to Colorado, or individuals simply seeking a straightforward resouce for finding their next adventure.

###Key Features
1. Quiz questions
1. Image gallery in results
1. Suggestions if result not ideal
1. Google Maps
1. Trail informaiton/Ratings(?)

####Quiz Questions:
* length of hike: few hours, half day, whole day
* ability level: beginner, intermediate, advanced (having a fit guide for each category)
  *not sure? : how many hikes have you been on?, age?, do you exercise regularly?
* children? yes or no
* visiting colorado? yes or no (altitude adjustment)
* features? (panoramic views, waterfalls, lakes)

####Quiz Results:
* your specifications with lakes, with waterfalls
* give options if what they select is not totally encompassed in a certain category
  * recommendations for something a little easier and a littler harder
  * or, if you like this, you might like this
* hike information: trail difficulty, trail rating (how determined??? necessary???)

###Technologies
* HTML/CSS
* CSS or jQuery - image transitions?
* JS/jQuery for quiz questions and printing results
* Jasmine

###Paradigm
* OOP - will continually be adding new hikes with specific features, so will need prototypes. Need a master results object that if statements will pull from based on user input

### Wire Framing

![sketch] (./img/hike-wireframe.jpg )

###Stretch Goals
* Make quiz interactive, ciricling answers, graphics for selections (mountains for difficulty)
* Email, get in touch?
* Build database (based on personal experiences)
* Use an API (? not sure because I ideally want to build my own database)

###Personal Notes
* Quiz: click button on homepage to get started -->opens up a pop up of first quiz question, blurs the background, should questions be interactive? (circle answer)
* Image Transitions - when click master image on results page, a seperate overlay will pop up and allow you to swipe through other images, have users add their own??
* Blurb: Have you ever wanted to find the perfect hike, but felt overwhelmed by the plethora of insufficient resources that take too much time an energy to search through? miHike does the work for you. Based on your answers to a few simple questions regarding your past and intended experiences hiking, miHike will offer  suggestions for your ideal adventure experience.
