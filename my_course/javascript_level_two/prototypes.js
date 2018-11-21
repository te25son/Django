// prototypes are the mechanisms by which javascript objects inherit features from one another
// to provide inheritence, objects can have a prototype object
// a PROTOTYPE OBJECT acts as a template object that objects inherit methods and properties from
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
    var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
    var pronoun;

    // get pronoun from gender
    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
      pronoun = 'He likes ';
    } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
      pronoun = 'She likes ';
    } else {
      pronoun = 'They like ';
    }

    // add the pronoun string to the beginning of the main string
    string += pronoun;

    // build string according to the number of interests
    // use another conditional to structure the last part of the
    // second sentence depending on whether the number of interests
    // is 1, 2, or 3
    if (this.interests.length === 1) {
      string += this.interests[0] + '.';
    } else if(this.interests.length === 2) {
      string += this.interests[0] + ' and ' + this.interests[1] + '.';
    } else {
      // if there are more than 2 interests, we loop through them
      // all, adding each one to the main string followed by a comma,
      // except for the last one, which needs an and & a full stop
      for (var i = 0; i < this.interests.length; i++) {
        if(i === this.interests.length - 1) {
          string += 'and ' + this.interests[i] + '.';
        } else {
          string += this.interests[i] + ', ';
        }
      }
    }

    // finally, with the string built, we alert() it
    alert(string);
  };

  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

// create a var of a new person
var person1 = new Person('Mary', 'Hallaway', 62, 'female', 'kindergarten teacher', ['knitting', 'baking', 'stock car racing'])

// The object Person() inherits traits from the default type Object()
// the variable object person1 inherits from Person() and thus also inherits from Object()
// Person() is a prototype of person1 the same as Object() is a prototype of Person()
// like a family tree, there forms a traceable root of inheritence

// NOTE that methods and properties are not copied from object to object down the
// prototype chain. rather, they are accessed by stepping up the chain.
// for example, we call this method on our person1 object...
person1.valueOf()

// the broweser first checks whether person1 has a valueOf() method on it. It doesn't, so
// it moves to the next object up the chain, Person(). Does Person() have the valueOf()
// method? Nope, so on to the next. Eventually, if the method exists in the protoype chain,
// the browser will reach it. Otherwise, it doesn't exist and an error message will appear.
