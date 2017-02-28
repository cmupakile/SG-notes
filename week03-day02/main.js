console.log('in main.js');

//OBJECT - one or more proerties and a value.
//Now: write a loop to use `console.log()` to print out each person's first name and age
//use the `firstName` property for displaying the person's first name, and use multiple parameters for `console.log()`.


var person1/*OBJECT*/ = {
  firstName/*property*/: 'Bob',
  lastName: 'le plant',
  email: 'bob@spartaglobal.co',
  age: 12.5
};

var person2 = {
  firstName: 'Aretha',
  lastName: 'Frankline',
  email: 'ms.legend@example.com',
  age: 29
};

var person3 = {
  firstName: 'Joe',
  email: 4,
  hobbies: ['boxing', 'hitting']
};

var people = [person1, person2, person3];
for (var i = 0; i < people.length; i++){
console.log(people[i].firstName/* connects you to the object you want in the ARRAY*/, people[i].age);
}

//this test comes out on the else side of things because it actually creates two different obj and thus it does not compare the same obj
var testObject = {};

if (testObject === {}){
console.log('------- this is an object I guess ------ ');
} else {
  console.log('------ I guess this is not an object');
}
 /* //this here here is another valid way of creating an obj with properties
var p = {};
p.firstName = 'Fred';
p.lastName = 'Flintstone';
and so on and so forth

 */
/*ARRAY
var ages = [ 24, 23, 29, 32];*/

var capitalCity = 'London'; //global variable


//FUNCTIONS
console.log('----- FUNCTIONS ----')
//when this function is called you get these parameters
function createPerson(firstNameParam, lastNameParam, emailParam, ageParam){
  var newPerson = {
    //properties that will be referred to
    firstName: firstNameParam,
    lastName: lastNameParam,
    email: emailParam,
    age: ageParam,
    capitalCity: capitalCity,
    fullName: function() {
      return firstNameParam + ' ' + lastNameParam + ' from ' + capitalCity;
    }
  };

  return newPerson; //this function makes the result of this code available outside the function
}

var harald = createPerson('Harald', 'Kumar', 'h.kumar@example.com', 15);
console.log('newPerson:', harald.fullName());
var tola = createPerson('Tola', 'Olaoke', 'tolaoke@spartaglobal.co', 21);
var asma = createPerson('Asma', 'Chaima', 'achaima@spartaglobal.co', 21);
people = [harald, tola, asma];
people.push(harald);
people.push(tola);
people.push(asma);

function isOldEnough(age){
  return (age >= 18);
}

if (isOldEnough(17)){
  console.log('Come in.')
} else {
   {
     console.log('Come back when you are older.')
   }
}

// var oldEnoughComment;
// for (i = 0; i < people.length; i++){
//   oldEnoughComment = (isOldEnough(people[i].age))?
//   'is old enough':
//   'is NOT old enough';
//
//   console.log(people[i].fullName(), oldEnoughComment);
  //ternary operator                                           if                else
//   console.log(people[i].fullName(), isOldEnough(people[i].age))?'is old enough':'is NOT old enough');
// }

console.log('------ Obj Oriented Javascript:')
               //class
var coin = new Circle(1.2);
var plate = new Circle(7);
var circles = [coin, plate];

//one way to write an instance method
//constructor function -- can me a brand new one of these. "new Circle"
function Circle(radius) {
       //uppercase for a CONSTANT var
  //this.PI = 3.14
  this.radius = radius;
  this.circumference = function(){
    return 2 * Circle.PI * this.radius;
  };
  this.area = function () {
    return Circle.PI * this.radius * this.radius;
  };
}

//static (or class) property/var
Circle.PI = 22/7;

//another instance method 
//for every new instance of this circle i want you to create a new area for it
//attached to the prototype -- it is part of the circle class. when javascript does new:
//it says in this obj that is passed back into the var here
//in that obj there going to be a method called area
Circle.prototype.area = function() {

  return Circle.PI * this.radius * this.radius;
};

for (i = 0; i < circles.length; i++){
                         //property
console.log('Radius is', circles[i].radius);
console.log('circumference is', circles[i].circumference());
console.log('Area is:', circles[i].area()); //method
}
