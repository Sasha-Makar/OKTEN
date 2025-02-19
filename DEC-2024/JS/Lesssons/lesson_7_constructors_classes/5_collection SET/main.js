let set = new Set();

set.add('qwe');
set.add('asd');
set.add('zxc');
set.add('qwe');

console.log(set);

console.log(set.has('zxc'));
set.delete('zxc');
console.log(set);
console.log(set.size);

set.forEach(value => console.log(value));

let setArr = Array.from(set);
console.log(setArr);

let setArr2 = [...set];
console.log(setArr2);


console.log('-----');


let set1 = new Set([11, 22, 33, 44, 55, 44, 66, 77, 66, 88, 55, 99, 11, 100]);
console.log(set1);
let arrNum = [...set1];
console.log(arrNum);


