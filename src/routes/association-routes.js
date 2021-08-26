const express = require('express');
const router = express.Router();
const associationController = require('../controllers/association-controller');

router.put('/create', associationController.createAssociation);

router.put('/delete', associationController.deleteAssociation);

module.exports = router
