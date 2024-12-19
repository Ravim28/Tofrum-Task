const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Item', itemSchema);
