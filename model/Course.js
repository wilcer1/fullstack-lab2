const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
    course_code: {
        type: String,
        required: true,
        min: 1,
        max: 50

    },
    course_name : { 
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    course_description : {
        type: String,
        required: true,
        max: 255,
        min: 3
    }
});

module.exports = mongoose.model('Course', courseSchema);