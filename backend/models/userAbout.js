const mongoose = require('mongoose');

const AboutSchema = mongoose.Schema({
    about :{
        type:String,
    }

});

const About = mongoose.model("About",AboutSchema);
module.exports = About;