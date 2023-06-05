const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
    name: {
        require:true,
        type : String
    },
    email: {
        require:false,
        type: String
    },
    age: {
        require: true,
        type : Number
    }
})

module.exports = mongoose.model('Data' , dataSchema)