


let obj = {
    id:1,
    name: 'Ivan',
    // age:28
    age:16
}

let acces;
if (obj.age > 18){
    acces = 'Yes';
}else {
    acces='No';
}
console.log(acces);

console.log('---');

acces = obj.age > 18 ? 'Yes' : 'No';
console.log(acces);