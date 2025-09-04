const Productora = require('../models/Productora');

// Crear
exports.crear = async (req, res) => {
  try {
    const doc = await Productora.create(req.body);
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Listar
exports.listar = async (req, res) => {
  try {
    const items = await Productora.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener por ID
exports.obtener = async (req, res) => {
  try {
    const item = await Productora.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Productora no encontrado' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Actualizar
exports.actualizar = async (req, res) => {
  try {
    const updated = await Productora.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ error: 'Productora no encontrado' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar
exports.eliminar = async (req, res) => {
  try {
    const deleted = await Productora.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Productora no encontrado' });
    res.json({ message: 'Productora eliminado' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
