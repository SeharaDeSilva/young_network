//const Products = require('../models/add_product');
const Products = require('../models/add_product');

const ProductController = {
 createProduct : async(req,res)=>{

    try{
        const{image,name,price,category,condition,description}=req.body;
        console.log(req.body);

        const newProducts = await Products.create({image,name,price,category,condition,description});


       // await Products.save();

       

        res.status(201).json({"newProduct":newProducts});

    }catch(err){
        res.status(400).json({error:err.message});
    }}
};

module.exports = ProductController;