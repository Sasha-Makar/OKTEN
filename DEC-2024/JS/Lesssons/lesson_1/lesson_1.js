// console.log(22);
//
//
// let h1 = document.querySelector('h1');
//
// h1.innerText = 'Okten';
//
// let p = document.createElement('p');
// let msg = 'lorum ipsum'
// p.innerText = msg;
// document.body.append(p);
//
// console.log('=================');
//
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// let name = document.querySelector('.name');
// for (const user of users) {
//     let li = document.createElement('li');
//     li.innerText = user.name;
//     name.append(li);
// }

// let name = document.querySelector('.name');
// fetch('https://jsonplaceholder.typicode.com/users').
// then(value => value.json()).
// then(users => {
//     for (const user of users) {
//         let li = document.createElement('li');
//         li.innerText = user.name;
//         name.append(li);
//     }
// })


navigator.geolocation.getCurrentPosition(position => console.log(position));

navigator.mediaDevices.getUserMedia({video:true}).
then(stream =>{
    let video = document.getElementById('video');
    video.srcObject = stream;
    video.play();
})