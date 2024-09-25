const mongoose = require("mongoose")
const env = require("dotenv")
env.config()

const connection = async()=>{
try {
    const url = process.env.DB_URL
    await mongoose.connect(url)
    console.log("Database succcessfully connected")
} catch (error) {
    console.log("Database not connected something problem")
}
}

connection()