const User = require("../models/userModel");
const jwt = require('jsonwebtoken');

/*const auth = (req,res,next) => {
    try {
        const token = req.header("Authorization")

        if(!token) return res.status(500).json({msg:"Not Valid"})

        const decoded = jwt.verify(token,process.env.ACCESSTOKENSECRET)
        if(!decoded) return res.status(500).json({msg:"Not Valid"})

        const user = User.findOne({_id:decoded.id})
        req.user = user;
        next();
          
    }catch (err) {
        return res.status(500).json({msg: err.message})
    }
}*/

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization");

        if (!token) {
            return res.status(401).json({ msg: "Authorization token is missing" });
        }

        const decoded = jwt.verify(token, process.env.ACCESSTOKENSECRET);
        if (!decoded) {
            return res.status(401).json({ msg: "Invalid authorization token" });
        }

        // Ensure that the user exists in the database
        const user = await User.findOne({ _id: decoded.id });
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        // Attach the user object to the request for further use
        req.user = user;
        next();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Internal server error" });
    }
};




module.exports = auth;