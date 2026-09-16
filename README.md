# ProgramacionIV
# Alerta Búsqueda

## Integrantes

- Valentina Pereyra 
- Gonzalo Miranda 
- Ignacio Rosconi

## Descripción del proyecto

Alerta Búsqueda es una plataforma web orientada a la difusión y consulta de información sobre personas desaparecidas.

El proyecto busca facilitar el acceso a información sobre búsquedas activas y permitir que los usuarios puedan consultar casos, registrar solicitudes de búsqueda y optar por recibir alertas relacionadas con personas desaparecidas.

La plataforma está pensada como una herramienta de apoyo y difusión de información, teniendo en cuenta que los casos deben ser verificados antes de su publicación y que no reemplaza el trabajo de las autoridades correspondientes.

Actualmente el sitio cuenta con las siguientes secciones:

- Página de inicio.
- Búsqueda de personas.
- Registro de una persona desaparecida.
- Suscripción para recibir alertas.
- Información relacionada con las búsquedas.

---

## Tecnologías utilizadas

Para desarrollar el proyecto utilizamos:

- HTML5.
- CSS3.
- Bootstrap 5.
- Flexbox.
- CSS Grid.
- Variables CSS.
- Media Queries.
- Git.
- GitHub.
- Netlify para el deploy del sitio.

---

## ¿Dónde utilizamos Flexbox?

Utilizamos Flexbox en diferentes partes de la interfaz para organizar elementos de forma flexible.

Por ejemplo:

- En la barra de navegación.
- En la distribución del logo y el nombre de Alerta Búsqueda.
- En los botones y elementos del encabezado.
- En algunas secciones de contenido.
- En la organización de tarjetas y elementos que necesitan alinearse horizontal o verticalmente.

Flexbox nos permite controlar la alineación, separación y distribución de los elementos de una manera adaptable.

---

## ¿Dónde utilizamos Grid?

Utilizamos CSS Grid principalmente para organizar diferentes secciones del sitio en columnas.

Por ejemplo:

- En la organización de tarjetas de personas buscadas.
- En algunas secciones informativas.
- En la distribución del contenido principal de la página.
- En diseños que necesitan cambiar la cantidad de columnas dependiendo del tamaño de la pantalla.

Grid nos permite crear una estructura ordenada y adaptable para computadoras, tablets y celulares.

---

## ¿Qué variables CSS creamos?

En el archivo `style.css` utilizamos variables CSS dentro de `:root` para mantener una identidad visual consistente y facilitar futuros cambios de diseño.

Algunas de las variables utilizadas corresponden a:

- Colores principales.
- Colores de alertas.
- Colores de texto.
- Colores de fondo.
- Bordes.
- Sombras.
- Espaciados.
- Tipografía.
- Radios de los elementos.

Ejemplo:

```css
:root {
    --primary-color: #2563eb;
    --text-color: #333333;
    --background-color: #ffffff;
}