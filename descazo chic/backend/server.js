const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Cargar productos desde archivo local
app.get('/api/productos', (req, res) => {
  const productos = JSON.parse(fs.readFileSync('backend/productos.json'));
  res.json(productos);
});

// Endpoint simulado de pago
app.post('/api/pago', (req, res) => {
  const { carrito, metodoPago } = req.body;
  console.log('Compra recibida:', carrito, metodoPago);
  res.json({ mensaje: `Compra con ${metodoPago} registrada.` });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
