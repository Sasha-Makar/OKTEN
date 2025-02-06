

if (true){
    console.log('stop');
}

console.log('---');

if (false){
    console.log('stop');
}

console.log('---');

let color = 'red';
if (color === 'red') {
    console.log('stop');
}

console.log('---');


// let age = +prompt('enter your age');
//
// if (age>=18){
//     console.log('adult');
// }else {
//     console.log('cartoon');
// }

console.log('===============');


color = prompt('enter color');

// if (color === 'red') {
//     console.log('stop');
// }else if (color === 'yellow') {
//     console.log('wait');
// }else if (color === 'green') {
//     if (confirm('is road clear?')){
//         console.log('go!');
//     }else {
//         console.log('just wait');
//     }
// }else {
//     console.log('???????');
// }

// if (color === 'red') {
//     console.log('stop');
// }else if (color === 'yellow') {
//     console.log('wait');
// }else if (color === 'green' && confirm('is road clear?')) {
//         console.log('go!');
// }else {
//     console.log('???????');
// }

if (color === 'red') {
    console.log('stop');
}else if (color === 'yellow') {
    console.log('wait');
}else {
    let isRoadClear = confirm('is road clear?');
    if (color === 'green' && isRoadClear) {
        console.log('go!');
    }else {
        console.log('???????');
    }
}