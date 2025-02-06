

let user = {
    id:11,
    name:'sveta'
}

console.log(user);

user.age = 33;

console.log(user);

user['status'] = true;

console.log(user);


delete user['age'];
console.log(user);

delete user.name;
console.log(user);