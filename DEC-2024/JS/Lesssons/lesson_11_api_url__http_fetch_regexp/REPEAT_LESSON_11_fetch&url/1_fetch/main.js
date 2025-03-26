fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => console.log(users))
console.log('========================');


fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(({products}) => console.log(products))