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

//FUNCTIONS
console.log('----- FUNCTIONS ----')
//when this function is called you get these parameters
function createPerson(firstNameParam, lastNameParam, emailParam, ageParam){
  var newPerson = {
    //properties that will be referred to
    firstName: firstNameParam,
    lastName: lastNameParam,
    email: emailParam,
    age: ageParam

  };
  return newPerson; //this function makes the result of this code available outside the function
}

var harald = createPerson('Harald', 'Kumar', 'h.kumar@example.com', 15);
console.log('newPerson:', harald);

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
