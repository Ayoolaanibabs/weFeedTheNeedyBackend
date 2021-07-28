const Statistics = require('../models/statistics');

exports.addStatistics = async (req, res)=> {
	try {
		let info = new Statistics(req.body);
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

exports.getStatistics = async (req, res) => {
	try{
		const { id } = req.params;
        const result = await Statistics.findOne({ _id: id });

		//if (!result.length) res.json({success: false, message: 'Statistic does not exist!'});

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

exports.updateStatistics = async (req, res) => {
	try {
		const { id } = req.params;
		const update = req.body ;
		const result = await Statistics.find({ _id: id });

		if (!result.length) res.status(404).json({success: false, message: 'Statistic does not exist!'});
		await Statistics.updateOne({ _id: id }, { $set: update });
		res.json({
            status: 'SUCCESS',
            message: 'The statistics has been updated!'
        });

	} catch (error) {
		res.status(error.statusCode || 404).json({
            success: false,
            message: error.message,
        });
	}
};

exports.deleteStatistics = async (req, res) => {
    try{
        const { id } = req.params;
        const result = await Statistics.find({ _id: id });

		if (!result.length) res.status(404).json({success: false, message: 'Statistic does not exist!'});

        await Statistics.deleteOne({ _id: id });

        res.json({
            status: 'SUCCESS',
            message: 'The statistics have been deleted'
        });
    } catch (error) {
        res.status(error.statusCode || 400).json({
            success: false,
            message: error.message,
        });
    }
};

exports.getAllStatistics = async (req, res) => {
	try{
        const result = await Statistics.find({});
        res.json({
            status: 'SUCCESS',
            payload:{
            result
            }
        });
	} catch (error) {
		res.status(error.statusCode || 404).json({
            success: false,
            message: error.message,
        });
	}
};

exports.getStatisticsByLocation = async (req, res) => {
    try{
		const { location } = req.params;
        const result = await Statistics.find({ location: location });

		if (!result.length) res.status(404).send({success: false, message: 'No record in database!'});

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
        });
	}
};

exports.getStatisticsByMonth = async (req, res) => {
    try{
		const { month } = req.params;
        const result = await Statistics.find({ month: month });

		if (!result.length) res.status(404).json({success: false, message: 'No record in database!'});

        res.json({
            status: 'SUCCESS',
            payload:{
            result
            }
        });
	} catch (error) {
		res.json({
            success: false,
            message: error.message,
        });
	}
};
