const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController')





router.get('/', (req, res) => {

    res.send('Welcome to PKE')

})





router.get('/users', userController.getAllUsers )

router.post('/users', userController.createNewUser)
router.patch('/users', userController.updateUser)
// router.put('/users', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)
router.get('/users/:id', userController.getUserById)



module.exports = router;