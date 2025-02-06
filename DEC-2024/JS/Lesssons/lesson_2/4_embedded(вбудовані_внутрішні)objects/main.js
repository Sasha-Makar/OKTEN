



user1 = {
    id:1,
    name:'vasya',
    age:33,
    skills: ['html', 'js', 'java'],
    wife:{
        name: 'olya',
        age:33
    }
}

console.log(user1);
console.log(user1['id']);
console.log(user1.skills);
console.log(user1.skills[1]);
console.log(user1.skills[0]);

console.log(user1.wife);
console.log(user1.wife.name);
console.log(user1.wife['age']);