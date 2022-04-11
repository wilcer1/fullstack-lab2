const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    unit_id: {
        type: String,
        required: true,
        min: 1,
        max: 50

    },
    full_name: { 
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    }
});




module.exports = mongoose.model('Student', studentSchema);

