const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CitasSchema = new Schema({
    motivo: String,
    fecha_cita: String,
    hora: String,
    area: String,
    rfc: String,
    usuario: [{
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }]
    
});


module.exports = mongoose.model('citas', CitasSchema);