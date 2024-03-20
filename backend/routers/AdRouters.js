const express = require('express');
const router = express.Router();
const adController = require('../controllers/adController');

// Route for creating a new advertisement
router.post('/ads', adController.createAd);

// Additional routes for other advertisement-related operations can be added here

module.exports = router;
