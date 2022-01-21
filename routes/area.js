const router = require('express').Router();
const MotivosModel = require('../models/motivos');
const Area = require ('../models/area');

router.post('/registro_area', async(req, res)=>{
   let topic = await Area.findOne({ area: req.body.area})

   topic = new Area({
       area: req.body.area
   })
   topic.save();
   res.status(201).send(topic);
});


router.get("/area", (req, res) => {
    Area
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;