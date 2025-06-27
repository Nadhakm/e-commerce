const express = require('express')
const userRouter = express.Router()

const { register } = require('../controllers/userController');
const { login } = require('../controllers/userController');
const { logout } = require('../controllers/userController');
const { getProfile } = require('../controllers/userController');
const { updateProfile } = require('../controllers/userController');
const { deleteUser } = require('../controllers/userController');
const { checkUser } = require('../controllers/userController');

const { protect } = require('../middlewares/authMiddleware');

userRouter.post('/register', register)

userRouter.post('/login', login)

userRouter.get('/logout', logout)

userRouter.get('/profile', protect, getProfile)

userRouter.patch('/update', protect, updateProfile)

userRouter.delete('/delete/:userId', protect, deleteUser)

userRouter.get('/checkUser', checkUser)

module.exports = userRouter