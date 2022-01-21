const router = require('express').Router();
const citas = require('../models/citas');
const CitasModel = require('../models/citas');
const usuario = require('../models/usuario');
const moment = require('moment');

//Create appointment

router.post('/registro_cita', async(req, res)=>{
    let citas = await CitasModel.findOne({usuario: req.body.usuario})
    // if(!citas)return res.status(400).send('');

        citas = new CitasModel({
            usuario: req.body.usuario,
            motivo: req.body.motivo,
            fecha_cita: req.body.fecha_cita,
            hora: req.body.hora,
            area: req.body.area,
            rfc: req.body.rfc
        })
        citas.save();
        res.status(201).send(citas);

});

  //Get one 

  router.get('/citas/:id', async (req, res)=>{
    const { id } = req.params;
    CitasModel
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error) => res.json({ message: error}));
});


router.put('/modificar_cita/:id', async (req, res) => {

  const citas = await CitasModel.findByIdAndUpdate(req.params.id,{
      motivo: req.body.motivo,
      fecha_cita: req.body.fecha_cita,
      hora: req.body.hora,
      area: req.body.area,
      rfc: req.body.rfc
  },
  {
      new: true
  })
  if(!citas){
      return res.status(404).send('No existe');
  }
  res.status(204).send(citas);
});

//Get all appointment

  router.get("/mostrar_citas", function (req, res) {
    citas.find({}, function (err, citas) {
      usuario.populate(citas, { path: "usuario" }, function (err, citas) {
        res.status(200).send(citas);
      });
    });
  });

//Delete 

router.delete("/citas/:id", (req, res) => {
  const { id } = req.params;
  CitasModel
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;