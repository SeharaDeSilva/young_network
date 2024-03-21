const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({

    imageURL: {
        type: String,
        //required: true,
    },

    name: {
        type: String,
        required: true,
        
    },

    price: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },

    category: {
        
        type: String,
        required: true,
        
    },

    condition: {
        type: String,
        required : true,
        min: 3,
        max: 255,
    },

    description: {
        type: String,
        required: true,
        min: 3,
        max: 1255,
    },




});

const Products = mongoose.model("Products", ProductSchema);
module.exports = Products;