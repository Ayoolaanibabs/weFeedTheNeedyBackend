const express = require('express');
const router = express.Router();

const { 
    addFeedback, 
    getAllFeedback,
    getFeedbackByStatus,
    updateStatus
} = require('../controllers/feedback');

router.get('/feedback/all', getAllFeedback);
router.get('/feedback/:status', getFeedbackByStatus);
router.post('/feedback', addFeedback);
router.put('/feedback/:id/:status', updateStatus);

module.exports = router;


