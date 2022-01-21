const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const areaSchema = new Schema({
    area: String
});

module.exports = mongoose.model('area', areaSchema);