const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

const blogModel = mongoose.model('blog',blogSchema)

module.exports = {
    blogModel
}