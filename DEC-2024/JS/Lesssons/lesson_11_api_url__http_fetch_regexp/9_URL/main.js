

// fetch('https://jsonplaceholder.typicode.com/comments?postId=7')
//     .then(value => value.json())
//     .then(value => console.log(value))

let url = new URL('https://jsonplaceholder.typicode.com/posts');
// url.searchParams.append()
url.searchParams.set('userId', 7);
fetch(url)
    .then(value => value.json())
    .then(value => console.log(value))