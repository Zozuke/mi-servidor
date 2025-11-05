const contenedor = document.getElementById("productos");

fetch("/api/productos")
  .then(res => res.json())
  .then(data => {
    data.forEach(prod => {
      const div = document.createElement("div");
      div.className = "producto";
      div.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>$${prod.precio}</p>
        <button>Comprar</button>
      `;
      contenedor.appendChild(div);
    });
  })
  .catch(err => console.error("Error cargando productos:", err));
