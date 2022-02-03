const phones = [
    { name: 'samsung s5', price: 4500, camera: 10, storage: 32 },
    { name: 'walton m2', price: 15000, camera: 8, storage: 8 },
    { name: 'showmi m3', price: 12000, camera: 8, storage: 16 },
    { name: 'oppo a2', price: 17000, camera: 10, storage: 32 },
    { name: 'nokia n95', price: 8000, camera: 8, storage: 4 },
    { name: 'htc h81', price: 2500, camera: 8, storage: 16 }
];
let chepest = phones[0];
//সবগুলা phones  থেকে একটা phone নিবা for of ()
for (const phone of phones) {
    //যদি ফোন দাম সস্তার থকে ছটু হয় 
    if (phone.price < chepest.price) {
        chepest = phone;
    }
}
console.log(chepest)

