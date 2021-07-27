const express = require('express');
const router = express.Router();

const { 
    addStatistics, 
    getStatistics, 
    updateStatistics, 
    deleteStatistics,
    getAllStatistics
} = require('../controllers/statistics');

router.get('/statistics/all', getAllStatistics)
router.get('/statistics/:id', getStatistics)
router.post('/statistics', addStatistics)
router.put('/statistics/:id', updateStatistics)
router.delete('/statistics/:id', deleteStatistics)

module.exports = router;
