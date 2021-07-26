const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config()

const MONGO_OPTIONS = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	socketTimeoutMS: 30000,
	keepAlive: true,
	poolSize: 50,
	autoIndex: false,
	retryWrites: true
};


const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_HOST = process.env.MONGO_URL;

const MONGO = {
	host: MONGO_HOST,
	password: MONGO_PASSWORD,
	username: MONGO_USERNAME,
	options: MONGO_OPTIONS,
	url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`
};

const config = {
	mongo: MONGO
};

const connectToDatabase = async () => {
	try {
		await mongoose.connect(config.mongo.url, config.mongo.options);
        console.log('Db connected')
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = {
    connectToDatabase
};