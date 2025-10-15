// URL del backend de Google Apps Script
const scriptURL = 'https://script.google.com/macros/s/AKfycbz8hPvMK5SEDni0j_kjbWCqLOSFEFigvoCkO8hXN9RVOrmkkmaPDkQhOKC1peAjeh4sFQ/exec';

const form = document.getElementById('sigidForm');
const estado = document.getElementById('estado');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  estado.textContent = "⏳ Enviando datos...";
  estado.style.color = "#555";

  const formData = new FormData(form);

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: formData,
      mode: 'cors',
    });

    if (!response.ok) throw new Error("Error de conexión");

    const result = await response.json();

    if (result.status === 'success') {
      estado.textContent = "✅ Registro guardado correctamente.";
      estado.style.color = "green";
      form.reset();
    } else {
      estado.textContent = "⚠️ Hubo un problema: " + (result.message || "Intenta nuevamente");
      estado.style.color = "orange";
    }
  } catch (error) {
    console.error("Error al enviar datos:", error);
    estado.textContent = "❌ Error al enviar datos. Revisa la conexión o permisos.";
    estado.style.color = "red";
  }
});
