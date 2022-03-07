// ===========================
// Puerto
// ===========================

process.env.PORT = process.env.PORT || 4201;

// ===========================
// Entorno
// ===========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===========================
// BASE DE DATOS
// ===========================

let urlDB = "mongodb+srv://xAlexei:Palacios12@cluster0.66sqe.mongodb.net/pruebas?retryWrites=true&w=majority";

if (process.env.NODE_ENV === 'dev') {
    urlDB = "mongodb+srv://xAlexei:Palacios12@cluster0.66sqe.mongodb.net/pruebas?retryWrites=true&w=majority";
} else {
    urlDB = ""
};

process.env.URLDB = urlDB;


// ===========================
// Vencimiento de token
// ===========================

process.env.CADUCIDAD_TOKEN = '48h';

// ===========================
// SEED de autenticación
// ===========================

process.env.SEED_AUTENTICACION = process.env.SEED_AUTENTICACION || 'este-es-el-seed-desarrollo';


/*

require("dotenv").config();

module.exports = {
  DB: process.env.APP_DB,
  PORT: process.env.APP_PORT,
  SECRET: process.env.APP_SECRET
};*/
