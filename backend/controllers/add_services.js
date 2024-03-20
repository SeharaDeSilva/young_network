//import addservice from "../models/add_services";
const addservice = require("../models/add_services")
const mongoose = require("mongoose")


export const Makeservice = async(req,res) => {
    try {
        const {serviceCategory, addDescription, addImage} = req.body
        console.log(req.body)
        const newService = await AddServiceSchema.create({serviceCategory, addDescription, addImage})
        res.status(202).json({"newservice": newService})
    } catch (error) {
        res.status(500).json({"msg": error.message})
    }
   /* if (!addservices){
        return res.status(404).json({
            message: "No services found"
        });
    }

    return res.status(200).json({addservices});*/
}

export const Updateservice = async (req, res) => {

    try {
        console.log("in backend");
        const {ServiceId} = req.params
        const {serviceCategory, addDescription, addImage} = req.body
        const Upservice = await AddServiceSchema.findNyId(ServiceId)
        Upservice.serviceCategory = serviceCategory
        Upservice.addDescription = addDescription
        Upservice.addImage = addImage
        await Upservice.save()
        res.status(200).json({"ward": Upservice})
    } catch (error) {
        res.status(500).json({"msg" : error.message})
    }
}

export const Deleteservice = async (req, res) => {
    
    try{
        const {ServiceId} = req.params
        const Deleteservice = await AddServiceSchema.findOneAndDelete({_id : ServiceId})
        res.status(200).json({"msg" : "Service Deleted", "deleteService" : deleteService})
    } catch(error){
        res.status(500).json({"msg" : error.message})
    }
}

export const Readservice = async (req, res) => {
    try{
        const resultSet = await AddServiceSchema.find({})
        res.status(200).json({"result" : resultSet})
    } catch(error){
        res.status(500).json({"msg" : error.message})
    }
}

module.exports = {Makeservice, Updateservice, Deleteservice, Readservice}