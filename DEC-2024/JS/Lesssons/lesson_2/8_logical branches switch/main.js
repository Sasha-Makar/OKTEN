let color = prompt('enter color');
let isRoadClear = confirm('is road clear?');

// switch (color) {
//     case 'green':
//         console.log('go');
//         break;
//     case 'yellow':
//         console.log('wait');
//         break;
//     case 'red':
//         console.log('stop');
//         break;
//     default:
//         console.log('???????');
// }

switch (true) {
    case color === 'green' && isRoadClear:
        console.log('go');
        break;
    case color === 'green' && !isRoadClear:
        console.log('please wait');
        break;
    case 'yellow':
        console.log('wait');
        break;
    case 'red':
        console.log('stop');
        break;
    default:
        console.log('???????');
}

