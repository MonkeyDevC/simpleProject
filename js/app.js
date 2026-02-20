document.addEventListener("DOMContentLoaded", function() {
  const boton = document.getElementById("btnCalcular");

  boton.addEventListener("click", calcular);
});

function calcular() {
  const meta = parseFloat(document.getElementById("meta").value);
  const promedio = parseFloat(document.getElementById("promedio").value);
  const comision = parseFloat(document.getElementById("comision").value);

  const resultadoDiv = document.getElementById("resultado");

  if (!meta || !promedio || !comision) {
    resultadoDiv.innerHTML = "⚠️ Por favor completa todos los campos.";
    return;
  }

  const ingresoReal = promedio * (1 - comision / 100);
  const carrerasNecesarias = Math.ceil(meta / ingresoReal);

  resultadoDiv.innerHTML = `
    🚗 Necesitas aproximadamente <strong>${carrerasNecesarias}</strong> carreras para alcanzar tu meta.
  `;
}