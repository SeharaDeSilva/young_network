const router = require ('express').Router();
const aboutController = require('../controllers/aboutController');
const userController = require('../controllers/userController');

router.get('/about/:id',aboutController.getAbout);
router.post('/addAbout',aboutController.postAbout);

module.exports = router;