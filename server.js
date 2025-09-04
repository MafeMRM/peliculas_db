const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./src/config/db');

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// DB
connectDB();

// Rutas
app.use('/api/generos', require('./src/routes/generoRoutes'));
app.use('/api/directores', require('./src/routes/directorRoutes'));
app.use('/api/productoras', require('./src/routes/productoraRoutes'));
app.use('/api/tipos', require('./src/routes/tipoRoutes'));
app.use('/api/media', require('./src/routes/mediaRoutes'));

app.get('/', (req, res) => {
  res.json({ message: 'API de Películas funcionando 🚀' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
