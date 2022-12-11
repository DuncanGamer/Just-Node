const express = require('express');
const router = express.Router();
const userController = require ('../controllers/users')


router.get('/all', userController.getUsers)

router.get('/create', userController.createUser)

router.get('/update', userController.updeteUser)

router.get('/delete', userController.deletUser)

module.exports = router;