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
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


// parse application/json
app.use(bodyParser.json())

// Configuracion global de rutas
app.use(require('./routes/index'));

let renderHTML = path.resolve(__dirname, '../public/index.html');

app.get('/', function (req, res) {
  res.sendFile(renderHTML);
})


mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) throw err;
  console.log("Base de datos online");
});

app.listen(process.env.PORT, () => {
  console.log("Escuchando en puerto 4201");
})