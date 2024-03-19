const mongoose = require('mongoose');

const userSkill= mongoose.Schema({
    skillName :{
        type : String,
    },

});

const Skill = mongoose.model("Skill",userSkill);

module.exports = Skill;