const express = require("express");
const path = require("path");
const app = express();
const productos = require("./productos.json");

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Endpoint para obtener productos
app.get("/api/productos", (req, res) => {
  res.json(productos);
});
//esto le da el inicio 
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});
