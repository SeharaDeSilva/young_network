const Product = require('../models/ad_solution');

exports.createAd = async(req,res)=>{

    try{
        const{title,description}=req.body;

        const Ad = new Ad({title,description});

        await Ad.save();

        res.status(201).json(Ad);

    }catch(err){
        res.status(400).json({error:err.message});
    }
};