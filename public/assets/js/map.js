// Coordenadas de 13371 SW 190th Terrace Miami Fl, 33177
const map = L.map('map').setView([25.590237, -80.408989], 15);

// Capa base con OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Marcador personalizado
L.marker([25.590237, -80.408989])
  .addTo(map)
  .bindPopup('<b>Mulet International</b><br>13371 SW 190th Terrace<br>Miami, FL 33177')
  .openPopup();
