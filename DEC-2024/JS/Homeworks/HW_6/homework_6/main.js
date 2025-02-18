// 1
// #dFeorS3m7u
// - Знайти та вивести довижину
// настипних стрінгових значень
// 'hello world', 'lorem ipsum',
// 'javascript is cool'
console.log('hello world'.length);//11
console.log('lorem ipsum'.length);//11
console.log('javascript is cool'.length);//18

console.log('=============');

// 2
// #8lld9HMxXWB
// - Перевести до великого регістру
// наступні стрінгові значення
// 'hello world', 'lorem ipsum',
// 'javascript is cool'

console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

console.log('=============');

// 3
// #ClDsAm7xba7
// - Перевести до нижнього регістру
// настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM',
// 'JAVASCRIPT IS COOL'

console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

console.log('=============');

// 4
// #0b89BkYZwu
// - Є "брудна" стрінга
// let str = ' dirty string   ' .
// Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let cleanStr = str.trim();
console.log(cleanStr);
console.log(cleanStr.length);

console.log('---');

console.log(str);
console.log(str.length);

console.log('=============');

// 5
// // #bfoJuse4ZzP
// // - Напишіть функцію stringToarray(str),
// // яка перетворює рядок на масив слів.
// // let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str);
// // ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let string = 'Ревуть воли як ясла повні';
let stringToArray = str => {
    return str.split(' ');
}
let arr = stringToArray(string);
console.log(arr);

console.log('=============');

// 6
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0].
// за допомоги map  перетворити всі об'єкти в
// масиві на стрінгові.

let strings = [10, 8, -7, 55, 987, -1011, 0, 1050, 0].map(value => {
    return value.toString();
});
// let strings = [10, 8, -7, 55, 987, -1011, 0, 1050, 0].map(value => value + '');

console.log(strings);
console.log(typeof strings[0]);

console.log('=============');

// 7
// #5hqyKTfmc
// - створити функцію sortNums(array,direction),
// яка прймає масив чисел, та сортує його від
// більшого до меньшого, або навпаки в
// залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

//через if
// let sortNums = (array, direction) => {
//     if (direction === 'ascending') {
//         return array.sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//         return array.sort((a, b) => b - a);
//     }
// }
//через switch
let sortNums = (array, direction) => {
    switch (direction) {
        case 'ascending':
            return array.sort((a, b) => a - b);
        case 'descending':
            return array.sort((a, b) => b - a);
        default:
            return 'error';
    }
}
nums = [11, 21, 3];
console.log(nums);
console.log('---');
let sortNums1 = sortNums(nums, 'ascending');
console.log(sortNums1, 'ascending');

let sortNums2 = sortNums(nums, 'descending');
console.log(sortNums2, 'descending');

console.log('=============--------==================');
console.log('=============--------==================');
console.log('=============--------==================');

// 8
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням
// за monthDuration
// -- відфільтрувати , залишивши тільки
// курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен
// елемент на наступний тип
// {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortCourses = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sortCourses);
let filterCourses = sortCourses.filter(value => value.monthDuration > 5);
console.log(filterCourses);

// let mapCoursesToId = filterCourses.map((value, index) => ({...value, id: index + 1}));

let mapCoursesToId = filterCourses.map((value, index) => ({
    id: index + 1,
    title: value.title,
    monthDuration: value.monthDuration
}))
console.log(mapCoursesToId);

console.log('=============');

// 9
// #bolvdlhP
// описати колоду карт
// (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

let value = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'Ace'];
// console.log(value);
let cardSuite = [
    {suit: 'spade', color: 'black'},
    {suit: 'diamond', color: 'red'},
    {suit: 'heart', color: 'red'},
    {suit: 'clubs', color: 'black'}
];
// console.log(cardSuite);
let deckOfCards = [];
value.forEach(value => {
    cardSuite.forEach((item) => {
        deckOfCards.push({
            value: value,
            cardSuite: item.suit,
            color: item.color
        })
    })
});
console.log(deckOfCards);

console.log('-------');

// - знайти піковий туз
let findSpadeAce = deckOfCards.find((value) => value.cardSuite === 'spade' && value.value === 'Ace');
console.log(findSpadeAce);

console.log('-------');

// - всі шістки
let filterAllSix = deckOfCards.filter(card => card.value === '6');
console.log(filterAllSix);

console.log('-------');

// - всі червоні карти
let redCards = deckOfCards.filter(card => card.color === 'red');
console.log(redCards);

console.log('-------');

// - всі буби
let diamondsCard = deckOfCards.filter(card => card.cardSuite === 'diamond');
console.log(diamondsCard);

console.log('-------');

// - всі трефи від 9 та більше
let clubsCard = deckOfCards.filter(card => card.cardSuite === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'Ace'].includes(card.value));
console.log(clubsCard);

console.log('=============');
console.log('=============');

// 10
// #EP5I1UUzAX
// Взяти описану колоду карт, та за
// допомоги reduce упакувати всі
// карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

console.log(deckOfCards);

let reduce = deckOfCards.reduce((acc, deck)=>{
    if (deck.cardSuite === 'spade') {
        acc.spades.push(deck);
    }else if (deck.cardSuite === 'diamond') {
        acc.diamonds.push(deck);
    }else if (deck.cardSuite === 'heart') {
        acc.hearts.push(deck);
    }else if (deck.cardSuite === 'clubs') {
        acc.clubs.push(deck);
    }
    return acc;
},{spades:[],diamonds:[],hearts:[],clubs:[]});
console.log(reduce);

console.log('=============');
console.log('=============');

// 11
// #4LJn7zBx
// взяти з arrays.js масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в яких
// в modules є sass
let filterSaas = coursesArray.filter(value => value.modules.includes('sass'));
console.log(filterSaas);

// --написати пошук всіх об'єктів, в яких
// в modules є docker

let filterDocker = coursesArray.filter(value => value.modules.includes('docker'));
console.log(filterDocker);


console.log('=========----END-----=======');





