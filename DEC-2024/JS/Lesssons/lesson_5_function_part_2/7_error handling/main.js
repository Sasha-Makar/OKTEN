






// console.log('start');
// try {
//     console.log(a);
// }catch (e) {
//     console.log(e);
// }
//
// console.log('end');

// console.log('start');
// try {
//     console.log(a);
// } catch (e) {
//     console.error(e);
// } finally {
//     console.log('finally');
// }
// console.log('end');

console.log('start');
try {
    console.log('not error');
} catch (e) {
    console.error(e);
} finally {
    console.log('finally');
}
console.log('end');


console.log('-------');

function calc(a,b) {
    if (b===0){
        throw new Error('b = 0');
    }
    return a / b;


}


console.log(calc(100, 0));