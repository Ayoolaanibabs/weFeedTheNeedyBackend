const express = require('express');
const general = require('./routes/general');
const statistics = require('./routes/statistics');
const { connectToDatabase } = require('./databaseConfig');
app = express();

const cors = require('cors');
connectToDatabase() //Establishing database connection

app.use(cors());

app.use(express.json());

app.use('/', general);
app.use('/api', statistics)
//Handling wild routes
app.use('/**',(req, res, next)=>{
    res.status(404);
    res.send({
        status: 404,
        error: 'This endpoint is not valid!'
    })
});
/**
app.use((error, req, res, next)=>{
    res.status(error.status || 500)
    res.send({
        error: {
            status: error.status || 500,
            message: error.message
        }
    })
});
*/
const PORT  = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});
