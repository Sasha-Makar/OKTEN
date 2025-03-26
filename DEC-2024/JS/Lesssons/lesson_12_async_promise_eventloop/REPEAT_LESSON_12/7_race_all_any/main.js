// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         for (const user of users) {
//             fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id)
//                 .then(response => response.json())
//                 .then(value => {
//                     user.postS = value;
//                 })
//             console.log(user);
//         }
//     })

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then(users => {
//         for (const user of users) {
//             fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id)
//                 .then(value => value.json())
//                 .then(postsOfIteratedUser => {
//                     user.posts = postsOfIteratedUser;
//                 })
//             console.log(user);
//         }
//     })


let users = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());

let posts = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());

Promise.all([users,posts]).then(result=>{
    let [users,posts] = result;
    for (const user of users) {
        user.posts = [];
        for (const post of posts) {
            if (user.id === post.userId) {
                user.posts.push(post);
            }
        }
    }
    console.log(users);
})
