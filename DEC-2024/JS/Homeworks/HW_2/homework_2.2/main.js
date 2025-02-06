console.log('=============Логічні розгалуження=========');

// #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне
// числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
//     інакше виведіть 'Невірно'. Перевірте  скрипт
// при a, що дорівнює 1, 0, -3

let x = 1;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

console.log('---');

x = 0;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

console.log('---');

x = -3;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

console.log('=====================');

// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої
// четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('enter integer from 0 to 59');

if ((time >= 0) && (time <= 15)) {
    console.log('число попадає в ПЕРШУ четверть години');
} else if ((time > 15) && (time <= 30)) {
    console.log('число попадає в ДРУГУ четверть години');
} else if ((time > 30) && (time <= 45)) {
    console.log('число попадає в ТРЕТЮ четверть години');
} else if ((time > 45) && (time <= 59)) {
    console.log('число попадає в ЧЕТВЕРТУ четверть години');
} else {
    console.log('Ви ввели не вірне число');
}

console.log('=====================');

// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи
// третю).

let day = Number(prompt('enter only integer from 1 to 31'));

if ((day >= 1) && (day <= 10)) {
    console.log('це число потрапляє в ПЕРШУ декаду місяця');
} else if ((day > 10) && (day <= 20)) {
    console.log('це число потрапляє в ДРУГУ декаду місяця');
} else if ((day > 20) && (day <= 31)) {
    console.log('це число потрапляє в ТРЕТЮ декаду місяця');
} else {
    console.log('Ви ввели не вірне число');
}

console.log('=====================');

// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано
// на цей день (можна замість плану на день,
// назву дня англійською).


let dayOfWeek = parseInt(prompt('enter integer from 1 to 7'));

switch (dayOfWeek) {
    case 1:
        alert('today is Monday');
        break;
    case 2:
        alert('today is Tuesday');
        break;
    case 3:
        alert('today is Wednesday');
        break;
    case 4:
        alert('today is Thursday');
        break;
    case 5:
        alert('today is Friday');
        break;
    case 6:
        alert('today is Saturday');
        break;
    case 7:
        alert('today is Sunday');
        break;
    default:
        alert('something gone wrong!!!');
}

console.log('=====================');

// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
//Потрібно знайти та вивести максимальне число
// з тих двох .
//Також потрібно врахувати коли введені рівні
// числа.

let num1 = +prompt('enter any integer', 10);
let num2 = +prompt('enter any integer', 15);

if (num1 === num2) {
    console.log('введено рівні числа!!!');
} else if (num1 > num2) {
    console.log('максимальне число ' + num1);
} else if (num2 > num1) {
    console.log('максимальне число ' + num2);
} else {
    console.log('ERROR....enter integer!!!');
}

console.log('=====================');

// #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке
// значення (стрінг, число, undefined, null
// і тд включно). Напишіть код який,
// буде присвоювати змінній х значення "default"
// якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті, які приводиться до false,
// а це 0 null undefined і тд).

// let varX=0;
let varX = 10;

if (varX === 0 || varX === null || varX === undefined || varX === Number.isNaN(varX)) {
    varX = 'default';
} else {
    console.log(varX);
}
console.log(varX);

console.log('---');

varX = varX || 'default';
console.log(varX);

console.log('=====================');

// #awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan )
// взяти масив coursesAndDurationArray. За допомоги
// іф перевірити кожен його елемент на тривалість
// навчання. У випадку якщо тривалість довша за 5
// місяців вивести в консоль "Супер".


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Супер");
}

console.log('-------===========-----------');





