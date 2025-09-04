const Media = require('../models/Media');
const Genero = require('../models/Genero');
const Director = require('../models/Director');
const Productora = require('../models/Productora');
const Tipo = require('../models/Tipo');

// Helper para validar referencias activas
async function refsValidas({ genero, director, productora, tipo }) {
  const g = await Genero.findById(genero);
  if (!g || g.estado !== 'Activo') throw new Error('Género inválido o inactivo');
  const d = await Director.findById(director);
  if (!d || d.estado !== 'Activo') throw new Error('Director inválido o inactivo');
  const p = await Productora.findById(productora);
  if (!p || p.estado !== 'Activo') throw new Error('Productora inválida o inactiva');
  const t = await Tipo.findById(tipo);
  if (!t) throw new Error('Tipo inválido');
}

// Crear Media
exports.crear = async (req, res) => {
  try {
    await refsValidas(req.body);
    const media = await Media.create(req.body);
    res.status(201).json(media);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Listar Media (con populate)
exports.listar = async (req, res) => {
  try {
    const items = await Media.find().populate('genero director productora tipo');
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener por ID
exports.obtener = async (req, res) => {
  try {
    const item = await Media.findById(req.params.id).populate('genero director productora tipo');
    if (!item) return res.status(404).json({ error: 'Media no encontrada' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Actualizar
exports.actualizar = async (req, res) => {
  try {
    if (req.body.genero || req.body.director || req.body.productora || req.body.tipo) {
      await refsValidas({
        genero: req.body.genero,
        director: req.body.director,
        productora: req.body.productora,
        tipo: req.body.tipo
      });
    }
    const updated = await Media.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ error: 'Media no encontrada' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar
exports.eliminar = async (req, res) => {
  try {
    const deleted = await Media.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Media no encontrada' });
    res.json({ message: 'Media eliminada' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
