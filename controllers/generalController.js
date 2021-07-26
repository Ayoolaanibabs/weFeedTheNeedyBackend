const general = async(req, res, next)=>{
    try{
        res.status(200).send({
            message:'Welcome to the wefeedtheneedy API!'
        })
    }catch(err){
        res.json({
            success:false,
            status: 401,
            message: 'Error'
        })
    }
}

module.exports = {
    general
};