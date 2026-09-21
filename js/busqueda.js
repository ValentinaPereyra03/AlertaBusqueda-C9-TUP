// Lógica de la página de búsqueda.
// Maneja el buscador, las tarjetas, el modal de detalle y las solicitudes guardadas.

function mostrarDetallePersona(persona) {
  document.getElementById("modalNombre").textContent =
    `${persona.nombre} ${persona.apellido}`;

  document.getElementById("modalEdad").textContent =
    persona.edad || "No especificada";

  document.getElementById("modalProvincia").textContent =
    persona.provincia || "No especificada";

  document.getElementById("modalFecha").textContent =
    persona.fechaDesaparicion || "No especificada";

  document.getElementById("modalLugar").textContent =
    persona.lugar || "No especificado";

  document.getElementById("modalDescripcion").textContent =
    persona.descripcion || "Sin descripción";

  document.getElementById("modalInfoExtra").textContent =
    persona.infoExtra || "Sin información adicional";

  document.getElementById("modalEstado").textContent =
    persona.estado || "Búsqueda activa";

  const modalFoto = document.getElementById("modalFoto");

  if (persona.foto) {
    modalFoto.src = persona.foto;
    modalFoto.style.display = "";
  } else {
    modalFoto.src = "";
    modalFoto.style.display = "none";
  }

  const modal = new bootstrap.Modal(
    document.getElementById("modalDetallePersona"),
  );

  modal.show();
}

const casosFijos = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    edad: "28",
    provincia: "Tucumán",
    fechaDesaparicion: "No especificada",
    lugar: "Tucumán",
    descripcion: "Cabello de color castaño",
    infoExtra: "Vestido de ropa deportiva",
    estado: "Búsqueda activa",
    foto: "img/personadesaparecida2.jpg",
  },
  {
    nombre: "María",
    apellido: "Gómez",
    edad: "70",
    provincia: "Córdoba",
    fechaDesaparicion: "12/05",
    lugar: "Córdoba",
    descripcion: "Cabello de color blanco.",
    infoExtra: "Vestida de camison con flores rosas, presenta demencia..",
    estado: "Búsqueda activa",
    foto: "img/personadesaparecida1.jpg",
  },
  {
    nombre: "Carlos",
    apellido: "López",
    edad: "60",
    provincia: "Buenos Aires",
    fechaDesaparicion: "No especificada",
    lugar: "Buenos Aires",
    descripcion: "Cabello de color blanco",
    infoExtra: "Vestido de camisa blanca y pantalon negro, presenta demencia.",
    estado: "Búsqueda activa",
    foto: "img/personadesaparecida3.jpeg",
  },
];

const tarjetasFijas = document.querySelectorAll(".caso-fijo");

tarjetasFijas.forEach((tarjeta) => {
  tarjeta.addEventListener("click", (e) => {
    e.preventDefault();

    const indiceCaso = tarjeta.dataset.caso;
    mostrarDetallePersona(casosFijos[indiceCaso]);
  });
});

function quitarAcentos(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
const solicitudesGuardadas =
  JSON.parse(localStorage.getItem("solicitudesBusqueda")) || [];

console.log(solicitudesGuardadas);
const contenedorFichas = document.querySelector("#contenedor-fichas .row");
solicitudesGuardadas.forEach((solicitud) => {
  const nuevaFicha = document.createElement("div");
  nuevaFicha.classList.add("col-sm-6", "col-md-4", "col-lg-3", "col-ficha");

  const tarjeta = document.createElement("div");
  tarjeta.classList.add(
    "card",
    "h-100",
    "border-0",
    "shadow-sm",
    "tarjeta-animada",
  );

  if (solicitud.foto) {
    const imagen = document.createElement("img");

    imagen.src = solicitud.foto;
    imagen.classList.add("card-img-top");
    imagen.alt = `Fotografía de ${solicitud.nombre} ${solicitud.apellido}`;
    imagen.style.height = "250px";
    imagen.style.objectFit = "cover";

    tarjeta.appendChild(imagen);
  } else {
    const sinFoto = document.createElement("div");

    sinFoto.classList.add(
      "d-flex",
      "align-items-center",
      "justify-content-center",
      "bg-secondary",
      "text-white",
      "fw-bold",
    );

    sinFoto.style.height = "250px";
    sinFoto.textContent = "Sin fotografía";

    tarjeta.appendChild(sinFoto);
  }

  const cuerpoTarjeta = document.createElement("div");
  cuerpoTarjeta.classList.add("card-body", "text-center");

  const textoFicha = document.createElement("p");
  textoFicha.classList.add(
    "card-text",
    "fw-bold",
    "text-dark",
    "texto-ficha",
    "small",
  );

  textoFicha.textContent = `${solicitud.nombre} ${solicitud.apellido} - ${solicitud.estado}`;

  cuerpoTarjeta.appendChild(textoFicha);
  tarjeta.appendChild(cuerpoTarjeta);
  tarjeta.addEventListener("click", () => {
    mostrarDetallePersona(solicitud);
  });
  nuevaFicha.appendChild(tarjeta);
  contenedorFichas.appendChild(nuevaFicha);
});
const inputBuscador = document.getElementById("input-buscador");
const parametros = new URLSearchParams(window.location.search);
const busquedaInicio = parametros.get("q");

if (busquedaInicio) {
  inputBuscador.value = busquedaInicio;
}
const fichas = document.querySelectorAll(".col-ficha");

inputBuscador.addEventListener("keyup", (e) => {
  const textoBusqueda = quitarAcentos(e.target.value.toLowerCase());
  let coincidencias = 0;

  fichas.forEach((ficha) => {
    const textoFichaOriginal = ficha
      .querySelector(".texto-ficha")
      .textContent.toLowerCase();
    const textoFichaLimpio = quitarAcentos(textoFichaOriginal);

    if (textoFichaLimpio.includes(textoBusqueda)) {
      ficha.style.display = "";
      coincidencias++;
    } else {
      ficha.style.display = "none";
    }
  });

  manejarMensajeSinResultados(coincidencias);
});

if (busquedaInicio) {
  inputBuscador.dispatchEvent(new Event("keyup"));
}

function manejarMensajeSinResultados(coincidencias) {
  const contenedorRow = document.querySelector("#contenedor-fichas .row");
  let alertaExistente = document.getElementById("mensaje-sin-resultados");

  if (coincidencias === 0 && !alertaExistente) {
    const nuevoMensaje = document.createElement("div");
    nuevoMensaje.id = "mensaje-sin-resultados";
    nuevoMensaje.classList.add(
      "col-12",
      "alert",
      "alert-warning",
      "text-center",
      "fw-bold",
      "mt-4",
      "shadow-sm",
    );
    nuevoMensaje.textContent =
      "No se encontraron casos que coincidan con la búsqueda.";
    contenedorRow.appendChild(nuevoMensaje);
  } else if (coincidencias > 0 && alertaExistente) {
    alertaExistente.remove();
  }
}
