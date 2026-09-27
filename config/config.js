require('dotenv').config();

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

process.env.URLDB = process.env.URLDB || process.env.MONGODB_URI || (
  process.env.NODE_ENV === 'dev'
    ? "mongodb+srv://xAlexei:Palacios12@cluster0.66sqe.mongodb.net/universidad?retryWrites=true&w=majority"
    : "mongodb://localhost:27017/praacofi"
);

// ===========================
// Vencimiento de token
// ===========================

process.env.CADUCIDAD_TOKEN = process.env.CADUCIDAD_TOKEN || '48h';

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
