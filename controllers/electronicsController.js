const electronicsRouter = require("express").Router()
const electronics = require("../models/elctronicsModel")
const uploadFiles = require("../multer")





electronicsRouter.post("/create",uploadFiles, async (req, res) => {
   

    try {
        const { title, price,rating,quantity, description:{ brand, operating_system, ram, memory, cpu_model, details }, type,category } = req.body

        const image = req.file;
        if(!image){
            res.status(400).json({message:"Please select the image"})
        }
        const createProduct = electronics({
            title, price,image:image?.path,rating, quantity, description:{ brand, operating_system, ram, memory, cpu_model, details }, type,category
        })
       await createProduct.save()
       if(createProduct._id){
        res.status(200).json({ message: "Electronics product created successfully"})
       }
       

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


electronicsRouter.get("/",async(req,res)=>{
    try {
        const getTheProduct = await electronics.find()
        if(getTheProduct){
            res.status(200).json(getTheProduct)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})




module.exports = electronicsRouter