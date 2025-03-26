let products = [
    {
        title: 'milk',
        price: 30,
        image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/milk-dairy/taste-teach_prodcatcard.png?sfvrsn=fb05538d_2'
    },
    {
        title: 'juice',
        price: 28,
        image: 'https://img.freepik.com/free-vector/illustration-juce-glass_250435-779.jpg?auto=format&h=200'
    },
    {
        title: 'tomato',
        price: 45,
        image: 'https://img.freepik.com/free-vector/set-realistic-full-sliced-tomatoes-vectors_1441-834.jpg?auto=format&h=200'
    },
    {
        title: 'tea',
        price: 25,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSonQ8OD5ZbGBe7c9XolRfXgQjvPU5iFvIwOQ&usqp=CAU'
    }
];

console.log(products);


let productsDiv = document.querySelector('.products');
console.log(productsDiv);


for (const product of products) {

    let productBlock = document.createElement('div');
    productBlock.style.width = '250px';
    productBlock.style.margin = '30px';
    productBlock.style.border = '2px solid';

    let titlePrice = document.createElement('h2');
    titlePrice.innerText = `Title-${product.title}. Price-${product.price}`;

    let image = document.createElement('img');
    image.src = `${product.image}`;
    image.style.width = '200px';

    let btn = document.createElement('button');
    btn.style.display = 'block';
    btn.style.width = '250px';
    btn.innerText = 'add to cart';
    
    btn.onclick = function () {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

    }

    productBlock.append(titlePrice, image,btn);
    productsDiv.appendChild(productBlock);
}

let btnDemo = document.getElementsByClassName('demo')[0];
console.log(btnDemo);
btnDemo.onclick=()=>{
    window.open("cart demo/cart.html", "_blank");
}
