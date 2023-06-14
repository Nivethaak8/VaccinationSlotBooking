// backend/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/login', adminController.adminLogin);
router.post('/centres', adminController.addCentre);
router.get('/dosage-details', adminController.getDosageDetails);
router.delete('/centres/:centreId', adminController.removeCentre);

module.exports = router;
