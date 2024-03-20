const mongoose = require('mongoose');

//create a schema
//convert te schema to a model.

const AddServicesSchema = new mongoose.Schema({
    serviceCategory: {
        type: String,
        required: true,
        trim: true,  // Remove whitespace from the beginning and end of the string
    },

    addDescription: {
        type: String,
        required: true,
    },

    addImage: {
        type: String,
        required: true,
    },

});

AddServicesSchema.index({ serviceCategory: 1});


const addservice = mongoose.model("addservice", AddServicesSchema);
module.exports = addservice;