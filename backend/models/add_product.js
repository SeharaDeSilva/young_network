const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

    imageURL: {
        type: String,
        required: true,
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

module.exports = mongoose.model("Product", ProductSchema);