const express = require("express")
const server = express()
const bodyParser = require("body-parser")
const dbconfig = require("./dbconfig")
const cors=require("cors")
const env = require("dotenv")
env.config()
const port = process.env.PORT

server.use(cors())

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))

server.use("/uploads",express.static("uploads"))
server.use("/",require("./app"))



server.listen(port,()=>{
console.log("Successfully started port :",port)
})