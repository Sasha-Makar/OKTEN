let products = JSON.parse(localStorage.getItem('cart'));
console.log(products);

let productsDiv = document.getElementsByClassName('products')[0];
// console.log(productsDiv);


for (const product of products) {
    let productBlock = document.createElement('div');

    let h2 = document.createElement('h2');
    h2.innerText = `${product.title} - ${product.price} UAH`;

    let img = document.createElement('img');
    img.src = product.image;

    productBlock.append(h2,img);

    productsDiv.appendChild(productBlock);
}