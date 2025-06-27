const express = require('express')
const cartRouter = express.Router()


cartRouter.get('/',)

cartRouter.post('/add',)

cartRouter.patch('/update/:productId',)

cartRouter.delete('/remove/:productId',)

cartRouter.delete('/clear',)


module.exports = cartRouter