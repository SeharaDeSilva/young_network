const Product = require('../models/add_product');

exports.createProduct = async(req,res)=>{

    try{
        const{name,price,category,condition,description}=req.body;

        const Product = new Product({name,price,category,condition,description});

        await Product.save();

        res.status(201).json(Product);

    }catch(err){
        res.status(400).json({error:err.message});
    }
};