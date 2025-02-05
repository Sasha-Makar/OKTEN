// #ruUtWDUI
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати
//  3 слова які являються вашими Імям, По-Батькові
//  та роками. та вивести в консоль


let firstName = prompt("Введіть ваше ім'я");
let  middleName = prompt('Введіть ваше По-Батькові');
let age = prompt('Ведіть ваш вік');

let person = firstName + ' ' + middleName + ' ' + 'вам' + ' ' + age + ' ' + 'роки';
console.log(person);

console.log('==========');

person = `${firstName} ${middleName} вам ${age} роки`;
console.log(person);

console.log('===========');

alert(firstName + ' ' + middleName + ' ' + '\n' + 'вам' + ' ' + age + ' ' + 'роки');