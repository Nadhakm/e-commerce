const express = require('express');
const adminRouter = express.Router();

const { getAllOrders } = require('../controllers/adminController');
const { getPendingProducts } = require('../controllers/adminController');
const { approveProduct } = require('../controllers/adminController');
const { rejectProduct } = require('../controllers/adminController');

const { protect } = require('../middlewares/authMiddleware');

adminRouter.use(protect);

adminRouter.get('/orders', getAllOrders);
adminRouter.get('/products/pending', getPendingProducts);
adminRouter.patch('/products/approve/:productId', approveProduct);
adminRouter.patch('/products/reject/:productId', rejectProduct);

module.exports = adminRouter;
