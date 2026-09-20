# ProgramacionIV
# Alerta Búsqueda

## Integrantes

- Valentina Pereyra 
- Gonzalo Miranda 
- Ignacio Rosconi

## Descripción del proyecto

Alerta Búsqueda es un proyecto web orientado a la consulta y difusión de información sobre personas
desaparecidas.
El objetivo del sitio es permitir que los usuarios puedan consultar casos de búsqueda, registrar una
solicitud de búsqueda y seleccionar qué tipos de alertas desean recibir.
Durante el desarrollo también incorporamos funcionalidades con JavaScript, como la búsqueda dinámica
de personas, el almacenamiento de solicitudes en el navegador y la actualización dinámica de las
preferencias de alertas.
El proyecto fue realizado con fines académicos para la materia Programación IV.

---

## Tecnologías utilizadas

Para desarrollar el proyecto utilizamos:

- HTML5 para la estructura de las páginas.
- CSS3 para los estilos personalizados.
- Bootstrap 5.0.2 para mejorar el diseño y el responsive.
- JavaScript Vanilla para agregar funcionalidades e interacción con el usuario.
- DOM y eventos de JavaScript.
- LocalStorage para guardar temporalmente solicitudes en el navegador.
- Bootstrap Icons para los íconos.
- Google Fonts para algunas tipografías.
- Git y GitHub para el control de versiones y el trabajo con ramas.
- Netlify para realizar el deploy del sitio.


## ¿Dónde utilizamos Flexbox?

Utilizamos Flexbox principalmente para alinear y distribuir elementos de la página.
En la primera versión del proyecto utilizamos propiedades como:
- display: flex
- align-items
- justify-content
- flex-direction
Por ejemplo, se utilizó Flexbox en la barra de navegación, en el contenido principal, en el buscador y en
distintos elementos que necesitaban alinearse horizontal o verticalmente.
Después del refactor con Bootstrap continuamos utilizando Flexbox mediante clases de Bootstrap como:
- d-flex
- d-inline-flex
- align-items-center
- justify-content-center
Un ejemplo se encuentra en la página de inicio, donde utilizamos estas clases para centrar y alinear el
contenido del encabezado principal.
---

## ¿Dónde utilizamos Grid?

En la primera versión del proyecto utilizamos CSS Grid para organizar contenido en columnas.
Por ejemplo, en style.css creamos la clase .seccion-casos utilizando:
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
Esto permitía que las tarjetas de los casos se acomodaran automáticamente dependiendo del espacio
disponible.
También utilizamos Grid en la sección .beneficios-inicio:
display: grid;
grid-template-columns: repeat(3, 1fr);
En este caso organizábamos los tres beneficios de la página de inicio en tres columnas.
Durante el refactor con Bootstrap mantuvimos el CSS anterior comentado y reemplazamos gran parte de
esta distribución por el sistema de grilla de Bootstrap.
Actualmente utilizamos clases como:
- row
- col-12
- col-sm-6
- col-md-4
- col-lg-3
- col-lg-8
Por ejemplo, en la página de búsqueda las tarjetas cambian su cantidad de columnas dependiendo del
tamaño de la pantalla.


## ¿Qué variables CSS creamos?

EEn el archivo style.css creamos variables dentro de :root para poder reutilizar colores y medidas del
diseño.
Las variables que utilizamos son:
:root {
 --alto-navbar: 110px;
 --color-primario: #f6f7f9;
 --color-secundario: #f9fafb;
 --color-blanco: #ffffff;
 --color-texto: #333333;
 --color-fondo-claro: #f4f4f4c2;
 --color-fondo-gris: #f4f4f4c2;
 --color-borde: #dddddd;
 --color-azul: #1f3fb4;
}
Estas variables nos permitieron tener valores reutilizables para los colores, fondos, bordes y el tamaño de
la barra de navegación.
Al realizar el refactor con Bootstrap parte del CSS original quedó comentado, pero conservamos las
variables y los estilos anteriores para mostrar el desarrollo realizado en las etapas anteriores del proyecto.

## ¿Cómo implementamos el Responsive Design?

Implementamos el Responsive Design utilizando principalmente el sistema responsive de Bootstrap.
En todas las páginas agregamos:
<meta name="viewport" content="width=device-width, initial-scale=1.0">
También utilizamos las columnas responsive de Bootstrap para que los elementos cambien su distribución
dependiendo del tamaño de la pantalla.
Por ejemplo:
col-12
col-sm-6
col-md-4
col-lg-3
De esta manera, las tarjetas y los formularios pueden ocupar diferentes cantidades de espacio en
celulares, tablets y computadoras.
También utilizamos clases responsive como:
d-none d-sm-inline
Esta clase se utiliza en el menú para ocultar el texto "Menú" en pantallas pequeñas y dejar solamente el
ícono.
En la primera versión del proyecto también utilizamos una Media Query:
@media (max-width: 768px)
Con ella modificábamos elementos como el tamaño de la barra de navegación, el logo, los textos y la
distribución de las secciones para pantallas pequeñas.
Después del refactor, gran parte de este comportamiento pasó a manejarse con las clases responsive de
Bootstrap.

## Estrategias:

Implementar un buscador dinámico de personas.
Crear un formulario para registrar solicitudes de búsqueda.
Incorporar un sistema de selección de alertas.
Utilizar Bootstrap y diseño responsive.
Organizar y presentar la información de manera clara y responsable.

## Objetivos:

Agilizar la consulta de casos de personas desaparecidas.
Facilitar el registro de nuevas solicitudes de búsqueda.
Permitir al usuario personalizar las alertas que desea recibir.
Garantizar una buena experiencia de uso en distintos dispositivos.
Favorecer la difusión responsable de información relacionada con las búsquedas.