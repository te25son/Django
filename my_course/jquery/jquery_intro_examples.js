// use $ to grab items from the DOM
// get the h1 element
$('h1')

// get all the li elements
$('li')

// get all elements with container class
$('.container')

// get all elements with the id special
$('#special')

// if multiple items with the same element exist, jquery will return a list of those items
// you can select individual items if you know where they are in the list
var listItem0 = $('li')[0]
var listItem1 = $('li')[1]
...
// the more common and less buggy method (aka the preferred method) is to use .eg(//the number of item you want)
var listItems = $('li')
listItems.eg(1).methodYouWant()

// you can change an elements css using jquery
var x = $('h1')
x.css('color', 'white')  // first parameter = the element you want to change, second element = what you want to change the element to
x.css('background', 'blue')

// you can change mulitple css properties at once by passing an object
// create the object
var newCSS = {
  'color', 'white',
  'background': 'silver',
  'border': '5px solid red',
}
// pass the object into jquery function
x.css(newCSS)
