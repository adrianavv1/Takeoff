const express = require('express');
const router = express.Router();
const tripsController = require('../../controllers/tripsController');

// Trip Routes
router
  .route('/')
  .post(tripsController.create);
  
router
  .route('/:id')
  .get(tripsController.findAll);

module.exports = router;