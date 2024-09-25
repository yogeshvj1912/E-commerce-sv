const express = require("express")
const app_server = express()

app_server.use("/api/electronics",require("./controllers/electronicsController"))
app_server.use("/api/cloths",require("./controllers/clothsController"))
app_server.use("/api/home-appliances",require("./controllers/homeApplianceController"))



module.exports = app_server