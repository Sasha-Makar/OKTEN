// Тут ті самі завдання, що і в занятті
// про базові функції,але зробити їх
// потрібно за допомоги стрілочних функцій
// 1
// #I2XsG6f
// - створити функцію яка обчислює та повертає
// площу прямокутника зі сторонами а і б
// S = a ⋅ b , де a i b —сторони прямокутника

let rectangle = (a, b) => a * b;
console.log(rectangle(10, 2));

console.log('--------');

// 2
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає
// площу кола з радіусом r
// P=πr*2(p r-kvadrat)

let circle = r => Math.PI * Math.pow(r, 2);
console.log(circle(10));
let areaOfCircle = circle(5);
console.log(areaOfCircle);

console.log('--------');

// 3
// - створити функцію яка обчислює та повертає
// площу циліндру висотою h, та радіутом r
// S=2πr2 + 2πrh//(2pi r kvadrar + 2 pi r h)

let cylinder = (h, r) => 2 * Math.PI * Math.pow(r, 2) + 2 * Math.PI * r * h;
console.log(cylinder(5, 10));

console.log('--------');

// 4
// - створити функцію яка приймає масив та
// виводить кожен його елемент

let arrPrint = arr => {
    for (let item of arr) {
        console.log(item);
    }
}
arrPrint([1, 2, 3, 4, 5, 6, 7]);

console.log('--------');

// 5
// #59g0IsA
// - створити функцію яка створює параграф з
// текстом. Текст задати через аргумент

let paragraphWriter = txt => {
    document.write(`<p>${txt}</p>`);
}

paragraphWriter('Okten');
paragraphWriter('Okten');
paragraphWriter('Okten');

console.log('--------');
document.write('===================' + '<br>');

// 6
// #hOL6126
// - створити функцію яка створює ul з трьома
// елементами li. Текст li задати через аргумент
// всім однаковий

let listCreator1 = (txt) => {
    document.write(`<ul>`);
    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);
    document.write(`</ul>`)
}
listCreator1('okten');

console.log('--------');
document.write('===================' + '<br>');

// 7
// #0Kxco1edSN
// - створити функцію яка створює ul з трьома
// елементами li. Текст li задати через аргумент
// всім однаковий. Кількість li визначається
// другим аргументом, який є числовим
// (тут використовувати цикл)

let listCreator = (txt, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write(`</ul>`)
}
listCreator('com.ua', 3);

console.log('--------');
document.write('===================' + '<br>');

// 8
// #gEFoxMMO
// - створити функцію яка приймає масив
// примітивних елементів (числа,стрінги,булеві),
// та будує для них список

let primeElement = arr => {
    document.write(`<ul>`);
    for (let item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
primeElement([1, 2, 0, -123, false, 'qwe', true, 'asd']);

console.log('--------');
document.write('===================' + '<br>');

// 9
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів
// з наступними полями id,name,age , та виводить
// їх в документ. Для кожного об'єкту окремий блок.

let objPrint = arr => {
    for (let item of arr) {
        document.write(`<div class="block">
        <p>ID: ${item.id}. Name- ${item.name}. Age- ${item.age}</p>
                      </div>`)
    }
}
let users = [
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
objPrint(users);

console.log('--------');
document.write('===================' + '<br>');

// 10
// #pghbnSB
// - створити функцію яка повертає найменьше число
// з масиву

let minNumOfArr = arr => {
    let min = arr[0];
    for (let item of arr) {
        if (item < min) {
            min = item;
        }
    }
    return min;
}

let numArr = [0, 1, 3, 4, 5, 6, 7, 8, 2, -11, -123, 0, 1, 3, -1.2];
let minNum = minNumOfArr(numArr);
console.log(minNum);

//через Math.min
let minNumOfArr1 = arr => Math.min(...arr);

numArr = [0, 1, 3, 4, 5, 6, 7, 8, 2, -11, -123, 0, 1, 3, -1.2];
let minNumber = minNumOfArr1(numArr);
console.log(minNumber);

console.log('--------');
document.write('===================' + '<br>');

// 11
// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив
// чисел, сумує значення елементів масиву та
// повертає його. Приклад sum([1,2,10]) //->13

let sum = arr => {
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }
    return sum;
}

let sumNumber = sum([1, 2, 10]);
console.log(sumNumber);

console.log('--------');
document.write('===================' + '<br>');

// 12
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відаовідних
// індексах=>Приклад  swap([11,22,33,44],0,1)
// //=> [22,11,33,44]

let swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));//=> [22,11,33,44]

console.log('--------');
document.write('===================' + '<br>');

// 13
// #mkGDenYnNjn
// - Написати функцію обміну валюти
// exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},
// {currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return sumUAH / currencyValues[i].value;
        }
    }
    return 'ERROR';
}
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD')); // => 250