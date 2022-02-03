const products = [
    { name: 'laptop', price: 43000 },
    { name: 'shirt', price: 500 },
    { name: 'laptop', price: 3680 },
    { name: 'laptop', price: 55000 }
]
//defult vabe man tkbe
let totalPrice = 0;

//সব গুলা products থেকে যখন একটা product  নিব তখন
for (const product of products) {
    totalPrice = totalPrice + product.price;
}
// console.log(totalPrice)

const cart = [
    { name: 'laptop', price: 43000, quality: 1 },
    { name: 'shirt', price: 500, quality: 8 },
    { name: 'watch', price: 3680, quality: 3 },
    { name: 'phone', price: 55000, quality: 1 }
];
let cartTotal = 0;
for (const product of cart) {
    console.log(product);
    const productTotal = product.price * product.quality;
    cartTotal = cartTotal + productTotal;

}
console.log(cartTotal)
