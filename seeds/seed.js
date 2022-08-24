const { Product } = require('../models');

const productData = [
  {
    productName: 'hat',
    price: 19.99,
    stock: 5,
    categoryId: 1,
  },
  {
    productName: 'bluetooth headphone',
    price: 55.99,
    stock: 25,
    categoryId: 2,
  },
  {
    productName: 'gloves',
    price: 9.99,
    stock: 12,
    categoryId: 3,
  },
  {
    productName: 'duffle bag',
    price: 25.99,
    stock: 10,
    categoryId: 4,
  },
  {
    productName: 'lip balm',
    price: 3.99,
    stock: 22,
    categoryId: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;