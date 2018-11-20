// constructors and objects

// constructor functions
// useful when you don't know how many objects you'll be creating
// provides the means to create as many objects as you want in an efficient way

// define a person with a normal function
function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
  return obj;
}

// create a person using this function
var kevin = createNewPerson("Kevin")
kevin.name;
kevin.greeting();

// but why create an empty object and return it? isn't there an easier way?
// yes, yes there is :-)

// create a constructor function
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

// the constructor function is javascripts version of a class
// it doesn't return anything or explicitly create an object
// instead, it just defines properties and methods

// so then how do we create an object?
// observe...
var person1 = new Person('Thomas')
var person2 = new Person('Amanda')

// create a more complex contructor
function Person(first, last, age, gender, occupation, interests) {
  this.name = {
    'first': first,
    'last': last,
  },
  this.age = age,
  this.gender = gender,
  this.occupation = occupation,
  this.interests = interests;
  this.bio = function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old and works as a(n) ' + this.occupation
    + '. ' + genderPronoun(this.gender) + getInterests(this.interests) + '.')
  }
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

// create a new object with the modified constructor
var person3 = new Person('Adam', 'Harrison', 32, 'male', 'engineer', ['brewing', 'powerlifting', 'surfing', 'camping'])
var person4 = new Person('Sarah', 'Summers', 22, 'female', 'programmer', ['coffee roasting', 'skateboarding'])
var person5 = new Person('Kyle', 'Neeves', 29, 'undefined', 'artist', ['poetry'])

// update bio to account for gender. atm it will always include 'he' as the pronoun
function genderPronoun(gender) {
  if (gender.toLowerCase() == 'male') {
    return 'He enjoys '
  } else if (gender.toLowerCase() == 'female') {
    return 'She enjoys '
  } else {
    return 'They enjoy '
  }
}

// let bio account for more than 2 interests
function getInterests(arr) {
  finArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr.length == 2 && i == 0) {
      finArr.push(arr[i] + ' ')
    } else if (i != arr.length - 1) {
      finArr.push(arr[i] + ', ')
    } else if (arr.length === 1 && arr[arr.length -1]) {
      finArr.push(arr[i])
    } else {
      finArr.push('and ' + arr[i])
    }
  }
  return finArr.join("")
}
