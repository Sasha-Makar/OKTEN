console.log('qwe');

let user2 = new User('petya', 72);

user2.greeting = function (msg) {
    return  msg + ' my name is ' + this.name;
}
console.log(user2);
console.log(user2.greeting('hello'));

//
// let user3 = new User('olena', 12);
// console.log(user3);
// try {
//     user3.greeting();
// } catch (e) {
//     console.log(e);
// }
// console.log('--------------');
//

// console.log('prototype');

// User.prototype.greeting = function () {
//     console.log('hello my name is ' + this.name);
// }
//
// let user4 = new User('qweasd', 78787878);
// user4.greeting();


let user5 = new User('abra', 77);
//aplly
// console.log(user2.greeting.apply(user5,['hi']));
//call
// console.log(user2.greeting.call(user5, 'olla'));
//bind
// let userCopyGreeting = user2.greeting.bind(user5, 'pryvit');
// console.log(userCopyGreeting());
let userCopyGreeting = user2.greeting.bind(user5);
console.log(userCopyGreeting('pelojwopjgwopjgw'));
console.log('scr - 2');