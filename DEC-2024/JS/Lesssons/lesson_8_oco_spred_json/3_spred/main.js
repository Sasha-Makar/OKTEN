
let user = {
    name: 'qwe',
    age:21
}

// let user2 = user;
// console.log(user2);
// console.log(user2 === user);
// console.log(user2);
//
// user2.age = 100;
// console.log(user);

let user2 = {...user};
console.log(user2);
console.log(user === user2);
user2.age = 100;
console.log(user2);
console.log(user);

console.log('===');

let numbers = [1, 2, 3, 4, 5, 6, 7];

let nums = [...numbers];
console.log(nums);
console.log(nums === numbers);
