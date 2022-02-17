const router = require('express').Router();
const MotivosModel = require('../models/motivos');

router.post('/registro_motivos', async(req, res)=>{
   let topic = await MotivosModel.findOne({ motivos: req.body.motivos})

   topic = new MotivosModel({
       motivos: req.body.motivos
   })
   topic.save();
   res.status(201).send(topic);
});


router.get("/motivos", (req, res) => {
    MotivosModel
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;