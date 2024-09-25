const multer = require("multer")
const {v4:uuid} = require("uuid")



const storage = multer.diskStorage({
    destination(req,file,cb){
        cb(null,"./uploads")
    },
    filename(req,file,cb){
        const id = uuid();
        const extention = file.originalname.split(".").pop();
        const filename = `${id}.${extention}`;
        cb(null,filename)
    },
 
}); 

const uploadFiles = multer({storage}).single("image");

module.exports = uploadFiles 