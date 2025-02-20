

let user = {
    name: 'qwe',
    age:31,
    skills: ['html', 'js'],
}

// let userCopy = {...user};
// console.log(userCopy === user);
// console.log(userCopy);
// console.log(userCopy.skills === user.skills);

//by means of structuredClone///////////

// let userCopy = structuredClone(user);
// console.log(userCopy);
// console.log(userCopy.skills === user.skills);


///by means of JSON

let userCopy = JSON.stringify(user);
let parseUserCopy = JSON.parse(userCopy);
console.log(parseUserCopy);

console.log(parseUserCopy === user);
console.log(parseUserCopy.skills === user.skills);

// by means of assign

let copy = Object.assign(user);
console.log(copy);
console.log(copy === user);
console.log(copy.skills === user.skills);