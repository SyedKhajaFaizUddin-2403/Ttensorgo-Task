const mongoose = require('mongoose')
const services = new mongoose.Schema({
    
    servicename: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required:true,
    }
    
})
Services = mongoose.model("Services", services)
module.exports=Services