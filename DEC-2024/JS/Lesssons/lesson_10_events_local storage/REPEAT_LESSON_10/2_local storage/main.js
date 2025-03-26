// localStorage.setItem('qwe', 'asd');
//
//
// let item = localStorage.getItem('qwe');
// console.log(item);
//
// localStorage.clear();
//
//
//
// localStorage.setItem('user',JSON.stringify({name:'vasya', age: 11}));
//
// let userStringify = localStorage.getItem('user');
// console.log(userStringify);
// let user = JSON.parse(userStringify);
// console.log(user);
// user.id = 1;
// console.log(user);
//
// localStorage.setItem('user', JSON.stringify(user));
//
// localStorage.clear();


// let users = [
//     {name: 'vasya', age : 31, status : false},
//     {name: 'petya', age : 30, status : true},
//     {name: 'kolya', age : 29, status : true},
//     {name: 'olya', age : 28, status : false},
//     {name: 'max', age : 30, status : true},
//     {name: 'anya', age : 31, status : false},
//     {name: 'oleg', age : 28, status : false},
//     {name: 'andrey', age : 29, status : true},
//     {name: 'masha', age : 30, status : true},
//     {name: 'olya', age : 31, status : false},
//     {name: 'max', age : 31, status : true}
// ];
//
// localStorage.setItem('users',JSON.stringify(users));


let usersJson = localStorage.getItem('users');
console.log(usersJson);

let users = JSON.parse(usersJson);
users.push({});
console.log(users);

localStorage.setItem('users', JSON.stringify(users));

localStorage.clear();
