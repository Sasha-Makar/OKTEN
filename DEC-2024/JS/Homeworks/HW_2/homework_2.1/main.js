console.log("=================Масиви та об`єкти==================");
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами
// будь-якого типу, вивести кожен елемент в консоль

let array = [1, 2, 3, -123, 3.3, 'okten', null, {name: 'vasya', age: 33}, NaN, ['html', 'js', 'css']];
console.log(array);
console.log(array.length);

console.log('-------');

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);

console.log(array[7]);
console.log(array[7]["name"]);
console.log(array[7].age);

console.log(array[8]);

console.log(array[9]);
console.log(array[9][1]);
console.log(array[9][0]);

console.log('-------');

// let value = prompt('enter string value');
//
// array[array.length] = value;
//
// console.log(array);

console.log('-------=======-------');

// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля
// об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'John Wick',
    pageCount:333,
    genre: 'Detective'
};
let book2 = {
    title: 'Avalon',
    pageCount:250,
    genre: 'Fantastic'
};

let book3 = {
    title: 'Queen of spades',
    pageCount:533,
    genre: 'Drama'
};
console.log(book1);
console.log(book2);
console.log(book3);

console.log('-------=======-------');

// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля
// об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен
// автор має поля name та age.


let book4 = {
    title: 'John Wick',
    pageCount:333,
    genre: 'Detective',
    authors:[
        {name:'Derek Kolstad', age: 51}
    ]
};
let book5 = {
    title: 'Avalon',
    pageCount:250,
    genre: 'Fantastic',
    authors: [
        {name:'Barry Levinson', age:82}
    ]
};

let book6 = {
    title: 'Whispers of the Past',
    pageCount:533,
    genre: 'Drama',
    authors:[
        {name: ' James Carter', age:53},
        {name:'Emily Watson',age:45}
    ]
};

console.log(book4);
console.log(book5);
console.log(book6);

console.log('-------=======-------');

// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують
// сутніть "користувач". Поля: name, username,
//     password. Вивести в консоль пароль кожного
// користувача


let users = [
    {name:'Aleks',username:'sasha', password: 123},
    {name:'Ivan',username:'johny', password: 'qweasd'},
    {name:'Aleksandr',username:'alex', password:'asd123'},
    {name:'Anya',username:'pink', password: 123321},
    {name:'Petro',username:'pedro', password: 'sd123sd'},
    {name:'Oleg',username:'doberman', password: 777123777},
    {name:'Oksana',username:'xena', password: 'xena123'},
    {name:'Tanya',username:'tt-123', password: 123123},
    {name:'Vitaliy',username:'vitya', password: 'QqQ123WwW'},
    {name:'Sergiy',username:'serjjj', password: 110000011},
]

console.log(users);

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9]['password']);

console.log('-------=======-------');

// #coYydZuaeEB
// - описати масив, в якому буде зберігатись
// інформація про температуру вранці, вдень
// і ввечері за термін в 7 днів. Як зробити
// цей масив - вам потрібно подумати.
//     Нормальних варіантів опису - 2. Варіант,
//     коли в вас буде одновимірний масив
// з 21 значенням вичключаємо одразу


let dayTemp = [
    ['monday',['morning',3],['afternoon',17],['evening',5]],
    ['tuesday',['morning',13],['afternoon',27],['evening',15]],
    ['wednesday',['morning',7],['afternoon',12],['evening',6]],
    ['thursday',['morning',5],['afternoon',7],['evening',3]],
    ['friday',['morning',13],['afternoon',17],['evening',7]],
    ['saturday',['morning',4],['afternoon',11],['evening',9]],
    ['sunday',['morning',11],['afternoon',27],['evening',8]],
];

console.log(dayTemp);

console.log(dayTemp[0][0]); // monday
console.log(dayTemp[0][1][0]); // morning
console.log(dayTemp[0][1][1]); // 3

console.log(dayTemp[4][0]); //friday
console.log(dayTemp[4][2][0]); // afternoon
console.log(dayTemp[4][2][1]); //17

console.log('===================');

dayTemp = [
    {
        day: 'monday',
        morning : 3,
        afternoon: 17,
        evening:5
    },
    {day:'tuesday',morning: 13,afternoon: 17, evening: 9},
    {day:'wednesday',morning: 3,afternoon: 11, evening: 6},
    {day:'thursday',morning: 11,afternoon: 19, evening: 3},
    {day:'friday',morning: 3,afternoon: 10, evening: 7},
    {day:'saturday',morning: 13,afternoon: 17, evening: 4},
    {day:'sunday',morning: 10,afternoon: 14, evening: 5},
]

console.log(dayTemp);
console.log(dayTemp[0]['day']);
console.log(dayTemp[0].morning);
console.log('---');
console.log(dayTemp[6].day);
console.log(dayTemp[6].evening);

console.log('===================');

dayTemp = [
    {
        day: 'monday',
        time:{
            morning : 3,
            afternoon: 17,
            evening:5
        }
    },
    {day:'tuesday',time:{morning: 13,afternoon: 17, evening: 9}},
    {day:'wednesday',time:{morning: 3,afternoon: 11, evening: 6}},
    {day:'thursday',time:{morning: 11,afternoon: 19, evening: 3}},
    {day:'friday',time:{morning: 3,afternoon: 10, evening: 7}},
    {day:'saturday',time:{morning: 13,afternoon: 17, evening: 4}},
    {day:'sunday',time:{morning: 10,afternoon: 14, evening: 5}},
]
console.log(dayTemp[0].day);
console.log(dayTemp[0].time['morning']);

console.log('===================-------------=================');




