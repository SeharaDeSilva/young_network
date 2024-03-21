//const express = require('express');
//const router = express.Router();
const router = require('express').Router();
const productController = require('../controllers/ProductController');

//router.post('/products', productController.createProduct);
router.post('/products',productController.createProduct);

module.exports = router;
