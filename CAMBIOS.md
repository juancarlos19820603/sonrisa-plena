# Sonrisa Plena v2 – Lista de cambios por archivo

**Cómo ejecutarlo:** descomprime la carpeta, ábrela en VS Code y usa **Live Server** (clic derecho en `index.html` → *Open with Live Server*). Debe abrirse con un servidor porque `main.js` carga las fotos desde `img/`.

```
SonrisaPlena_v2/
├── index.html    → estructura (HTML semántico)
├── styles.css    → capa visual (tokens, componentes, animaciones)
├── main.js       → lógica (agendamiento, Mis citas, panel, animaciones)
├── img/          → 21 fotos .jpg (antes iban en base64 dentro del HTML)
└── CAMBIOS.md
```

## Arquitectura (antes → ahora)
- **Antes:** un solo `index.html` de ~1,5 MB con CSS, JS y fotos en base64.
- **Ahora:** HTML, CSS y JS separados (separación de responsabilidades) y fotos como archivos, con `loading="lazy"`. El HTML pesa unos 30 KB y las fotos se descargan solo cuando se van a ver.

## styles.css (nuevo, reemplaza el `<style>` interno)
- **Tokens en `:root`:** `--navy #0A1A33`, `--gold #D2B67C`, `--gold-text #7A5B24`, `--cream #F1F4F8` (fondo de secciones), `--primary-tint`, `--muted`, radios de 16 px y sombras suaves. Incluye alias de los nombres anteriores para no romper el JS.
- **Dirección visual B "navy profundo y oro champán":** navy `#0A1A33`, oro champán `#D2B67C` (sobre fondos oscuros) y oro oscuro `#7A5B24` para texto sobre blanco (contraste 6,3:1). Se eliminó el verde.
- **Tipografía:** Manrope en toda la página; títulos ligeros (300) con la frase clave en negrita, y etiquetas en mayúsculas con letras espaciadas. Escala fluida con `clamp()`.
- **Enfoque mobile-first:** los estilos base son para celular y `@media (min-width)` agrega el escritorio.
- **Componentes nuevos:** barra superior, encabezado que se encoge, franja de confianza, tarjetas de servicio, pasos 01-02-03, carrusel, testimonios, FAQ, llamado final, mapa del pie, barra fija inferior en celular, barra de progreso y resumen compacto del agendamiento.
- **Accesibilidad:**
  - foco visible (`:focus-visible`);
  - botones y controles de mínimo 44 px;
  - contraste AA;
  - `prefers-reduced-motion` desactiva todas las animaciones.
- **Se eliminó:** el CSS del probador RA y las animaciones de scroll de la versión anterior.

## index.html
- **Inicio reestructurado en 11 bloques:**
  1. barra superior (dirección y teléfono);
  2. encabezado fijo con "Agendar cita";
  3. hero con el título "Tu sonrisa, *en manos expertas*", los botones "Agendar cita" y "Escribir por WhatsApp", la calificación y la foto;
  4. franja de cifras;
  5. 8 servicios;
  6. cómo funciona;
  7. carrusel de especialistas;
  8. testimonios;
  9. preguntas frecuentes;
  10. llamado final;
  11. pie con mapa, horarios y contacto.
- **Agendar:** barra de progreso (`role="progressbar"`), resumen compacto fijo en celular, botón "Atrás" y, en la confirmación, "Añadir al calendario".
- **Formulario:** cada campo tiene `aria-describedby` hacia su mensaje de error (`aria-live`).
- **Se conservan** los mismos `id` que usa la lógica de agendamiento, Mis citas, panel, Nosotros y Contacto.

## main.js (la lógica de negocio se conserva)
- **Sin cambios:** datos (8 servicios, 11 especialistas), reglas del agendamiento (especialistas filtrados por servicio, horarios ocupados), guardado (base de datos o navegador), Mis citas, cancelación y panel.
- **Fotos:** `pic()` carga `img/<id>.jpg` con `loading="lazy"`.
- **Rutas:** además de `#agendar-ID` acepta `#agendar?servicio=ID`. Las 8 tarjetas del inicio llevan al paso 1 con el servicio preseleccionado.
- **Animaciones nuevas:**
  - a) título palabra por palabra (600 ms, en CSS);
  - b) encabezado que se encoge después de 80 px de scroll (`requestAnimationFrame` y evento pasivo);
  - c) tarjetas que aparecen subiendo 16 px con 80 ms entre una y otra (`IntersectionObserver`);
  - d) contador de cifras que se anima una sola vez.
- **Carrusel accesible:** `aria-roledescription`, diapositivas "n de 11", botones que se deshabilitan en los extremos y navegación con las flechas del teclado.
- **FAQ:** acordeón con `aria-expanded` y `aria-controls`, y región con `aria-labelledby`.
- **Validación en línea:** cada campo se valida al salir de él y se corrige mientras escribes. El documento y el celular solo aceptan números.
- **.ics:** archivo iCalendar (RFC 5545) con hora de Medellín (UTC-5), duración del servicio y recordatorio 2 horas antes.
- **Barra inferior en celular:** el `body` recibe `padding-bottom` igual a su alto y la barra se oculta dentro de Agendar.

## Encabezados animados por tema (páginas internas)
- Testimonios en estilo editorial: sin tarjeta ni fondo gris, con línea dorada lateral y la cita en tamaño grande.
- Fondo navy con texto blanco (alto contraste) e íconos dorados que se mueven según la página:
  - Servicios: dientes y destellos;
  - Agendar y Panel: calendarios y relojes;
  - Mis citas: check que late;
  - Nosotros: corazones y escudos;
  - Contacto: chat, teléfono y ubicación.
- Se hace solo con CSS (`transform` y `opacity`); los íconos son decorativos (`aria-hidden`), en celular se muestran menos y se detienen con "reducir movimiento".

## Modo oscuro
- Botón luna/sol en el encabezado (44 px, `aria-pressed` y etiqueta que cambia).
- Al abrir, sigue la preferencia del sistema (`prefers-color-scheme`); si el usuario elige, se recuerda en `localStorage` (con `try/catch`).
- Un script pequeño en el `<head>` aplica el tema antes de pintar, para evitar el destello blanco.
- Tokens redefinidos en `[data-theme="dark"]`: fondo `#0B1424`, superficies `#111E33`, texto `#E8EDF5`, acentos dorados. El botón principal pasa a dorado para mantener el contraste.

## Seguridad (se mantiene)
- Los datos del usuario se pintan con `textContent`, nunca con `innerHTML`.
- Regex por campo, código de reserva con `crypto.getRandomValues` y documento enmascarado.
- Enlaces externos con `rel="noopener"`.

## Nota académica
Las cifras, la calificación y los testimonios son **de ejemplo** y así se indica en la página.

## Ajustes para la rúbrica de la Actividad 4 (21 de noviembre de 2026)

- **index.html**: sección «Así creamos este sitio» en Inicio con el video del proyecto (`#video`), tabla de precios y tiempos y glosario con enlaces en Servicios, tabla de horarios y listas en Contacto, enlace al video en el pie y segunda fuente (Fraunces) en la línea 12.
- **styles.css** (sección 17, al final): títulos en Fraunces, estilos de la sección del video, tablas con fondo y borde de color, y listas.
- **main.js** (sección 17, al final): constante `VIDEO_YOUTUBE` para pegar el enlace del video, tabla de servicios generada con los datos de `SERVICIOS` y desplazamiento a `#video`. Se corrigió el mensaje de almacenamiento de la línea 48.
- Las líneas citadas en el informe y en el guion (index.html 1-13 y 27-37, styles.css 8-20, main.js 97-106 y 200-205) no cambiaron de posición.

## Corrección de fotos del carrusel de especialistas (21 de noviembre de 2026)

- **main.js** (función `pic`, línea 12): si una foto no carga, se reintenta una vez; si vuelve a fallar, se muestran las iniciales del especialista en lugar del ícono de imagen rota.
- **main.js** (`renderCarrusel`): las fotos del carrusel cargan de inmediato (sin `loading="lazy"`), porque la carga diferida dentro de un desplazamiento horizontal no siempre se dispara.
- **styles.css** (al final): estilo `.foto-ph` para las iniciales.

## Política de tratamiento de datos (Ley 1581 de 2012)

- **index.html**: los textos «Política de datos» del formulario de citas, del formulario de contacto y del pie de página ahora abren un diálogo (`#dlg-pol`) con los datos que se piden, para qué se usan, dónde se guardan y los derechos del titular.
- **main.js** (sección 18, al final): un solo manejador abre el diálogo desde los tres enlaces. El botón «Borrar mis datos de este navegador» elimina solo la llave `sonrisa-plena-citas` de `localStorage` (derecho de supresión) y conserva el tema claro/oscuro.
- **styles.css** (sección 18, al final): estilo del enlace `.link-pol` (accesible con teclado) y del diálogo largo `.dlg-doc`.

## Pestaña «Video» en el menú

- **index.html**: nueva pestaña «Video» en el menú principal (entre Nosotros y Contacto) y nueva vista `#v-video` con el video del proyecto y una explicación en texto de lo que se dice en cada parte (problema y objetivo, estructura y HTML, navegación y agendamiento, diseño, Git y publicación). La sección del video sale de Inicio.
- **main.js**: se agregó `'video'` a la lista `VISTAS` (línea 96), así `route()` muestra la vista sin cambiar su código. Se retiró el desplazamiento automático a `#video`, que ya no hace falta.
- **styles.css** (sección 19, al final): tarjetas del resumen, adaptables y con modo oscuro.
- La línea 34 de index.html cambió de contenido (se agregó la pestaña), sin mover las demás líneas citadas en el informe.

## Historial de versiones

- **index.html**: enlace «Historial de versiones» en el pie (columna Contacto) y diálogo `#dlg-hist` con las versiones 1.0 a 1.5 y el enlace a los commits del repositorio.
- **main.js** y **styles.css** (sección 19, al final): apertura y cierre del diálogo y estilo de la lista.
- Gestión de cambios: cada versión se subió como un commit separado, con su descripción, para conservar la trazabilidad.

## Video del proyecto en YouTube (versión 1.6)

- **main.js**: `VIDEO_YOUTUBE` apunta al video publicado (https://youtu.be/_PgZr43LglI). La pestaña Video lo muestra con el reproductor de youtube-nocookie.com (modo de privacidad mejorada de YouTube).
- **index.html**: versión 1.6 en el historial de versiones y ajuste del texto sobre el uso de inteligencia artificial en el resumen del video.
- **main.js** y **styles.css** (sección 21): enlace «Ver el video en YouTube» bajo el título de la sección. Si el sitio se abre como archivo (file://), el navegador no envía el encabezado Referer, que YouTube exige (error 153); en ese caso se muestra el enlace en lugar del reproductor.
