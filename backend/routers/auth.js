/*const express = require ("express");
const User = require('../models/userModel');
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/register", async (req,res) => {
    //this is the function that will be handle the register user logic
    //Step 1 : Get the details from req body

    const {firstName,lastName,email,password} = req.body;
    if (!firstName || !email || !password) {
        return res.status(400).json({err :"Invalid request body"});
    }
    //step 2 : we will check if the user with that email has already exist

    const existingUser = await User.findOne({email: email});
    if(existingUser){
        return res
            .status(402)
            .json({err:"A user with that email already exists"});
    }
    //step 3 : This is a legimate user request , now we will create the user 
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUserDetails = {
         firstName,
         lastName, 
         email, 
         password:hashedPassword,

        };
    const newUser = await User.create(newUserDetails);
  
    //step 4 : can use the newUser to create a JWT and return the token to the user
    const token = await getToken(email, newUser);
    //we want to return the following to the user
    //1.The actual user created
    //2.The token
    const userToReturn = {...newUser.toJson(),  token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});*/
