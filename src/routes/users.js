const express = require('express');
const router = express.Router();
const userController = require ('../controllers/users')


router.get('/all', userController.getUsers)

router.get('/create', userController.getCreateUser)

router.get('/update', userController.getUpdeteUser)

router.get('/delete', userController.getDeletUser)

router.post('/create', userController.createUser)

router.put ('/update', userController.updateUser)

router.delete ('/delete', userController.deleteUser)

module.exports = router;