const {model, Schema} = require('mongoose')

const linkSchema = new Schema({
    root: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    cntClick: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = model('links', linkSchema)