const router = require('express').Router();
const { Product} = require('../../models/Product');

// get all of the products
router.get('/', async (req, res) => {
  try {
    res.status(200).json(await Product.findAll());
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get product by id
router.get('/:id', async (req, res) => {
  try {
    res.status(200).json(await Product.findOne({
      where: {
        id: req.params.id
      }
    }));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
