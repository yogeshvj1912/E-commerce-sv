const mongoose = require("mongoose")

const discriptionShema = new mongoose.Schema({
    brand:{
        type:String,
        required:true
    },
    operating_system:{
        type:String,
        required:true
    },
    ram:{
        type:String,
        required:true
    },
    memory:{
        type:String,
        required:true
    },
    cpu_model:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },

})

const electronicsShema = new mongoose.Schema({
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
    rating:{
        type:Number,
        required:true
      },
    quantity:{
        type:Number,
        required:true
    },
    description:discriptionShema,
    type:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model("Electronics",electronicsShema)