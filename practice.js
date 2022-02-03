//additional
function multipleTowNum(num1, num2) {
    const multiple = num1 * num2;
    return multiple;
}
const total = multipleTowNum(7, 9)
console.log(total)

//multiplication
function addTowNumber(number1, number2) {
    const sum = number1 + number2;

    return sum;
}

const total = addTowNumber(32, 8);
console.log(total)




const cart = [
    { name: 'laptop', price: 43000, quality: 1 },
    { name: 'shirt', price: 500, quality: 8 },
    { name: 'watch', price: 3680, quality: 3 },
    { name: 'phone', price: 55000, quality: 1 }
];
let cartTotal = 0;
for (const product of cart) {
    console.log(product)
    const productTotal = product.price * product.quality;
    cartTotal = cartTotal + productTotal
}
console.log(cartTotal)