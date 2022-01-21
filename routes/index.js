const express = require('express')
const app = express()

app.use(require('./login'));
app.use(require('./register'));
app.use(require('./citas'));
app.use(require('./perfil'));
app.use(require('./motivos'));
app.use(require('./area'));
module.exports = app;