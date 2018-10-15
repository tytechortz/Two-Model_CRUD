const mongoose = require('mongoose');

const continentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    area: {type: Number, required: true},
    population: {type: Number, required: true}
});

module.exports = mongoose.model('Continent', continentSchema);
