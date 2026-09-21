// Lógica de la página de alertas.
// Maneja la selección de alertas, el resumen y el modal de confirmación.

const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const telefono = document.getElementById("telefono");
const provincia = document.getElementById("provincia");
const resumenAlertas = document.getElementById("resumen-alertas");
const resumenNombre = document.getElementById("resumen-nombre");
const resumenProvincia = document.getElementById("resumen-provincia");
const resumenSeleccion = document.getElementById("resumen-seleccion");
const formularioAlertas = document.getElementById("formulario-alertas");
const comprobanteAlertas = document.getElementById("comprobante-alertas");
const comprobanteNombre = document.getElementById("comprobante-nombre");
const comprobanteProvincia = document.getElementById("comprobante-provincia");
const comprobanteSeleccion = document.getElementById("comprobante-seleccion");
nombre.addEventListener("input", () => {
  nombre.value = nombre.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]/g, "");
});

edad.addEventListener("input", () => {
  edad.value = edad.value.replace(/[^0-9]/g, "");
});

telefono.addEventListener("input", () => {
  telefono.value = telefono.value.replace(/[^0-9+\-]/g, "");
});

const checkTodas = document.getElementById("todas");
// Seleccionamos los 3 checkboxes individuales usando la clase que les agregamos
const checksIndividuales = document.querySelectorAll(".check-alerta");

function actualizarResumen() {
  const nombreIngresado = nombre.value.trim();

  const provinciaSeleccionada = provincia.value
    ? provincia.options[provincia.selectedIndex].text
    : "Sin seleccionar";

  const alertasSeleccionadas = Array.from(checksIndividuales)
    .filter((check) => check.checked)
    .map((check) => {
      const etiqueta = document.querySelector(`label[for="${check.id}"]`);
      return etiqueta.textContent.trim();
    });

  resumenNombre.textContent = nombreIngresado || "Sin completar";
  resumenProvincia.textContent = provinciaSeleccionada;

  resumenSeleccion.textContent =
    alertasSeleccionadas.length > 0
      ? alertasSeleccionadas.join(", ")
      : "Ninguna";

  if (nombreIngresado || provincia.value || alertasSeleccionadas.length > 0) {
    resumenAlertas.classList.remove("d-none");
  } else {
    resumenAlertas.classList.add("d-none");
  }
}
nombre.addEventListener("input", actualizarResumen);

provincia.addEventListener("change", actualizarResumen);

checksIndividuales.forEach((check) => {
  check.addEventListener("change", actualizarResumen);
});

checkTodas.addEventListener("change", (e) => {
  const estaMarcado = e.target.checked;
  checksIndividuales.forEach((check) => {
    check.checked = estaMarcado; // Tilda o destilda los demás
  });
  actualizarResumen();
});

checksIndividuales.forEach((check) => {
  check.addEventListener("change", () => {
    if (!check.checked) {
      checkTodas.checked = false;
    }
  });
});
formularioAlertas.addEventListener("submit", (e) => {
  e.preventDefault();

  actualizarResumen();

  comprobanteNombre.textContent = resumenNombre.textContent;
  comprobanteProvincia.textContent = resumenProvincia.textContent;
  comprobanteSeleccion.textContent = resumenSeleccion.textContent;

  const modalComprobante = new bootstrap.Modal(comprobanteAlertas);
  modalComprobante.show();
});
