let url = new URL('https://jsonplaceholder.typicode.com/posts');

url.searchParams.set('userId', 1);





fetch(url)
    .then(response => response.json())
    .then(posts => console.log(posts))

