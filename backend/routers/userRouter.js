const router = require('express').Router();
const auth = require('../middlewares/auth');
const userController = require('../controllers/userController')

//router.get('/search',auth, userController.searchUser)
router.get('/user/:id', userController.getUser);
router.put('/user/update/:id', userController.updateUser);
router.delete('/user/delete/:id', userController.deleteUser);


module.exports = router;