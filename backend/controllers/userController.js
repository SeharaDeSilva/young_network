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

    getUser: async (req, res) => {
        try {
            const user = await User.findOne({ _id: req.params.id })

            if (!user) return res.status(400).json({ msg: "no user exists" })
            res.json({ user })
        } catch (err) {
            return res.status(400).json({ msg: err.message })
        }
    },
    updateUser: async (req, res) => {
        try {
            const { firstName, lastName, email, experiences, education, projects, skills } = req.body;
            // if(!firstName) return res.status(500).json({msg:"Firstname is required"});
            // if(!lastName) return res.status(500).json({msg:"Lastname is required"});

            const user = await User.findOne({ _id: req.params.id })

            if (!user) return res.status(404).json({ mssg: "User not found" });

            const updateUser = await User.findOneAndUpdate({ _id: req.params.id }, {
                $set: req.body
            }, { new: true })
            res.json({ updateUser, msg: 'update success' })

        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }

    },
       
    deleteUser : async (req, res) => {
        try {
          // Find the user by ID
          const user = await User.findOne({ _id: req.params.id });
      
          // If user doesn't exist, return 404 Not Found
          if (!user) {
            return res.status(404).json({ message: "User not found" });
          }
      
          // Delete the user
          await User.deleteOne({ _id: req.params.id });
      
          // Return success message
          return res.json({ message: "User deleted successfully" });
        } catch (error) {
          // Handle any errors
          return res.status(500).json({ message: error.message });
        }
      },
      

}

module.exports = userController;