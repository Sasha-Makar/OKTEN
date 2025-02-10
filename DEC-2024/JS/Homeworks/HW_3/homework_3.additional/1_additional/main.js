console.log('==============START============');
// 1
// #WpkK0ZH1
// --створити масив з:
//     - з 5 числових значень
let numArr = [1, 2, 3, 4, 5];
console.log(numArr);

// - з 5 стрічкових значень
let strArr = ['qwe', 'asd', 'qaz', 'okten', 'string'];
console.log(strArr);
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let array = [1, 2, true, 1 < 0, 'okten'];
console.log(array);

console.log('============');

// 2
// #4aDbSgh
// -- Створити пустий масив. Наповнити його будь-якими
// значеннями звертаючись до конкретного індексу.
// Вивести в консоль

let arr = [];
arr[0] = 1;
arr[1] = 2;
arr[3] = 'qwe';
arr[4] = true;
console.log(arr);
console.log(arr.length);
arr[arr.length] = false;
console.log(arr);

console.log('============');

// #qLQLJSeN7i
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arrOfNums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
let i = 0;
while (i < arrOfNums.length) {
    let num = arrOfNums[i];
    console.log(num);
    i++;
}

console.log('-----');

//     2. перебрати його циклом for
for (let j = 0; j < arrOfNums.length; j++) {
    let num = arrOfNums[j];
    console.log(num);
}

console.log('-----');

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let z = 0;
while (z < arrOfNums.length) {
    if (z % 2 !== 0) {
        console.log(arrOfNums[z]);
    }
    z++;
}

console.log('-----');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let j = 0; j < arrOfNums.length; j++) {
    if (j % 2) {
        console.log(arrOfNums[j]);
    }
}

console.log('-----');

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let index = 0;
while (index < arrOfNums.length) {
    let num = arrOfNums[index];
    if (num % 2 === 0) {
        console.log(num);
    }
    index++;
}

console.log('-----');

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let j = 0; j < arrOfNums.length; j++) {
    let num = arrOfNums[j];
    if (!(num % 2)) {
        console.log(num);
    }
}

console.log('-----');

// 7. замінити кожне число кратне 3 на слово "okten"

for (let item of arrOfNums) {
    // console.log(item);
    if (item % 3 === 0) {
        item = 'okten';
    }
    console.log(item);
}

console.log('-----');

// 8. вивести масив в зворотньому порядку.

for (let j = arrOfNums.length - 1; j >= 0; j--) {
    let num = arrOfNums[j];
    console.log(num);
}

console.log('-----===-----');
console.log('-----===-----');
console.log('-----===-----');

console.log('-------');
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1. перебрати його циклом while
// debugger;
let r = arrOfNums.length - 1;
while (r >= 0) {
    let num = arrOfNums[r];
    console.log(num);
    r--;
}

console.log('-------');

// 2. перебрати його циклом for
for (let j = arrOfNums.length - 1; j >= 0; j--) {
    let num = arrOfNums[j];
    console.log(num);
}

console.log('-------');

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let f = arrOfNums.length - 1;
while (f >= 0) {
    let num = arrOfNums[f];
    if (f % 2 !== 0) {
        console.log(num, 'index - ' + f);
    }
    f--;
}

console.log('-------');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let j = arrOfNums.length - 1; j >= 0; j--) {
    let num = arrOfNums[j];
    if (j % 2 !== 0) {
        console.log(num);
    }
}

console.log('-------');

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let t = arrOfNums.length - 1;
while (t >= 0) {
    let num = arrOfNums[t];
    if (num % 2 === 0) {
        console.log(num);
    }
    t--;
}

console.log('-------');

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let j = arrOfNums.length - 1; j >= 0; j--) {
    let num = arrOfNums[j];
    if (num % 2 === 0) {
        console.log(num);
    }
}

console.log('-------');
// 7. замінити кожне число кратне 3 на слово "okten"

for (let j = arrOfNums.length - 1; j >= 0; j--) {
    let item = arrOfNums[j];
    if (item % 3 === 0) {
        item = 'okten';
    }
    console.log(item);
}

console.log('-----===-----');
console.log('-----===-----');
console.log('-----===-----');


// #yHAwJOyiC
// - Створити масив з 10 числових елементів.
// Вивести в консоль всі його елементи в циклі.
let numArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of numArr2) {
    console.log(number);
}

console.log('-------');

//     #GamKju89ob
// - Створити масив з 10 строкрових елементів.
// Вивести в консоль всі його елементи в циклі.

let strArr2 = ['q', 'qw', 'qwe', 'a', 's', 'd', 'asd', 'okten', 'com', 'ua'];
for (const string of strArr2) {
    console.log(string);
}

console.log('-------');

//     #Bm76xmg
// - Створити масив з 10 елементів будь-якого
// типу. Вивести в консоль всі його елементи в циклі.

let array2 = [true, 'asd', NaN, null, undefined, -111, 10.23, false, 77, 'okten'];
for (const item of array2) {
    console.log(item);
}

console.log('-------');

//     #u3vmD0YJXh
// - Створити масив з 10 елементів числового,
// стірчкового і булевого типу. За допомогою if та
// typeof вивести тільки булеві елементи

let arr3 = [true, '2', '20.3', false, 10 > 20, true, 'okten', 'qwe', true, 10 + 1];
for (const item of arr3) {
    if (typeof item === "boolean") {
        console.log(item);
    }
}

console.log('-------');

// #9stMq2ou
// - Створити масив з 10 елементів числового,
// стірчкового і булевого типу. За допомогою if
// та typeof вивести тільки числові елементи

let arr4 = [1, 2, -123, 2.3, 'okten', 'asd', true, false, NaN, 11];
for (const item of arr4) {
    if (typeof item === "number") {
        console.log(item);
    }
}

console.log('-------');

// #mK4pmM4
// - Створити масив з 10 елементів числового,
// стрічкового і булевого типу. За допомогою if
// та typeof вивести тільки рядкові елементи

for (const item of arr4) {
    if (typeof item === "string") {
        console.log(item);
    }
}

console.log('-----===-----');
console.log('-----===-----');
console.log('-----===-----');

// #0pm3EyTKy9
// - Створити порожній масив. Наповнити його 10
// елементами (різними за типами) через
// звернення до конкретних індексів. Вивести
// в консоль всі його елементи в циклі.

let arr5 = [];
arr5[0] = 11;
arr5[1] = true;
arr5[2] = 'okten';
arr5[3] = false;
arr5[4] = 'qwe';
arr5[5] = 10.23;
arr5[6] = -123;
arr5[7] = false;
arr5[8] = 'true';
arr5[arr5.length - 1] = 'hello';
console.log(arr5);
for (const item of arr5) {
    console.log(item);
}

console.log('-------');

//     #mDMWMW5a
// - Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log
// та document.write

for (let j = 0; j < 10; j++) {
    console.log(j);
    document.write(`<li>поточний номер кроку - ${j}</li>`);
}

console.log('-------');
document.write('=================' + '<br/>');

// #4sXhaa5YMM
// - Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log
// та document.write

for (let j = 1; j <= 100; j++) {
    console.log(j);
    document.write(`<li>поточний номер кроку - ${j}</li>`);
}

console.log('-------');
document.write('=================' + '<br/>');

// #s24slNyz7
// - Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log
// та document.write

for (let j = 1; j <= 100; j += 2) {
    console.log(j);
    document.write(`<li>поточний номер кроку - ${j}</li>`);
}

console.log('-------');
document.write('=================' + '<br/>');

// #zananT5FR1
// - Створити цикл for на 100 ітерацій. Вивести
// тільки парні кроки. через console.log + document.write

for (let j = 1; j <= 100; j++) {
    if (j % 2 === 0) {
        console.log(j);
        document.write(`<li>поточний номер кроку - ${j}</li>`);
    }
}

console.log('-------');
document.write('=================' + '<br/>');

// #Tfrwls7FM
// - Створити цикл for на 100 ітерацій. Вивести
// тільки непарні кроки. через console.log + document.write

for (let j = 1; j <= 100; j++) {
    if (j % 2 !== 0) {
        console.log(j);
        document.write(`<li>поточний номер кроку - ${j}</li>`);
    }
}


console.log('-----===-----');
console.log('-----===-----');
console.log('-----===-----');

// #reLkOkTB29Q
// стоврити масив книжок (назва, кількість
// сторінок, автори , жанри).

let books = [

    {
        title: "The Great Gatsby",
        pages: 180,
        authors: ["F. Scott Fitzgerald"],
        genres: ["Fiction", "Classic"]
    },
    {
        title: "1984",
        pages: 328,
        authors: ["George Orwell", "and other","and other"],
        genres: ["Dystopian", "Political Fiction","Classic","Adventure"]
    },
    {
        title: "To Kill a Mockingbird",
        pages: 281,
        authors: ["Harper Lee","and other"],
        genres: ["Fiction", "Historical Fiction","Classic"]
    },
    {
        title: "Moby Dick",
        pages: 585,
        authors: ["Herman Melville"],
        genres: ["Adventure", "Classic"]
    },
    {
        title: "Pride and Prejudice",
        pages: 279,
        authors: ["Jane Austen"],
        genres: ["Romance", "Classic"]
    }

]

console.log(books);

// - знайти наібльшу книжку.
let count = books[0];

for (const book of books) {
    if (book.pages > count.pages) {
        count = book;
    }
}
console.log(count);

console.log('-----------');

// - знайти книжку/ки з найбільшою кількістю жанрів

let countGenre = books[0];
for (const book of books) {
    if (countGenre.genres.length < book.genres.length) {
        countGenre = book;
    }
}
console.log(countGenre);

console.log('-----------');

// - знайти книжку/ки з найдовшою назвою

let title = books[0];
for (const book of books) {
    if (title.title.length < book.title.length) {
        title = book;
    }
}
console.log(title);

console.log('-----------');

// - знайти книжку/ки які писали 2 автори

let authorsLength = books[0];

for (let book of books) {
    if (authorsLength.authors.length < book.authors.length) {
        authorsLength = book;
    }
}

console.log(authorsLength);

// '------OR-------'

let booksWithTwoOrMoreAuth = [];
let ind = 0;

for (const book of books) {
    if (book.authors.length >= 2) {
        booksWithTwoOrMoreAuth[ind] = book;
        ind++;
    }
}
console.log(booksWithTwoOrMoreAuth);

// - знайти книжку/ки які писав 1 автор

let booksWithOneAuth = [];
let index2 = 0;

for (const book of books) {
    if (book.authors.length === 1) {
        booksWithOneAuth[index2] = book;
        index2++;
    }
}
console.log(booksWithOneAuth);


console.log('-----===-----');
console.log('-----===-----');
console.log('-----===-----');






console.log('===============END===========');