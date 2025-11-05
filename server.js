const express = require("express");
const path = require("path");
const app = express();
const productos = require("./productos.json");

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(__dirname));

// Ruta raíz
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Endpoint para obtener productos
app.get("/api/productos", (req, res) => {
  res.json(productos);
});

// Servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});
