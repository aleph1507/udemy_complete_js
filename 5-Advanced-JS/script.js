

// bind, call, apply
/*
var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if(style === 'formal') {
      console.log('Good ' + timeOfDay + ' ladies and gentlement! I\'m ' +
        this.name + ', I\'m a ' + this.job + '. I\'m ' + this.age);
    } else if(style === 'friendly') {
      console.log('Hey! ' + 'I\'m ' +  this.name + ', I\'m a ' + this.job +
        '. I\'m ' + this.age + '. Have a nice ' + timeOfDay);
    }
  }
}

var emily = {
  name: 'emily',
  age: 35,
  job: 'designer'
}

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

john.presentation.apply(emily, ['friendly', 'night']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('day');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('fuck');

var years = [1990, 1965, 1937, 2005];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i< arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);*/

// closures
/*
function interviewQuestion(job) {
  return function(name) {
    if(job === 'designer') {
      console.log(name + ' what do you design?');
    } else if(job === 'teacher') {
      console.log(name + ' what do you teach?');
    } else {
      console.log(name + ' what do you do?');
    }
  }
}

interviewQuestion('teacher')('John');*/
/*
function retirement(retirementAge) {
  var a = ' years left until retirement';
  return function(yearOfBirth) {
    var age = 2019 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
retirementUS(1990);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);

*/
// iiefe: immediately invoked function expressions
/*
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

*/
//functinos returning functions
/*
function interviewQuestion(job) {
  if(job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if(job === 'teacher') {
    return function(name) {
      console.log(name + ', what subject do you teach?');
    }
  } else {
    return function(name) {
      console.log('hello, ' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');
var designerQuestion = interviewQuestion('designer');
designerQuestion('John');

interviewQuestion('teacher')('Mark');*/

// passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998, 1989];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for(var i = 0; i<arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if(el >= 18 && el <=81)
    return Math.round(206.9 - (0.67 * el));
  else
    return -1;
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates); */

// primitives vs objects
/*

//primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
  name: 'john',
  age: 26
};

//objects
var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//Functions

var age = 27;
var obj = {
  name: 'jonas',
  city: 'lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'san francisco'
}

change(age, obj);

console.log(age);
console.log(obj.city);*/

// Object.create
/*
var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);

john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: {value: 'Jane'},
  yearOfBirth: {value: 1969},
  job: {value: 'designer'}
});
*/
// function constructor
/*
var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('john', 1990, 'teacher');
var jane = new Person('jane', 1969, 'designer');
var mark = new Person('mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

john.lastName = 'fuck';

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);*/
