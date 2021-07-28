const Feedback = require('../models/feedback');

exports.addFeedback = async (req, res)=> {
	try {
		let info = new Feedback(req.body);
        const result = await info.save();

		 res.json({
            status: 'SUCCESS',
            payload:{
            result
            }
        });

	} catch (error) {
        res.status(error.statusCode || 400).json({
            success: false,
            message: error.message
        })
	}
};

exports.getAllFeedback = async (req, res) => {
	try{
        const result = await Feedback.find({});
        res.json({
            status: 'SUCCESS',
            payload:{
            result
            }
        });
	} catch (error) {
		res.status(error.statusCode || 400).json({
            success: false,
            message: error.message,
        });
	}
};

exports.getFeedbackByStatus = async (req, res) => {
	try{
        const { status } = req.params;
        const result = await Feedback.find({ status: status });

		if (!result.length) res.status(404).json({success: false, message: `No ${status} messages!`});

        res.json({
            status: 'SUCCESS',
            payload:{
            result
            }
        });
	} catch (error) {
		res.status(error.statusCode || 400).json({
            success: false,
            message: error.message,
        });
	}
};

exports.updateStatus = async (req, res) => {
	try {
		const { id, status } = req.params; 
		const result = await Feedback.find({ _id: id });

		if (!result.length) res.status(404).json({success: false, message: 'Message does not exist!'});
		await Feedback.updateOne({ _id: id }, { status: status });
        
		res.json({
            status: 'SUCCESS',
            message: 'Status updated!'
        });

	} catch (error) {
		res.status(error.statusCode || 404).json({
            success: false,
            message: error.message,
        });
	}
};

