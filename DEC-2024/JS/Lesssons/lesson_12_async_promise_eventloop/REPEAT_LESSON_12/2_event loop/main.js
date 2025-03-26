// setTimeout(() => console.log('qwe111'), 1000);
//
//
// console.log('log1');
//
// setTimeout(function () {
//     console.log('qwe222');
// }, 1000);
//
// console.log('log2');
//
// setTimeout(()=>{
//     console.log('asd333');
// },100);
//
// console.log('log3');


// let i = 0;
//
// while (i < 5) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000)
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




