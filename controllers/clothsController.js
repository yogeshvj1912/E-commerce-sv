const clothsRouter = require("express").Router()
const cloths = require("../models/clothsModel")
const uploadFiles = require("../multer")



clothsRouter.post("/create", uploadFiles, async (req, res) => {

    try {

        const { title, price, gender, type, size, color,rating, quantity, description } = req.body
        const image = req.file;
        if (!image) {
            res.status(400).json({ message: "Please select the image" })
        }
        const createCloths = new cloths({
            title, price,image:image?.path, gender, type, size, color, rating, quantity, description
        })
        await createCloths.save()
        if (createCloths._id) {
            res.status(200).json({ message: "cloths created successfully" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})


clothsRouter.get("/", async (req, res) => {
    try {
        const getTheProduct = await cloths.find()
        if (getTheProduct) {
            res.status(200).json(getTheProduct)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = clothsRouter