// 1
// #I2XsG6f
// - створити функцію яка обчислює та
// повертає площу прямокутника зі
// сторонами а і б
// S = a ⋅ b , де a i b —сторони прямокутника

function areaRectangle(a, b) {
    return a * b;
}

let rectangle = areaRectangle(10, 20);
console.log(rectangle);

console.log('======================');

// 2
// #ETGAxbEn8l
// - створити функцію яка обчислює та
// повертає площу кола з радіусом r

// P=πr*2(p r-kvadrat)

function areaCircle(r) {
    return Math.PI * Math.pow(r, 2);
}

let circle = areaCircle(10);
console.log(Number(circle.toFixed(2)));

console.log('======================');

// 3
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та
// повертає площу циліндру висотою h,
// та радіутом r
// S=2πr2 + 2πrh//(2pi r kvadrar + 2 pi r h)

function areaCylinder(h, r) {
    return 2 * Math.PI * Math.pow(r, 2) + 2 * Math.PI * r * h;
}

let cylinder = areaCylinder(10, 5);
console.log(parseInt(cylinder));

console.log('======================');

// 4
// #SIdMd0hQ
// - створити функцію яка приймає
// масив та виводить кожен його елемент

function printArray(array) {
    for (const item of array) {
        console.log(item);
    }
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
printArray(users);

console.log('======================');

// 5
// #59g0IsA
// - створити функцію яка створює
// параграф з текстом та виводить його
// через document.write. Текст задати
// через аргумент

function writer(txt) {
    document.write(`<p>${txt}</p>`);
}

writer('параграф з текстом та виводить його');
writer('через document.write.');


console.log('======================');
document.write('********************' + '<br/>');

// 6
// #hOL6126
// - створити функцію яка створює ul з
// трьома елементами li та виводить його
// через document.write. Текст li задати
// через аргумент всім однаковий

function listWriter(txt) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write(`</ul>`);
}

listWriter('OKTEN');
listWriter('com.ua');


console.log('======================');
document.write('********************' + '<br/>');

// 7
// #0Kxco1edSN
// - створити функцію яка створює ul з
// елементами li. Текст li задати через
// аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є
// числовим (тут використовувати цикл)
// та виводить його через document.write

function newListWriter(txt, count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write(`</ul>`);
}

newListWriter('hello', 2);
newListWriter('world', 3);


console.log('======================');
document.write('********************' + '<br/>');

// 8
// #gEFoxMMO
// - створити функцію яка приймає масив
// примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить
// його через document.write

function arrayWriter(arr) {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}

let someArray = [1, 2, 3, 'qwe', false, -111, true, 'asd'];
arrayWriter(someArray);

// через arguments
document.write('arguments+spred');

function arrWriter() {
    document.write(`<ul>`);
    for (let i = 0; i < arguments.length; i++) {
        let item = arguments[i];
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}

arrWriter(...someArray);


console.log('======================');
document.write('********************' + '<br/>');


// 9
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів
// з наступними полями id,name,age , та виводить
// їх в документ. Для кожного об'єкту окремий блок.

function creator(array) {
    for (const block of array) {
        document.write(`<div>
                        <p>ID:№${block.id}</p>
                        <h3>Name-${block.name}. Age:${block.age}</h3>
                        </div>`)
    }
}

let usersObj = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'anya', age: 31},
    {id: 6, name: 'oleg', age: 28},
    {id: 7, name: 'andrey', age: 29},
    {id: 8, name: 'masha', age: 30},
    {id: 9, name: 'olya', age: 31},
    {id: 10, name: 'max', age: 31}
];
creator(usersObj);


console.log('======================');
document.write('********************' + '<br/>');


// 10
// #pghbnSB
// - створити функцію яка повертає найменьше
// число з масиву


let numArr = [1, 2, 3, 7, 9, 1, 0, -11, -3, 10];

function minNum(arr) {
    let min = arr[0];
    for (const item of arr) {
        if (item < min) {
            min = item;
        }
    }
    console.log(min);
}

minNum(numArr);


console.log('*****');
console.log('spred operator');
console.log('*****');

numArr = [1, 2, 3, 7, 9, 1, 0, -11, -3, 10];

function newMinNum(arr) {
    console.log(Math.min(...arr));
}

newMinNum(numArr);


console.log('======================');
document.write('********************' + '<br/>');


// 11
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив
// чисел, сумує значення елементів масиву та
// повертає його. Приклад sum([1,2,10]) //->13


function sum(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    return sum;
}

let sum1 = sum([1, 2, 10]);
console.log(sum1);


console.log('======================');
document.write('********************' + '<br/>');


// 12
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


function swap(arr, index1, index2) {
    let tempEl = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tempEl;
    return arr;
}

let swap1 = swap([11, 22, 33, 44], 0, 1);
console.log(swap1);
console.log('---');
let swap2 = swap([77, 66, 55, 44, 33], 2, 3);
console.log(swap2);


console.log('======================');
document.write('********************' + '<br/>');


// 13
// #mkGDenYnNjn
// - Написати функцію обміну валюти
// exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},
// {currency:'EUR',value:42}],'USD') // => 400


function exchange(sumUAH, currencyValues, exchangeCurrency) {

    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return sumUAH / currencyValues[i].value;
        }
    }
    // alert('ERROR');
    // console.log('ERROR');
    return 'ERROR';
}

 let exchange1 = exchange(10000,
                 [{currency: 'USD', value: 25},
                              {currency: 'EUR', value: 42}],
          'USD');

console.log(exchange1);

console.log('*******');

let exchange2 = exchange(500,[{currency: 'USD', value:40},
                                                  {currency: 'EUR', value: 100}],
                               'UAH');

console.log(exchange2);

