const mongoose = require("mongoose");

const AdSolutionSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true,
    },

    description: {
        type: String,
        require: true,
    },

    imageURL: {
        type: String,
        //require: true,
    },
});

module.exports = mongoose.model("AD",AdSolutionSchema);