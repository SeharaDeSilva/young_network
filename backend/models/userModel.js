const mongoose = require('mongoose');

//create a schema
//convert the schema to model.

const UserSchema = mongoose.Schema({
    firstName :{
        type: String,
        required: true,
    },
    lastName :{
        type: String,
        required: true,
    },
    email :{
        type: String,
       required: true,
    },
    password:{
        type : String,
        required: true,
    },
    experiences :{
        type : String,
    },
    education : {
        type : String,
    },
    projects : {
        type : String,
    },
    skills : {
        type : String,
    },

    friends : [{type : mongoose.Types.ObjectId, ref:'User'}],
   // friends : [{type : mongoose.Types.ObjectId, ref:'User'}]

});

const User = mongoose.model("User",UserSchema);
module.exports = User;