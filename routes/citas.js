const router = require("express").Router();
const { json } = require("body-parser");
var mongoose = require("mongoose");
const CitasModel = require("../models/citas");
const usuario = require("../models/usuario");

//Create appointment

router.post("/registro_cita/:_id", async function (req, res) {
  const newCita = new CitasModel(req.body);
  //Search user
  const user = await usuario.findById(req.params);
  //Set apointment to user
  newCita.usuario = user;
  await newCita.save();
  user.citas.push(newCita);
  await user.save();
  res.send(newCita);
});

//Get apointment of user
router.get("/:_id/citas", async function (req, res) {
  const user = await usuario.findById(req.params).populate("citas");
  res.send(user);
});

//Get one
router.get("/citas/:id", async (req, res) => {
  const { id } = req.params;
  CitasModel.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.put("/modificar_cita/:id", async (req, res) => {
  const citas = await CitasModel.findByIdAndUpdate(
    req.params.id,
    {
      motivo: req.body.motivo,
      fecha_cita: req.body.fecha_cita,
      hora: req.body.hora,
      area: req.body.area,
      rfc: req.body.rfc,
    },
    {
      new: true,
    }
  );
  if (!citas) {
    return res.status(404).send("No existe");
  }
  res.status(204).send(citas);
});

//Get all appointment
router.get("/mostrar_citas", (req, res) => {
  CitasModel.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Delete

router.delete("/citas/:id", (req, res) => {
  const { id } = req.params;
  CitasModel.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// asignar contador a cita
router.put("/citas/asignar_contador/:id_usuario/:id_cita", async (req, res) => {
  try {
    const { id_usuario, id_cita } = req.params;
    const user = await usuario.findById(id_usuario);
    const cita = await CitasModel.findById(id_cita);
    if (!user || !cita) {
      return res.status(400).json({
        message: "El registro no existe",
      });
    } else {
      if (user["role"] == "CONTADOR") {
        // asignamos la cita al contador
        const id_user = mongoose.Types.ObjectId(id_usuario);
        await CitasModel.findOneAndUpdate(
          { _id: id_cita },
          { usuario: id_user }
        );
        return res.status(200).json({
          cita: await CitasModel.findById({ _id: id_cita }),
        });
      } else {
        return res.status(400).json({
          message: "El usuario no es contador",
        });
      }
    }
  } catch (error) {
    return res.status(400).json({
      error: error,
    });
  }
});

module.exports = router;
