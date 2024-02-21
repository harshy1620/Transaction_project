const express = require('express');
const { getAllData, initializeData } = require('../controllers/TransactionDataController');
const router = express.Router();

router.get('/initialize-database', initializeData);
router.get('/transaction-data', getAllData);

module.exports = router;