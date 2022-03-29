const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PerfilSchema = new Schema({
        nombre: String,
        email: String,
        direccion: String,
        ciudad: String,
        pais: String,
        cp: Number,
        telefono: Number,
        ocupacion: String,
        usuario: {type: Schema.ObjectId, ref: 'Usuario'}
});

module.exports = mongoose.model('perfil', PerfilSchema);