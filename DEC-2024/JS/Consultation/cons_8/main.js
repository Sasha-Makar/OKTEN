// // В яких випадках та коли використовувати круглі, квадратні та фігурні дужки?
//
//
// // let asd = 3 + (3 * 2);
// // function asd(a,b,c) {}
//
// //           0   1  2    3 ....
// let arr1 = [123, 123, 123, 123, 123, 13, 132, 132];
// let arr2 = [123, 123, 123, 123, 123, 13, 132, 132];
// console.log(arr1[0]);
//
// let obj = {
//     name: 'vasya'
// }
// let a = 100500;
//
// function asd() {
//
// }


// // "Подскажите пожалуйста почему когда я сделал функцию контсруктор:
// //
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// // и добавляю нового юзера
// //
// let user1 = new User(1, 'petya', 'koks', 'koksik@gmail.com', 123)
// //
// // и если я этому юзеру присвою три нуля(000) то выдаст ошибку а если поставлю один ноль то все будет работать, почему так?"


// "Делал вот это домашнее задание:

// //#zg6Fifnqig
// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// // Сторити об'єкт класу ""принц"" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// // За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// // Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//
// // и вот мое решение:
//
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// const cinderellas = [
//     new Cinderella('Маша', 18, 36),
//     new Cinderella('Оля', 20, 37),
//     new Cinderella('Катя', 19, 38),
//     new Cinderella('Даша', 21, 35),
//     new Cinderella('Лена', 22, 36),
//     new Cinderella('Аня', 17, 39),
//     new Cinderella('Юля', 23, 37),
//     new Cinderella('Света', 20, 38),
//     new Cinderella('Наташа', 19, 35),
//     new Cinderella('Ира', 21, 39)
// ];
//
// console.log(cinderellas);
//
// class Prince {
//     constructor(name, age, shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// }
//
// let prince = new Prince(" Filip ", 21, 39);
//
// // for (let cinderella of cinderellas) {
// //     if (cinderella.footSize === prince.shoeSize) {
// //         console.log(`Принц ${prince.name} знайшов свою Попелюшку! Це ${cinderella.name}, їй ${cinderella.age} років.`);
// //         break;
// //     }
// // }
//
// // у меня вопрос, почему в консоль  выводиться два результата если по идее оно должно было вывестись только (new Cinderella("Ира", 21, 39)) и следующий вопрос как тогда сделать чтобы выводилось только одно значение а не несколько сразу.


// "Завдання : Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
//
// Чи є даний запис правильним?(у багатьох відео-співбесідах у ютуб питають за цей метод глибокого копіювання)
//
// function copy(obj) {
//     return structuredClone(obj)
// }
//
// let user = {id: 10, age: 26};
// let userCopy = copy(user);


// // Для умовного об'єкту user з полями name, age
// // під час використання деструктора з витягуванням полів ми використовуємо запис
// let user = {name: 'asdas', age: 123};
// let {name, age} = user;
// // Тоді виникає питання, ось ці змінні name та age посилаються на одну комірку пам'яті чи умовно записуються як окремі
// // (let name, age, ... ; або ж let name; let age;)?
// let name, age;
// name = 'asdads';
// age = 123;

// розкажіть в яких ще випадках використовують на практиці "Елвіса одноокого",
// чи можна використовувати в функціях та масивах?


// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(value => value.json())
//     .then(user => {
//         let div = document.createElement('div');
//         div.innerHTML = user.xxx;
//         document.body.appendChild(div);
//
//     });


// let user = {};
// console.log(user.wife?.name);

// Поясніть чи є різниця при копіюванні за допомогою
// Spred and Object.assign і де який використовувати,
// якщо різниця існує?

// Object.assign();


// class Book {
//
//
//     constructor(pages, title, authors) {
//         this.pages = pages;
//         this.title = title;
//         this.authors = authors;
//     }
// }
//
// class Magazine extends Book {
//
//     constructor(pages, title, authors, pictures) {
//         super(pages, title, authors);
//         this.pictures = pictures;
//     }
// }

// питання по ітераціїю чи можливо проітерувати масив до середини?
// та як це зробити якщо об'єктів багато, через -500? чи є інший спосіб? та чи можливе таке, зо кількість об'єктів буде невідомою?

// for (let i = 0; i < Math.round(array.length / 2); i++) {
//     const arrayElement = array[i];
// }

// як відбувається процес перевірки наявності певного елемента у масиві цикл while?


// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
//

// let object = {
//     name: 'kokos',
//     ads: function () {},
//     qwe: function () {}
// }
//
// function cloner(obj) {
//     let arrayOfFunctioons = [];
//     for (const key in obj) {
//         if (typeof obj[key] === 'function') {
//             let colneOfFucntion = obj[key].bind({});
//             arrayOfFunctioons.push({key: key, func: colneOfFucntion});
//         }
//     }
//     let copyOfObject = JSON.parse(JSON.stringify(obj));
//     for (const fn of arrayOfFunctioons) {
//         copyOfObject[fn.key] = fn.func;
//     }
//     return copyOfObject;
// }
//
// let clone = cloner(object);
// console.log(clone);

// num = 511;
// console.log(Math.floor(num));
// console.log(Math.round(num));


