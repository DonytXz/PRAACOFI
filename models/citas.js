const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Usuario = mongoose.model('users');

const CitasSchema = new Schema({
    usuario: { type: Schema.ObjectId, ref: 'users'},
    motivo: String,
    fecha_cita: Date,
    hora: String,
    area: String,
    rfc: String,
});



module.exports = mongoose.model('citas', CitasSchema);