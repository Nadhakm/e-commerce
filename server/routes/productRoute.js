const express = require('express')
const productRouter = express.Router()

const { getAllProducts } = require('../controllers/productController');
const { getProductById } = require('../controllers/productController');
const { createProduct } = require('../controllers/productController');
const { updateProduct } = require('../controllers/productController');
const { deleteProduct } = require('../controllers/productController');

const { protect } = require('../middlewares/authMiddleware');

productRouter.get('/', getAllProducts)

productRouter.get('/:productId', getProductById)

productRouter.post('/create', protect, createProduct)

productRouter.patch('/update/:productId', protect, updateProduct)

productRouter.delete('/delete/:productId', protect, deleteProduct)


module.exports = productRouter