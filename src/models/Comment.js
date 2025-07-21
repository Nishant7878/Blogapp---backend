const mongoose = require('mongoose');
const User = require('./User');

const CommentSchema = new mongoose.Schema({

    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',

    },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },
    
    text: {
        type: String,
        required: true,
    }    

})

module.exports = mongoose.model('Comment', CommentSchema)