const express = require("express");
const bcrypt = require("bcrypt");
const Usuario = require("./../models/usuario");
const app = express();

<<<<<<< HEAD

app.post("/register", function (req, res) {
  
=======
app.post("/register", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
>>>>>>> c5848624f577cc2294c2edaf754773240b9b6e04
  let body = req.body;
  let { nombre, email, password, role } = body;
  let usuario = new Usuario({
    nombre,
    email,
    password: bcrypt.hashSync(password, 10),
    role,
  });
<<<<<<< HEAD

=======
>>>>>>> c5848624f577cc2294c2edaf754773240b9b6e04
  usuario.save((err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      usuario: usuarioDB,
    });
  });
});

app.get("/mostrar_usuarios", async (req, res) => {
  await Usuario.find()
    .then((result) => {
      if (!result)
        res.json({ succes: false, result: "No se encontraron registros" });

      res.json({ succes: true, result: result });
    })
    .catch((err) => res.json({ succes: false, result: err }));
});

app.delete("/:id", async (req, res) => {
  const user = await Usuario.findOneAndDelete(req.params.id);
  if (!user) {
    return res.status(404).send("Registro no encontrado");
  }
  res.status(200).send("El usuario ha sido eliminado");
});

module.exports = app;
