// console.log(23);

let arr = [1, 2, 3, 4, 5, 6, 7, -11, 0, 3];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num < min) {
        min = num;
    }
}
console.log(min);

console.log('=========');


let ar = [];
// let x = 2;
// for (let i = 0; i < 50; i++) {
//     ar[i] = x;
//     // x = x + 2;
//     x = +2;
// }
// console.log(ar);

// let ar = [];
// let x = 1;
// for (let i = 0; i < 50; i++) {
//     ar[i] = x;
//     x += 2;
// }
// console.log(ar);


for (let i = 0,x=1; i <50 ;x++, i++) {
        arr[i] = x;
}
console.log(arr);


let arr2 = [1, 2, 3, 4, 5, 6, 9];//1 3 5

for (let i = 0; i < arr2.length; i++) {
    // let num = arr2[i];
    if (arr2[i + 1]%2===0){
        console.log(arr[i]);
    }

}