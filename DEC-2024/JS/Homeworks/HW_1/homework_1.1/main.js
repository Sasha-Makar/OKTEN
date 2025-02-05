// #dYQNrBV-----1
// Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14,
// 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
//
// #6Qb97gsv----2
// - Створити 3 змінних firstName, middleName, lastName,
// наповнити їх своїм ПІБ. З'єднати їх в одну змінну person'
// (Не об'єкт, просто за допомоги конкатенації)
//
// #4N0y5tufA-------3
// - За допомогою оператора typeof визначити типи наступних
// змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;

console.log('=======№1========');

let str = 'hello';
let str1 = 'owu';
let str2 = 'com';
let str3 = 'ua';
let num = 1;
let num1 = 10;
let num2 = -999;
let num3 = 123;
const PI = 3.14;
let floatNum = 2.7;
let num4 = 16;
let bool = true;
let bool1 = false;

console.log('-------------');
console.log(str);
console.log(str1);
console.log(str2);
console.log(str3);
console.log(num);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(PI);
console.log(floatNum);
console.log(num4);
console.log(bool);
console.log(bool1);
console.log('========');
console.log(str, str1, str2, str3);
console.log(num1, num2, num3, num4);
console.log(PI, floatNum);
console.log(bool, bool1);

console.log('--------------=====================------------------');
console.log('=============№2===========');


let firstName = 'Олександр';
let middleName = 'Ігорович';
let lastName = 'Макар';

let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);
console.log('-------');
person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

console.log('-----------------======================----------------');
console.log('====================№3=============');

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


