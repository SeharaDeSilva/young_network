const express = require('express');
const router = express.Router();
const {Makevacancy, Updatevacancy, Deletevacancy, Readvacancy} = require("../controllers/add_vacancy")

router.post('/insert', Makevacancy)
router.put('/update/:Vacancyid', Updatevacancy)
router.delete('/delete/:Vacancyid', Deletevacancy)
router.get('/read/:Vacancyid', Readvacancy)

module.exports = router