const express = require('express');
const router = express.Router();
const {Makeservice, Updateservice, Deleteservice, Readservice} = require("../controllers/add_services");

router.post('/insert', Makeservice)
router.put('/update/:Serviceid', Updateservice)
router.delete('/delete/:Serviceid', Deleteservice)
router.get('/read/:Serviceid', Readservice)

module.exports = router