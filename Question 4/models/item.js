const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Item', itemSchema);
