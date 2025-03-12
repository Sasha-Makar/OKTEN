// Чи могли б ви пояснити як між собою взаємодіють багато скриптових файлів,
// як правильно підключати різні js файли до html щоб не було колізій.


// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//     let choosen = 0;
//     for (const i of currencyValues) {
//         if (i.currency === exchangeCurrency) {
//             choosen = i
//         }
//     }
//     let result = sumUAH / choosen.value
//     return result
// }
//
// console.log(exchange(10000,
//     [
//         {currency: 'USD', value: 25},
//         {currency: 'EUR', value: 42}
//     ]
//     , 'USD'))
// Вітаю ,є питання   i.currency та choosen.value  я ж не писала  раніше  currency та value
// звідки програма знає що вони є вона ж їх одразу підсвічує  важко зрозуміти як вона
// розуміє  "

// function minNumber (arrayNum) {
// let min = arrayNum[0];
// for (let num of arrayNum) {
//     if (num < min) {
//         min  = num;
//     }
// }
// console.log(min);
// }
// const arrayNum = [130, 22, 20, -62, 55, -21, 98];
// minNumber(arrayNum);
//
// Чому програма виводить -62 як найменше число, хоча найменшим є -21 "


// // "в уроці про рекурсію  Ви сказали що може ""Вальнути ваш сервак за допомогою рекурсії"" що означає
//
//
// // розкажіть про infinity та push () як вони працюють "
// let arr = [111, 2222]
// // arr.push('asdkagdskh');
// // arr[2] = '';


// "Добрый день! Не совсем понимаю, что означает true в let clonNode = blockDiv.cloneNode(true);.
// Насколько я понял, оно копирует весь элемент вместе с его содержимым, включая текст. То есть, если я добавляю текст в blockDiv через blockDiv.textContent = ""Block"";, то cloneNode(true) должен скопировать этот текст в новый элемент и отобразить его.
// А если я уберу true, то скопируется только сам div, но без текста внутри. Всё ли я правильно понимаю?
//
//
// первое задание из 9-го урока."


// let divWrap4 = document.querySelectorAll('body .wrap1 .wrap2 .wrap3 .wrap4');
// divWrap4[0].innerText = 'asd'
// console.log(divWrap4);
//такот питання є структура html з 4 обгорток дів. я хочу знайти 4wrap. За допомогою
// способу нахдження querySelector я можу точно вказати шлях - body .wrap1 .wrap2 .wrap3 .wrap4.
// такот питання - якщо в мене величезний код і  під капотом пошук в head вже не повинно лізти в мене
//вказано body. Далі пошук доходить до .wrap1 і вже далі не повинен щитувати код, а це економить ресурсю
// далі - заходить в .wrap2 в ньому бігае шукає доки знайде .wrap3, пошук далі в низ не повинен бігти -відразу
//заходить в .wrap3 і так далі находить .wrap4.
//
// То чи правельно я описав чи воно  body  весь щитуе? а потім
//вертаеться до .wrap1, пототім таксамо щитуе весь .wrap1 і після цього вертається до .wrap2.....і так далі
//бо 1 варіант як я описав то це економить кучу ресурсу і querySelector виходить кращим ніж
// документ гет елемент бай айді томущо в ньому максимум я можу уточнити шлях це лише вказати боді.
// let xxx = document.getElementById('xxx');
// xxx.getElementsByClassName('wrap4')


//
// "1)Чи є сенс використовувати подію window.onload, якщо потрібно виконати певні дії при кожному
// відвідуванні або перезавантаженні сторінки, адже код і так працює без неї?
//
// 2)Чи завжди потрібно перевіряти, чи існує значення (наприклад, при введенні віку користувачем),
// і чи потрібно додавати додатковий if на випадок, якщо значення некоректне або відсутнє?
//
//     3)Чи є різниця в порядку виклику appendChild, тобто спочатку додавати основний div у body, а потім вкладені елементи в div, чи можна спочатку створити та наповнити div дочірніми елементами, а потім додати його в body?
//     Чи буде якась різниця в кінцевому результаті?"


// в каких случаях используем addEventListener и onclick
// document.onclick = function (e) {
//     console.log('1111');
// }
//
// // document.onclick = function (e) {
// //     console.log('2222222');
// // }
//
// document.addEventListener('click', function (e) {
//     console.log('2222222');
//
// })
//
// document.addEventListener('click', function (e) {
//     console.log('3333');
//
// }, true)

// Наприклад існують два якісь посилання з однаковим запитом .../cars але різними методами (get та post).
// Яким чином сервер розрізянє що це певний метод запиту?
// Чи при запиті обов'язково вказувати метод (крім стандартного)?


// // "1.Як результат фечового запиту винести в окрему змінну? Типу лет юзерс = фечовий запит? Чи так не можна
// // async function foobar(name) {
// //     let reslutFetch1 = await fetch('https://jsonplaceholder.typicode.com/users')
// //         .then(value => value.json());
// //
// //     let resultFetch2 = await fetch('https://jsonplaceholder.typicode.com/posts')
// //         .then(value => value.json());
// //
// //     return [reslutFetch1,resultFetch2];
// // }
//
// // 2. Покажіть будь ласка як побудувати гарну табличку з юзерами, за допомогою дівів, , в мене виходить так, що шапка( де назви колонок), їдуть, якась довга інформація не влазить, як зробити щоб саме та колонка, де не влазить, підлаштовувалась чи з'являвся скрол? Я роблю дівом, всередині ще два діви, з класом де є грід
//
//
// let wrap = document.getElementsByClassName('wrap')[0];
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// for (const user of users) {
//     let userContainer = document.createElement('div');
//     userContainer.className = 'user-container';
//     wrap.appendChild(userContainer);
//
//     for (const userKey in user) {
//         let divWithFieldValue = document.createElement('div');
//         divWithFieldValue.innerText = user[userKey];
//         userContainer.appendChild(divWithFieldValue);
//     }
// }


// // Чи правильно я зрозумів що асинхронні дії виконаються ТІЛЬКИ після того коли виконаються всі синхронні,
// // навіть якщо синхронні виконувалися набагато довше по часу?
// // Наприклад: Синхронна дія виконувалась хвилину, асинхронна 3 секунди. То все одно спочатку з'явиться синхронна дія і вже потім асинхронна?
//
// for (let i = 0; i < 10_000_000; i++) {
//     // console.log('.')
// }
// console.log('asdas1');
// setTimeout(() => {
//     console.log('gdsajahgsdjahgds')
// }, 0)
// console.log('asdas2');


// let form = document.forms[0];
// let output = document.getElementsByClassName("output")[0];
//
// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     let data = new FormData(this)
//     const {name, surename, age} = Object.fromEntries(data.entries());
//     output.innerText = `Name: ${name}\nSurname: ${surename}\nAge: ${age}`;
//     form.reset()
// })
//
// // Дуже сподобалася ця формдата. Але до кінця не розібрався як працює
// // Object.fromEntries(data.entries())  також працює просто Object.fromEntries(data) але почитавши зрозумів що треба писати 1 варіант. Які є ще способи збирання данних з інпутів крім Формдати і звичайного value"


// "Какие методы поиска элементов в DOM работают быстрее:
// getElementById, querySelector или getElementsByClassName?
//
// Как работать с динамически создаваемыми элементами в Forms API?
// Например, если input появляется после загрузки страницы?"

//     asd