const mongoose = require('mongoose')
const Schema = mongoose.Schema

//collection and schema
const User = new Schema({
    userName: String,
    password: String
}, {
    collection: 'users'
})

module.exports = mongoose.model('user', User)