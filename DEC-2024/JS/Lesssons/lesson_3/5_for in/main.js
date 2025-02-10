


let user = {
    id:1,
    name:'Vasya',
    age: 30,
    status : true
}

for (let fieldName in user) {
    // console.log(fieldName);
    // console.log(user[fieldName]);
    // console.log(user);
    console.log(fieldName, user[fieldName]);
}

console.log('================');


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

for (let user of users) {
    // console.log(user);
    for (let key in user) {
        console.log(key, user[key]);
    }
    console.log('===');
}


console.log('---====---');