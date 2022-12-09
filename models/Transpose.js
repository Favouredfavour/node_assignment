const mongoose = require('mongoose')

const TransposeSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    reverseText: {
        type: String,
        required: true
    }
},{
    timestamps: true
})


module.exports = mongoose.model('transpose',TransposeSchema)