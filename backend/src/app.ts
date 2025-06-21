import express from 'express';
import path from 'path';

const app = express();

app.use(express.json());

// Servir el frontend (index.html, script.js, style.css)
app.use(express.static(path.join(__dirname, '../../frontend')));

// Ruta de prueba
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

export default app;
