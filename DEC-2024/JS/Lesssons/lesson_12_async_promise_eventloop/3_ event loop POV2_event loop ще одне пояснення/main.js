
// function run(i) {
//     console.log(i);
// }
//
// let i = 1;
// while(i <= 10){
//     run(i);
//     i++;
// }


// setTimeout(() => {
//     console.log('asd');
// }, 1000);
//
// setTimeout(() => {
//     console.log('qweasdf');
// }, 200);
//
//
// let i =0;
// while (i < 5) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
//     i++;
// }


let i = 0;
while (i < 5) {
    run(i);
    i++;
}

function run(i) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}