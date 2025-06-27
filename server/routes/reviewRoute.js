const express = require('express')
const reviewRouter = express.Router()

const { getReviews } = require('../controllers/reviewController');
const { addReview } = require('../controllers/reviewController');
const { deleteReview } = require('../controllers/reviewController');

const { protect } = require('../middlewares/authMiddleware');

reviewRouter.get('/:productId', getReviews)

reviewRouter.post('/:productId', protect, addReview)

reviewRouter.delete('/:reviewId', protect, deleteReview)


module.exports = reviewRouter