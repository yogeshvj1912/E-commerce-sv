const homeApplianceRouter = require("express").Router()
const homeAppliance = require("../models/homeApplianceModel")
const uploadFiles = require("../multer")



homeApplianceRouter.post("/create",uploadFiles, async (req, res) => {

    try {
        const { title, price, brand, type,rating,quantity, description,category} = req.body
        const image = req.file;
        if(!image){
            res.status(400).json({message:"Please select the image"})
        }
        const createHomeAppliance = new homeAppliance({
            title, price, image:image?.path, brand, type,rating,quantity, description,category
        })
        await createHomeAppliance.save()
        if(createHomeAppliance._id){
            res.status(200).json({message:"Home Appliances created successfully"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }

})


homeApplianceRouter.get("/",async(req,res)=>{
    try {
        const getTheProduct = await homeAppliance.find()
        if (getTheProduct){
            res.status(200).json(getTheProduct)
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


module.exports = homeApplianceRouter