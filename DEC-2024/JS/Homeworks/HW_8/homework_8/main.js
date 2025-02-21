// 1
// #AiN5CoUQ
// Створити функцію, яка робить
// глибоку копію об'єкту.
// Додати перевірки на undefined,
// null, NaN.
// Подумати і реалізувати логіку,
// в якій кінцевий об'єкт буде мати
// функції,які в нього були до
// цього моменту.


function clone(obj) {
    if (obj === null || obj === undefined || Number.isNaN(obj)) {
        return obj;
    }

    const functions = {};

    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            functions[key] = obj[key];
        }
    }

    let parse = JSON.parse(JSON.stringify(obj));
    for (const key in functions) {
        parse[key] = functions[key];
    }

    return parse;
}

let user = {
    name: 'qwe',
    age: 31,
    foo() {
        console.log('foo-execute function#1');
    },
    bar() {
        console.log('bar-execute function#2');
    },
};

console.log(user);
console.log('*******');

let clonedUser = clone(user);
console.log(clonedUser);
console.log('---');
clonedUser.foo(); // 'foo'
clonedUser.bar(); // 'bar'

// function clone(obj) {
//     if (obj) {
//         const functions = [];
//         for (const key in obj) {
//             // console.log(typeof obj[key]);
//             if (typeof obj[key] === 'function') {
//                 let functionsClone = obj[key].bind({});
//                 functions.push({functionsClone, key});
//             }
//         }
//         console.log(functions);
//         let parse = JSON.parse(JSON.stringify(obj));
//         for (const func of functions) {
//             parse[func.key] = func.functionsClone;
//         }
//         console.log(parse);
//
//         return parse;
//
//     }
//
//     throw new Error('!!!!!!!');
// }


// let user = {
//     name: 'qwe',
//     age: 31,
//     foo() {
//         console.log('foo');
//     },
//     bar() {
//         console.log('bar');
//     },
// }
// let clone1 = clone(user);
// console.log(clone1);
// clone1.foo();



// 2
// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
{title: 'JavaScript Complex', monthDuration: 5},
{title: 'Java Complex', monthDuration: 6},
{title: 'Python Complex', monthDuration: 6},
{title: 'QA Complex', monthDuration: 4},
{title: 'FullStack', monthDuration: 7},
{title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент
// на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомоги інлайн
// конструкції

let map = coursesAndDurationArray.map((item, ind) => ({id:ind +1,...item}));
console.log(map);













