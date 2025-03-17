// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users=> console.log(users))



// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users=> {
//         for (const user of users) {
//             fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id)
//                 .then(response => response.json())
//                 .then(postsOfIteratedUser =>{
//                     user.post = postsOfIteratedUser;
//                 })
//             console.log(user);
//         }
//     })


let users = fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json());
let posts = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json());

// Promise.all([users, posts]).then(result => {
//     console.log(result)
//
//     let usersArr = result[0];
//     let postsArr = result[1];
//
//     console.log(usersArr);
//     console.log(postsArr);
//
//
// });

// Promise.all([users,posts]).then(result=>{
//     let [users,posts] = result;
//     console.log(users);
//     console.log(posts);
//
//     for (const user of users) {
//         user.post = [];
//         for (const post of posts) {
//             if (user.id === post.userId) {
//                 user.post.push(post);
//             }
//         }
//     }
//     console.log('--------');
//     console.log(users);
// })

// Promise.race([users,posts]).then(result=> console.log(result))

Promise.any([users,posts]).then(result=> console.log(result))