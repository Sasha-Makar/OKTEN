

function userFactory(id,name,age,status) {
    let user = {
        id : id,
        name : name,
        age:age,
        status:status,
    }
    return user;
}

let user1 = userFactory(1, 'kokos', 33, true);
let user2 = userFactory(2, 'abrikos', 17, false);
let user3 = userFactory(3, 'cucumber', 77, true);

console.log(user1);
console.log(user2);
console.log(user3);