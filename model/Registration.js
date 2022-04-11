const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    student_id: {
        type: String,
        required: true,
        min: 1,
        max: 50

    },
    course_code: { 
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    unix_timestamp: {
        type: String,
        required: true,
        max: 255,
        min: 3
    }
});

module.exports = mongoose.model('Registration', registrationSchema);