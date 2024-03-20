
const mongoose = require("mongoose");


const AddVacancySchema = new mongoose.Schema({

    JobPosition: {
        type: String,
        required: true,
    },

    JobLocation: {
        type: String,
        required: true,
    },

    Skills: {
        type: String,
        required: true,
    },

    JobDescription: {
        type: String,
        required: true,
    },

    JobImage: {
        type: String,
        required: true,
    },

});

const addvacancy = mongoose.model("addvacancy", AddVacancySchema);
module.exports = addvacancy;