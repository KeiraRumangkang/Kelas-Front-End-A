//Ubahlah syntax ES5 berikut ke dalam ES6

1
// function calculateAge(birthYear){
// 	return 2019 - birthYear;
// }

// function yearUntilRetirement(object){
// 	var age = calculateAge(object.year);
// 	var retirement = 60 - age;

// 	if(retirement > 0){
//     	console.log(object.firstName + ' retires in '+ retirement + ' years');
// 	} else {
//     	console.log(object.firstName + ' is already retired.');
// 	}
// }

// yearUntilRetirement({year: 1987, firstName: 'John'});

const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

yearUntilRetirement({ year: 1987, firstName: 'John' });


2.
// const addNumber = (a, b, c, d, e, f, g) => {
//  	var numbers = [a, b, c, d, e, f, g];
//  	var sum = 0;
//     //Change to map function
//  	for(var i=0;i<numbers.length;i++){
//      		sum += numbers[i];
//  	}
//  	return sum;
//  }

// console.log(addNumber(1,2,3,4,5,6,7));


let addNumber = (a, b, c, d, e, f, g) => {
  let numbers = [a, b, c, d, e, f, g];
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum;
}
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));


3.

// var phi = 3.14;
// var power = 2;
// var radius = 0;

// var calculateArea = function (obj) {
//   return phi * Math.pow(obj.radius, obj.power);
// };

// radius = 21;
// var area21 = calculateArea({radius: radius, power: 2 });

// radius = 7;
// var area7 = calculateArea({radius: radius, power: 2 });

// console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);

const phi = 3.14;
const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);
let radius = 21;
const area21 = calculateArea({ radius, power: 2 });
radius = 7;
const area7 = calculateArea({ radius, power: 2 });
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

4.
// const makeAjaxRequest = (url, method) => {
// if(!method){
//    	method = 'GET'
// }
// console.log(url, method);
// }

// makeAjaxRequest('www.google.com');


const makeAjaxRequest = (url, method = 'GET') => {
  console.log(url, method);
}
makeAjaxRequest('www.google.com');