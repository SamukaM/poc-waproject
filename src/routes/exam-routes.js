const express = require('express');
const router = express.Router();
const examController = require('../controllers/exam-controller');


router.get('/', examController.listExams);

router.get('/:nome', examController.findbyName);

router.post('/', examController.createExam);

router.put('/:id', examController.updateExam);

router.delete('/:id', examController.deleteExam);

module.exports = router
