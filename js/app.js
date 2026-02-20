function calcular() {
      const meta = parseFloat(document.getElementById("meta").value);
      const promedio = parseFloat(document.getElementById("promedio").value);
      const comision = parseFloat(document.getElementById("comision").value) / 100;

      if (!meta || !promedio || !comision) {
        document.getElementById("resultado").innerHTML = "Por favor completa todos los campos.";
        return;
      }

      const ingresoPorCarrera = promedio - (promedio * comision);
      const carrerasNecesarias = Math.ceil(meta / ingresoPorCarrera);

      document.getElementById("resultado").innerHTML = `
        Necesitas aproximadamente <strong>${carrerasNecesarias}</strong> carreras hoy.
        <br><br>
        Ingreso neto por carrera: <strong>${ingresoPorCarrera.toFixed(0)} COP</strong>
      `;
    }