

let user = {
    name: 'qwe',
    age:15
}
console.log(user);
let user1 = {...user};
user1.status = true;
console.log(user1);
let user2 = JSON.parse(JSON.stringify(user));
console.log(user2);
user2.status = false;
console.log(user2);

console.log('---');

let age = 28;

let welcome = age > 18 ? 'adult' : 'cartoon';
console.log(welcome);

console.log('---');

// if (true) {
//     if (true) {
//         if (true) {
//
//         }
//     }
// }
// ящо три і більше іф - то краще використовувати світч

console.log('---');
/*
==-порівнює значення
===-порівнює ще й тип який ви зазначили*/



let person = {
    name: 'Ivan',
    age:23
}

