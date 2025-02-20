let user = {
    firstName: 'qweasd',
    lastName: 'asdzxcv',
    age: 77,
}

console.log(user);

user.firstName = 'Petya';

for (const userKey in user) {
    console.log(userKey);
}

console.log('*******');

Object.defineProperty(
    user,
    'id',
    {
        value:100500,
        enumerable:false,
        writable:false,
        configurable:false
    }
)


try {
    console.log(user);

    Object.defineProperty(
        user,
    )
} catch (e) {
    console.log(e);
}