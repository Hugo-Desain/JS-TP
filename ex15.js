const products = ["Pain", "Lait", "Pates", "Oeufs", "Sucre", "Huile"];

const addProduct = (product) => products.push(product);
const deleteProduct = (product) =>
  products.splice(products.indexOf(product), 1);
const checkProduct = (product) => products.includes(product);

addProduct("Chocolat");
deleteProduct("Pates");
console.log(checkProduct("Sucre"));
console.log(products);
