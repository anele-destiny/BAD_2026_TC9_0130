//(a) Seconds Converter
console.log("Seconds Converter");
const totalSeconds = 98765;
const days = Math.floor(totalSeconds / 86400);
const hours = Math.floor((totalSeconds % 86400) / 3600);
const minutes = Math.floor((totalSeconds % 3600) / 60);
const seconds = totalSeconds % 60;

console.log(`(a) ${days} day, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

//(b) Shop Total Calculator
console.log("\n ===== Shop Total Calculator =====");
let total = 0;
total += 45; // Add item 1
total += 30; // Add item 2
total += 25; // Add item 3
console.log(`Subtotal: $${total}`);

total -= total * 0.10; // Apply 10% discount
console.log(`After 10% Discount: $${total}`);

total += total * 0.075; // Add 7.5% VAT
console.log(`After 7.5% VAT: $${total}`);

let splitBill = total / 3; // Split equally between 3 people
console.log(`Final Split per Person (3 people): $${splitBill.toFixed(2)}`);

//(c) Step-by-Step Operator Predictions
console.log("\n=====(c) Operator Step Predictions =====");
let x = 5;
console.log("Initial x:", x);
x++;   // x becomes 6
console.log("After x++:", x);
x **= 2; // x becomes 36 (6 squared)
console.log("After x **= 2:", x);
x %= 7;  // x becomes 1 (36 modulo 7 -> 35 remainder 1)
console.log("After x %= 7:", x);
x -= 1;  // x becomes 0
console.log("After x -= 1:", x);