const router = require('express').Router();

const products = require('./product')

router.use('product',products)

module.exports = router;