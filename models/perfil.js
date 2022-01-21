const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
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