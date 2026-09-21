// Lógica de la página de registro.
// Maneja las validaciones del formulario, la carga de fotografía y el guardado en localStorage.

const formularioRegistro = document.getElementById("formulario-registro");
const botonEnviar = formularioRegistro.querySelector('button[type="submit"]');
const nombrePersona = document.getElementById("nombrePersona");
const apellidoPersona = document.getElementById("apellidoPersona");
const nombreContacto = document.getElementById("nombreContacto");
const dniContacto = document.getElementById("dniContacto");
const telefonoContacto = document.getElementById("telefonoContacto");
const edadPersona = document.getElementById("edadPersona");
const provincia = document.getElementById("provincia");
const fechaDesaparicion = document.getElementById("fechaDesaparicion");
const lugar = document.getElementById("lugar");
const descripcion = document.getElementById("descripcion");
const infoExtra = document.getElementById("infoExtra");
const foto = document.getElementById("foto");

edadPersona.addEventListener("input", () => {
  edadPersona.value = edadPersona.value.replace(/[^0-9]/g, "");
});

function permitirSoloLetras(campo) {
  campo.addEventListener("input", () => {
    campo.value = campo.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]/g, "");
  });
}

permitirSoloLetras(nombrePersona);
permitirSoloLetras(apellidoPersona);
permitirSoloLetras(nombreContacto);

dniContacto.addEventListener("input", () => {
  dniContacto.value = dniContacto.value.replace(/[^0-9]/g, "");
});

telefonoContacto.addEventListener("input", () => {
  telefonoContacto.value = telefonoContacto.value.replace(/[^0-9+\-]/g, "");
});

function convertirFotoBase64(archivo) {
  return new Promise((resolve, reject) => {
    if (!archivo) {
      resolve("");
      return;
    }

    const lector = new FileReader();

    lector.onload = () => {
      resolve(lector.result);
    };

    lector.onerror = () => {
      reject(lector.error);
    };

    lector.readAsDataURL(archivo);
  });
}

formularioRegistro.addEventListener("submit", async (e) => {
  e.preventDefault();

  const archivoFoto = foto.files[0];
  const fotoBase64 = await convertirFotoBase64(archivoFoto);

  const nuevaSolicitud = {
    nombre: nombrePersona.value.trim(),
    apellido: apellidoPersona.value.trim(),
    edad: edadPersona.value,
    provincia: provincia.options[provincia.selectedIndex].text,
    fechaDesaparicion: fechaDesaparicion.value,
    lugar: lugar.value.trim(),
    descripcion: descripcion.value.trim(),
    infoExtra: infoExtra.value.trim(),
    foto: fotoBase64,
    estado: "Pendiente de verificación",
  };

  const solicitudesGuardadas =
    JSON.parse(localStorage.getItem("solicitudesBusqueda")) || [];

  solicitudesGuardadas.push(nuevaSolicitud);

  localStorage.setItem(
    "solicitudesBusqueda",
    JSON.stringify(solicitudesGuardadas),
  );

  botonEnviar.textContent = "SOLICITUD ENVIADA";
});
