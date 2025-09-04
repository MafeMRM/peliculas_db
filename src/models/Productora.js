const mongoose = require('mongoose');

const productoraSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true, unique: true },
  estado: { type: String, enum: ['Activo', 'Inactivo'], default: 'Activo' },
  slogan: { type: String, default: '' },
  descripcion: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Productora', productoraSchema);
