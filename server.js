const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir archivos estáticos (HTML, CSS, imágenes)
app.use(express.static(path.join(__dirname)));

// Ruta principal que entrega tu index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});