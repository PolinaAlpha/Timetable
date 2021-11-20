const {Schema, model} = require('mongoose')

const Timetable = new Schema({
    audNumber: {type: Number},
    createrUsername: {type: String},
    date: {type: String},
    discription: {type: String},
    timetable: [
        {
            subject: {type: String, default: '-'},
            faculty: {type: String, default: '-'}
        }
    ]
})

module.exports = model("Timetable", Timetable)