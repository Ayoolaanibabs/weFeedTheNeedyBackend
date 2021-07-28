const express = require('express');
const router = express.Router();

const { addFeedback, getAllFeedback } = require('../controllers/feedback');

router.get('/feedback/all', getAllFeedback);
router.post('/feedback', addFeedback);

module.exports = router;


