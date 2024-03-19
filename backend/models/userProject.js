const mongoose = require('mongoose');

const userProject = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    description :{
        type : String,
    },
    links : {
        type : String,
    },

}
);

const Project = mongoose.model("Project",userProject);
module.exports = Project;