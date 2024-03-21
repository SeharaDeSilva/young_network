const User = require("../models/userModel");

const userController = {
   /* searchUser : async(req,res) =>{
        try{
            const users = User.find({usernam :{$regex:req.query.firstName}}).limit(10)
            .select("firstName lastName")
        } catch (err){
            return res.status(500).json({err: err.message})

        }
    }*/
    
    getUser: async (req,res) =>{
        try{
            const user = await User.findOne({_id:req.params.id})
            .select("password")
            if(!user) return res.status(400).json({msg:"no user exists"})
            res.json({user})
        } catch(err) {
            return res.status(400).json({msg : err.message})
        }
    },
    updateUser : async (req,res) => {
        try{
            const {firstName,lastName,email,experiences,education,projects,skills} =req.body;
            if(!firstName) return res.status(500).json({msg:"Firstname is required"});
            if(!lastName) return res.status(500).json({msg:"Lastname is required"});

            await User.findOneAndUpdate({_id:req.user._id},{
                firstName,lastName,email,experiences,education,projects,skills
            })
                 res.json({msg:'update success'})

        }catch(err) {
            return res.status(500).json({msg:err.message});
        }



}
}

module.exports = userController;