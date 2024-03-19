const mongoose = require('mongoose');

const userExperience = mongoose.Schema({
    companyName : {
        type : String,
        required : true,
    },
    position : {
        type : String,
        required : true,
    },
    startDate :{
    type : String,
    required : false,
    },
    endDate :{
       type : String,
       required : false,
    },
    description :{
        type : String,
    }
    
});

const Experience = mongoose.model("Experience",userExperience );
module.exports = Experience;