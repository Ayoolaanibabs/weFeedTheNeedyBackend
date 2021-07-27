Statistics = require('../models/statistics');

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
        res.json({
            success: false,
            message: 'Statisics was not added',
            error
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
		res.json({
            success: false,
            message: 'Statisics was not found',
        });
	}
};

exports.updateStatistics = async (req, res) => {
	try {
		const { id } = req.params;
		const update = req.body ;
		const result = await Statistics.find({ _id: id });

		if (!result.length) res.json({success: false, message: 'Statistic does not exist!'});
		await Statistics.updateOne({ _id: id }, { $set: update });
		res.json({
            status: 'SUCCESS',
            message: 'The statistics has been updated!'
        });

	} catch (error) {
		res.json({
            success: false,
            message: 'Statisics was not found',
        });
	}
};

exports.deleteStatistics = async (req, res) => {
    try{
        const { id } = req.params;
        const result = await Statistics.find({ _id: id });

		if (!result.length) res.json({success: false, message: 'Statistic does not exist!'});

        await Statistics.deleteOne({ _id: id });

        res.json({
            status: 'SUCCESS',
            message: 'The statistics have been deleted'
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Statisics was not found',
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
		res.json({
            success: false,
            message: 'No Statisics was not found',
        });
	}
};
