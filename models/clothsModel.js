const mongoose = require("mongoose")



const clothsShema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
      },
    quantity:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }

})


module.exports = mongoose.model("Cloths",clothsShema)