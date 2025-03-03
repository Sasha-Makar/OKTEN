// localStorage.setItem('asd', 'qwe');
// localStorage.clear();

// let item = localStorage.getItem('asd');
// console.log(item);

// localStorage.clear();


// localStorage.setItem('user', JSON.stringify({name: 'asia', status: true}));
// let userString = localStorage.getItem('user');
// console.log(userString);
//
// let userParse = JSON.parse(userString);
// console.log(userParse);
// userParse.id = 1;
// console.log(userParse);
// localStorage.setItem('user', JSON.stringify(userParse));


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

localStorage.setItem('users', JSON.stringify(users));
let usersString = localStorage.getItem('users');
console.log(usersString);

let usersParse = JSON.parse(usersString);
console.log(usersParse);

usersParse.push({sss: 'sss'});
console.log(usersParse);


localStorage.setItem('users', JSON.stringify(usersParse));