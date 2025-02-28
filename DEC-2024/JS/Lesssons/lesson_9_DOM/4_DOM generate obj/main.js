let h2 = document.createElement('h2');
h2.innerText = 'hello okten';
document.body.appendChild(h2);





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

let divUsersAll = document.getElementsByClassName('users')[0];

for (const user of users) {
    let divUser = document.createElement('div');

    let pUser = document.createElement('p');
    pUser.innerText = user.name;

    let h3User = document.createElement('h3');
    h3User.innerText = user.status + ' ' + user.age;

    divUser.append(pUser, h3User);

    divUsersAll.appendChild(divUser);
}