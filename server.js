require('./config/config');

const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require("cors");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// CORS
const defaultOrigins = [
  'https://donatoalvarez.dev',
  'https://donytxz.github.io',
  'http://localhost:3000',
  'http://localhost:4200',
  'http://localhost:5173'
];
const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map(o => o.trim())
  : defaultOrigins;
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// parse application/json
app.use(bodyParser.json())

// Configuracion global de rutas
app.use(require('./routes/index'));

app.get('/', function (req, res) {
  res.json({
    status: 'online',
    service: 'PRAACOFI API',
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Base de datos online");
  const PORT = process.env.PORT || 4201;
  app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`);
  });
}).catch(err => {
  console.error("Error al conectar con la base de datos:", err);
  process.exit(1);
});

module.exports = app;

/*
const cors = require("cors");
const exp = require("express");
const bp = require("body-parser");
const passport = require("passport");
const { connect } = require("mongoose");
const { success, error } = require("consola");

// Bring in the app constants
const { DB, PORT } = require("./config/config");

// Initialize the application
const app = exp();

// Middlewares
app.use(cors());
app.use(bp.json());
app.use(passport.initialize());

require("./middlewares/passport")(passport);

// User Router Middleware
app.use("/api/users", require("./routes/roles"));

const startApp = async () => {
  try {
    // Connection With DB
    await connect(DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });

    success({
      message: `Successfully connected with the Database \n${DB}`,
      badge: true
    });

    // Start Listenting for the server on PORT
    app.listen(PORT, () =>
      success({ message: `Server started on PORT ${PORT}`, badge: true })
    );
  } catch (err) {
    error({
      message: `Unable to connect with Database \n${err}`,
      badge: true
    });
    startApp();
  }
};

startApp();*/
