



function foo(count=1) {
    if (count <= 100){
        console.log('foo- ' + count);
        foo(count+1);
    }
    return 'End';
}
foo();


console.log('--------');

function iterator(arr,i) {
    console.log(arr[i]);
    i++;
    if (i < arr.length) {
        iterator(arr, i);
    }
}

iterator([11, 22, 33, 44, 55],0);


console.log('------------');


// function flatter(arr) {
//     let innerArr = [];
//     for (const item of arr) {
//         if (Array.isArray(item)) {
//             flatter(item);
//         } else {
//             innerArr.push(item);
//         }
//     }
//         return innerArr;
// }
//
//
// let arr = [11,22,33,44,[55,66],77]//=>[11,22,33,44,55,66,77]
// let flatter1 = flatter(arr);
// innerArr = flatter1;
// console.log(innerArr);



let innerArr = [];
let arr = [11,22,33,44,[55,66],77,[11,2,[3,33,333],7],10]//=>[11,22,33,44,55,66,77]

function flatter(arr) {
    for (const item of arr) {
        if (Array.isArray(item)) {
            flatter(item);
        } else {
            innerArr.push(item);
        }
    }
}

flatter(arr);
console.log(innerArr);


