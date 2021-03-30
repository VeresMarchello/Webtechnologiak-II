const mongoose = require('mongoose')
const Schema = mongoose.Schema

//collection and schema
let WeldPoint = new Schema({
    robot_name: String,
    schedule: Number,
    error_code: Number,
    tl: Number,
    bl: Number,
    wl: Number
}, {
    collection: 'weldpoints'
})

module.exports = mongoose.model('weldpoint', WeldPoint)