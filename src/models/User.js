const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {   
        type: String,
        required: true,
        unique: true
    },
    roles: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    password: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('User', userSchema) 