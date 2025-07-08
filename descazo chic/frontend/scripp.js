const API_URL = "https://tu-app-en-render.onrender.com"; // Cambiar al endpoint real en Render

async function cargarProductos() {
  const res = await fetch(`${API_URL}/api/productos`);
  const productos = await res.json();
  const main = document.querySelector("main");
  main.innerHTML = "";
  productos.forEach(p => {
    const card = document.createElement("div");
    card.className = "bg-white shadow rounded p-4";
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" class="rounded mb-2">
      <h2 class="text-lg font-semibold">${p.nombre}</h2>
      <p class="text-gray-500">${p.descripcion}</p>
      <button onclick="addToCart('${p.nombre}')" class="bg-pink-500 text-white px-4 py-2 mt-2 rounded">Agregar al carrito</button>
    `;
    main.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", cargarProductos);

// El resto del código del carrito y login va igual que antes
