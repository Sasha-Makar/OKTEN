console.log('async await');
console.log('========================');




// function foo() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response =>response.json())
//         .then(users => console.log(users))
//
//
// }
//
// foo()

async function foo() {
   let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    console.log(users);
    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());
    console.log(posts);
}

foo();