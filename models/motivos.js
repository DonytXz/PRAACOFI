const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const motivosSchema = new Schema({
    motivos: String
});

module.exports = mongoose.model('motivos', motivosSchema);