const razasCtrl = {};
const Razas = require('../models/razas');

razasCtrl.getRazas = async (req, res) => {
  const razas = await Razas.find();
  res.json(razas);
};

razasCtrl.createRaza = async (req, res) => {
  const newRaza = new Razas(req.body);
  await newRaza.save();
  res.json({ message: 'Raza Registrada' });
};

razasCtrl.getRazaPorId = async (req, res) => {
  try {
    const raza = await Razas.findById(req.params.id);
    if (!raza) {
      return res.status(404).json({ error: 'Raza no encontrada' });
    }
    res.json(raza);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = razasCtrl;
