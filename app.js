const BACKEND_URL = "https://script.google.com/macros/s/AKfycbz8hPvMK5SEDni0j_kjbWCqLOSFEFigvoCkO8hXN9RVOrmkkmaPDkQhOKC1peAjeh4sFQ/exec";

document.getElementById("incidenciaForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    tipo: document.getElementById("tipo").value,
    descripcion: document.getElementById("descripcion").value,
    ubicacion: document.getElementById("ubicacion").value,
  };

  try {
    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    document.getElementById("mensaje").textContent = "✅ Datos enviados correctamente.";
    console.log("Respuesta del servidor:", result);

    // Limpia el formulario
    document.getElementById("incidenciaForm").reset();
  } catch (error) {
    console.error("Error al enviar datos:", error);
    document.getElementById("mensaje").textContent = "❌ Error al enviar los datos.";
  }
});

