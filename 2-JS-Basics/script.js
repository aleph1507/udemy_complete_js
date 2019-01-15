// Lec. 13 challenge

var YOBs = [1988, 1989, 1990], a = [];
for(let i = 0; i<YOBs.length; i++)
  a[i] = YOBs[i];

var YOBs2 = [1965, 2008, 1992];

// YOBs.forEach(function(yob){
//   2018 - yob >= 18 ? console.log(yob, ' > 18') : console.log(yob, ' < 18');
// });

function printFullAge(yobs){
  for(var i = 0; i<yobs.length; i++){
    a[i] = yobs[i];
    2018 - a[i] > 18 ? console.log(yobs[i], ' > 18') : console.log(yobs[i], ' < 18');
  }
}

printFullAge(YOBs);
printFullAge(YOBs2);

// Lec. 12 Loops and iteration

// for(var i = 0; i<10; i++){
//   console.log(i);
// }
//
// var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
// //
// // for(var i = names.length-1; i>=0; i--){
// //   console.log(names[i]);
// // }
//
// // names.forEach(function(name) {
// //   console.log(name);
// // });
//
// var i = 0;
// while(i < names.length){
//   console.log(names[i++]);
//   // i++;
// }



// Lec. 11 Objects and methods

//
// var john = {
//   name: 'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   job: 'teacher',
//   isMarried: false,
//   family: ['Jane', 'Mark', 'Bob'],
//   calculateAge: function() {
//     // return 2016 - this.yearOfBirth;
//     this.age = 2016 - this.yearOfBirth;
//   }
// };
//
// john.calculateAge();
//
// console.log(john.age);
// console.log(john);

//
// var john = {
//   name: 'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   job: 'teacher',
//   isMarried: false,
//   family: ['Jane', 'Mark', 'Bob'],
//   calculateAge: function() {
//     return 2016 - this.yearOfBirth;
//   }
// };
//
// console.log(john.calculateAge());
//
// var age = john.calculateAge();
// john.age = age;
//
// console.log(john);

// Lec. 10 Objects and properties
//
// var john = {
//   name: 'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   job: 'teacher',
//   isMarried: false,
// };
//
// console.log(john.lastName);
// console.log(john['lastName']);
//
// var xyz = 'job';
// console.log(john[xyz]);
//
// john.lastName = 'Miller';
// john['job'] = 'programmer';
//
// console.log(john);
//
// var jane = new Object();
// jane.name = 'Jane';
// jane.lastName = 'Smith';
// jane['yearOfBirth'] = 1969;
// jane['job'] = 'retired';
// jane['isMarried'] = true;
//
// console.log(jane);

// Lec. 9 arrays
//
// var names = ['John', 'Jane', 'Mark'];
// var years = new Array(1990, 1969, 1948);
//
// var john = ['John', 'Smith', 1990, 'teacher', false];
//
// john.push('blue');
// john.unshift('Mr.');
// console.log(john.pop());
// console.log(john.shift());
// console.log(john);
//
// // alert(john.indexOf('Smith'));
//
// var job = 'diver';
//
// if(john.indexOf(job) === -1){
//   console.log('is not a ' + job);
// } else {
//   console.log(job);
// }

// console.log(names);

// names.forEach(function(element){
//   console.log(element);
// });

// Lec. 8 statements and expressions

//   //statement does not produce immediate value
//   //expressions do
//
// function func_statement(par){
//   //code
//   // function statement
// }
//
// var func_expression = function(par){
//   //code
//   //function expression
// }


// Lec. 7 functions

// function calculateAge(yearOfBirth){
//   var age = 2016 - yearOfBirth;
//   return age
// }
//
// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1969);
// var ageMary = calculateAge(1948);
//
// console.log(ageJohn);
// console.log(ageMike);
// console.log(ageMary);
//
// function yearsUntilRetirement(name, yearOfBirth){
//   var age = calculateAge(yearOfBirth);
//   var retirement = 65 - age;
//   if(retirement >= 0)
//     console.log(name + ' should retire in ' + retirement);
//   else
//     console.log(name + ' has retired ' + retirement*-1 + ' years ago');
// }
//
// yearsUntilRetirement('John', 1990);
// yearsUntilRetirement('Mike', 1969);
// yearsUntilRetirement('Mary', 1948);

// Lec. 6 coding challenge

// var h1, h2, a1, a1, h3, a3;
// h1 = prompt('h1:');
// a1 = prompt('a1:');
// h2 = prompt('h2:');
// a2 = prompt('a2:');
// h3 = prompt('h3:');
// a3 = prompt('a3:');
//
// var r1 = h1 + 5 * a1, r2 = h2 + 5 * a3, r3 = h3 + 5 * r3;
//
// if(r1 >= r2 && r1 >= r3)
//   console.log('p1 winner');
// else if(r2 >= r1 && r2 >= r3)
//   console.log('p2 winner');
// else
//   console.log('p3 winner');

// [r1, r2, r3].forEach(function(r){
//   if(r > max){
//     max = r;
//
//   }
// });

// Lec. 5 boolean logic and switch

// var age = 25;
//
// if(age < 20){
//   console.log('teenager');
// } else if(age >= 20 && age < 30){
//   console.log('adult');
// } else {
//   console.log('senior');
// }
//
// var job = 'copq';
//
// job = prompt('job?');
//
// switch(job){
//   case 'teacher':
//     console.log('teacher');
//     break;
//   case 'driver':
//     console.log('driver');
//     break;
//   case 'cop':
//     console.log('cop');
//     break;
//   default:
//     console.log('unemployed');
//     break;
// }

// Lec. 4 if/else

// var name = 'John', age=26, isMarried = 'no';
//
// if(isMarried === 'yes'){
//   console.log(name + ' is married');
// } else {
//   console.log(name + ' is not married');
// }
//
// isMarried = false;
//
// isMarried ? console.log('m') : console.log('nm');
//
// if(23 == '23'){
//   console.log('23 == 23');
// } else {
//   console.log('23 != 23');
// }
//
// if(23 === '23'){
//   console.log('23 === 23');
// } else {
//   console.log('23 !== 23');
// }
// Lec. 3 Operators

// var now = 2016;
// var birthYear = now - 26 * 2;
//
// console.log(birthYear);
//
// var ageJohn = 30, ageMark = 30;
//
// ageJohn = ageMark = (3 + 5) * 4 - 6;
//
// console.log(ageJohn++, ++ageMark*2);

// Lec. variables 2

// var name = 'John';
// var age = 26;
//
// var job, isMarried;
//
// job = 'teacher';
// isMarried = false;
//
// console.log(name + ' is a ' + age +
//  ' years old ' + job +
//  '. Married: ' + isMarried);
//
// age = 'thiry six';
// job = 'driver';
//
// console.log(name + ' is a ' + age +
//  ' years old ' + job +
//  '. Married: ' + isMarried);
//
// var lastName = prompt('Last Name?');
//
// console.log(lastName);
//
// alert(name + ' ' + lastName + ' is a ' + age +
//  ' years old ' + job +
//  '. Married: ' + isMarried);

// Lec. Variables
/*console.log('Hello world');
var name='John', lastName='Smith', age = 26;
console.log(name, ' ', lastName);

var fullAge=true;
console.log(fullAge);*/

// Number, floating points, integers
// String
// Boolean
// Undefined
// Null
