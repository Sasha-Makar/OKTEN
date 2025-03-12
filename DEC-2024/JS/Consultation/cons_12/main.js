// "У відео АРI p3, Ви пояснювали як витягнути дані з бази для мобільних додатків,
// і сказали шо вона призводить до якогось калапсу, можете сказати до якого, можливо ви казали до якого але я не зрозумів шо це саме він
// рs якшо треба вi̟део i з якогоÏ Xв то ось https://youtu.be/aFmTxEqBX50?si=LuW8liy3A5DfsNNc&t=306"
// "Чи є якась різниця як деструктурувати масив об'єктів з фету запиту? Правильніше зробити це в самому запиті чи вже після присвоїти у змінну?
//
// Наприклад:
//
// fetch('https://dummyjson.com/recipes')
// .then(res => res.json())
// .then(({recipes})=>{ I
// console.log(recipes)
// });
//
// чи
//
// fetch('https://dummyjson.com/recipes')
// .then(res => res.json())
// .then(recipesObj=>{
// const {recipes} = recipesObj;
//
// console.log(recipes)
// });
//
//
// Також питання по вкладених масивах у об'єкті, чи потрібно робити перевірку наприклад
// що тип наступного значення об'єкту це масив то тільки тоді потрібно робити вкладений цикл, чи коли у нас дані перед очима і,
// ми і так бачимо що в об'єкті є масив то потрібно одразу без перевірки застосовувати вкладений цикл?



// "Питання таке якщо у нас є такий об'єкт
// let z = {
//     "id": 9,
//     "name": "Glenna Reichert",
//     "username": "Delphine",
//     "email": "Chaim McDermott@dana.io",
//     "address": {
//         "street": "Dayna Park",
//         "Suite" : "Suite 449",
//         "city": "Bartholomebury",
//         "zipcode": "76495-3109",
//         "geo": {
//             "lat": "24.6463",
//             "lng": "-168.8889"
//         }
//     },
//     "phone": "(775)976-6794 x41206",
//     "website": "conrad.com",
//     "company": {
//         "name": "Yost and Sons",
//         "catchPhrase": "Switchable contextually-based project",
//         "bs": "aggregate real-time technologies"
//     }
// }
//, я його ітерую циклом for in для адреси та комапнії створюю список але в адресі є
// обєкт део і він в мене виводиться як geo:object object як це обійти
// for (const userKey in user) {
// if (typeof user [userKey] === "object" && ! Array.isArray (user [userKey])) {
// 1/ for (const userInnerElementKey in user [userKey]) {
// if (typeof user [userKey] [userInner ElementKey] === "object" && !Array.isArray (user [userKey] [userInnerElementKey])) {
//
// }
//
// }
