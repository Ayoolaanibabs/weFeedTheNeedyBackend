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
