const AddVacancySchema = require("../models/add_vacancy")
const mongoose = require("mongoose")

const Makevacancy = async (req, res) => {
    try {
        const {JobPosition, JobLocation, Skill, JobDescription, JobImage} = req.body
        console.log(req.body);
        const newVacancy = await AddVacancySchema.create({JobPosition, JobLocation, Skill, JobDescription, JobImage})
        res.status(202).json({"newvacancy": newVacancy})
    } catch (error) {
        res.status(500).json({"msg": error.message})
    }
}

const Updatevacancy = async (req, res) => {
    try{
        console.log("in backend");
        const {VacancyId} = req.params
        const {JobPosition, JobLocation, Skill, JobDescription, JobImage} = req.body
        const UpVacancy = await AddVacancySchema.findById(VacancyId)
        UpVacancy.JobPosition = JobPosition
        UpVacancy.JobLocation = JobLocation
        UpVacancy.Skill = Skill
        UpVacancy.JobDescription = JobDescription
        UpVacancy.JobImage = JobImage
        await UpVacancy.save()
        res.status(202).json({"ward": UpVacancy})
    } catch (error) {
        res.status(500).json({"msg": error.message})
    }
}

const Deletevacancy = async (req, res) => {
    try{
        const {VacancyId} = req.params
        const DeleteVacancy = await AddVacancySchema.findOneAndDelete({_id : VacancyId})
        res.status(200).json({"msg": "Delete Vacancy", "DeleteVacancy" : DeleteVacancy})
    } catch (error) {
        res.status(500).json({"msg": error.message})
    }
}

const Readvacancy = async (req, res) => {
    try {
        const resultSet = await ReadvacancySchema.find({})
        res.status(200).json({"result" : resultSet})

    } catch (error) {
        res.status(500).json({"msg": error.message})
    }
}

module.exports = {Makevacancy, Updatevacancy, Deletevacancy, Readvacancy}