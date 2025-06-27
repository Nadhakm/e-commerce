const express = require('express')
const itemRouter = express.Router()

const { getAllItems } = require('../controllers/itemController')
const { getItemById } = require('../controllers/itemController')
const { createItem } = require('../controllers/itemController')
const { updateItem } = require('../controllers/itemController')
const { deleteItem } = require('../controllers/itemController')

const { protect } = require('../middlewares/authMiddleware')

itemRouter.get('/', getAllItems)

itemRouter.get('/:itemId', getItemById)

itemRouter.post('/create', protect, createItem)

itemRouter.patch('/update/:itemId', protect, updateItem)

itemRouter.delete('/delete/:itemId', protect, deleteItem)


module.exports = itemRouter