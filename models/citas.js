const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Usuario = mongoose.model('Usuario');

const CitasSchema = new Schema({
    usuario: { type: Schema.ObjectId, ref: 'Usuario'},
    motivo: String,
    fecha_cita: Date,
    hora: String,
    area: String,
    rfc: String,
});



module.exports = mongoose.model('citas', CitasSchema);