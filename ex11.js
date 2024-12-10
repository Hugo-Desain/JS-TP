const calculateTotal = (price, taxRate = 0.2) => price * (1 - taxRate);
console.log(calculateTotal(10));
console.log(calculateTotal(10, 0.5));
