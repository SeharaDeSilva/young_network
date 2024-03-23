const About = require("../models/userAbout");

const aboutController ={
   
    postAbout: async (req, res) => {
        try {
            const {about} = req.body
            console.log(req.body);
            const aboutExits = await About.findOne({about});
            if (aboutExits){
                res.status(400);
                throw new Error("About already exists");
            
            }
            const ab = await About.create({
                about,
            });
            if(about){
                res.status(201).json({
                    about : ab.about,
                })
            }   
        } catch (error) {
            res.status(500).json({"msg": error.message})
        }
    },
    
    

    getAbout : async(req,res) =>{
    try {
        const about = await About.findOne({ _id: req.params.id })

        if (!about) return res.status(400).json({ msg: "no about exists" })
        res.json({ about })
    } catch (err) {
        return res.status(400).json({ msg: err.message })
    }
},
    
}

module.exports = aboutController;