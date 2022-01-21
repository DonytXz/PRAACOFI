const router = require('express').Router();
const perfil = require('./../models/perfil');
const PerfilModel = require('./../models/perfil');
const usuario = require('../models/usuario');

router.post('/perfil', async(req, res)=>{
    let perfil = await PerfilModel.findOne({usuario: req.body.usuario})
    //if(!perfil)return res.status(400).send('');

    perfil = new PerfilModel({
        nombre: req.body.nombre,
        email: req.body.email,
        direccion: req.body.direccion,
        ciudad: req.body.cuidad,
        pais: req.body.pais,
        cp: req.body.cp,
        telefono: req.body.telefono,
        ocupacion: req.body.ocupacion,
        usuario: req.body.usuario
    })
    perfil.save();
    res.status(201).send(perfil);
});

//Get prfile

router.get("/mostrar_perfil", function (req, res) {
    perfil.find({}, function (err, perfil) {
      usuario.populate(perfil, { path: "usuario" }, function (err, perfil) {
        res.status(200).send(perfil);
      });
    });
  });

//Get one profile

router.get('/user/:id', async (req, res)=>{
  const { id } = req.params;
  PerfilModel
  .findById(id)
  .then((data)=> res.json(data))
  .catch((error) => res.json({ message: error}));
});


module.exports = router;
