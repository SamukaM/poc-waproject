const express = require('express');
const router = express.Router();
const laboratoryController = require('../controllers/laboratory-controller');


router.get('/', laboratoryController.listLaboratories);

router.post('/', laboratoryController.createLaboratory);

router.put('/:id', laboratoryController.updateLaboratory);

router.delete('/:id', laboratoryController.deleteLaboratory);

module.exports = router