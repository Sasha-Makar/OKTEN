
let users = [
    {name: 'vasya', age : 31, status : false},
    {name: 'petya', age : 30, status : true},
    {name: 'kolya', age : 29, status : true},
    {name: 'olya', age : 28, status : false},
    {name: 'max', age : 30, status : true},
    {name: 'anya', age : 31, status : false},
    {name: 'oleg', age : 28, status : false},
    {name: 'andrey', age : 29, status : true},
    {name: 'masha', age : 30, status : true},
    {name: 'olya', age : 31, status : false},
    {name: 'max', age : 31, status : true}
];

// users.forEach(function (value,index,array) {
//     console.log(value);
//     console.log(index);
//     console.log(array);
//
// })

// users.forEach(function (value, index) {
//     console.log(value, index);
// });

users.forEach(value => console.log(value));

console.log('===============');

// let usersFiltered = users.filter(function (value) {
//     return value.age > 30;
// });
//
// console.log(usersFiltered);

let filter = users.filter(value => value.age > 30);
console.log(filter);

console.log('===============');


// let map = users.map(function (value, index) {
//     let newUsers = {
//         name:value.name,
//         age:value.age,
//         status: value.status,
//         id:index + 1
//     }
//     return newUsers;
//
// });
// console.log(map);
// console.log('---');
// console.log(users);

// let map = users.map(function (value, index) {
//     return  {
//         name:value.name,
//         age:value.age,
//         status: value.status,
//         id:index + 1
//     }
//
// });
// console.log(map);
// console.log('---');
// console.log(users);

// let map = users.map(function (value, index) {
//     return  {...value, id: index + 1}
// });
// console.log(map);
// console.log('---');
// console.log(users);

let map = users.map(function (value, index) {
  return {id:index+1,name:value.name,age:value.age, status: value.status}

});
console.log(map);
console.log('---');
console.log(users);

console.log('===============');

let find = users.find(value => value.name === 'max');
console.log(find);

console.log('===============');

let every = users.every(value => value.status);
console.log(every);
let some = users.some(value => value.status);
console.log(some);

console.log('===============');

let sortAge = users.sort((u1, u2) =>{
    return u1.age - u2.age;
} );
console.log(sortAge);

console.log('---');

let sortName = users.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    if (a.name === b.name) {
        return 0
    }
});
console.log(sortName);

console.log('===============');

let reduce = users.reduce((accum, user)=> {
    if (user.status) {
        accum.statusT.push(user);
    }else {
        accum.statusF.push(user);
    }
    return accum;
}, {statusT:[], statusF: []});
console.log(reduce);




