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
 /*
var p = {};


 */
/*ARRAY
var ages = [ 24, 23, 29, 32];*/
