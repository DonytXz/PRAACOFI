const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario'],
    },
    email: {
        type: String,
        unique: true, 
        required: [true, "El correo es necesario"],
    },
    password: {
        type: String,
        required: [true, "Le contraseña es obligatoria"],
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin", "superadmin"]
      },
});

module.exports = model("users", UserSchema);