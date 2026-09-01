# Portfolio — Marco Rojas

Sitio estático de una sola página. Sin framework, sin npm y sin paso de build:
lo que hay en el repo es exactamente lo que se sirve.

```
index.html                 estructura y contenido en español
assets/css/styles.css      tokens de color, tipografía, layout y componentes
assets/js/content.js       diccionario ES/EN y datos de contacto
assets/js/main.js          idioma, tema, navegación activa, animaciones
assets/img/me-600.*        retrato de «Sobre mí», recortado a 3:2 (webp + jpg)
assets/img/me-1200.*       la misma foto para pantallas retina
assets/img/og-cover.png    vista previa al compartir el enlace (1200 × 630)
favicon.svg
.nojekyll                  evita que GitHub Pages procese el sitio con Jekyll
```

## Verlo en local

```bash
python -m http.server 5173
# luego abrir http://localhost:5173
```

También funciona abriendo `index.html` con doble clic (`file://`): los scripts son
clásicos, no módulos ES, justamente para eso.

## Editar el contenido

**Textos.** Cada elemento traducible lleva un atributo `data-i18n="clave"` en
`index.html`. El texto en español está escrito directamente en el HTML — así el
sitio se lee completo aunque JavaScript no cargue, y los buscadores lo indexan.
Ese mismo texto está también en `assets/js/content.js`, junto con su versión en
inglés.

Para cambiar una frase hay que tocar los dos sitios:

1. el texto visible en `index.html`
2. la clave correspondiente en `CONTENT.es` y en `CONTENT.en` de `content.js`

**Contacto.** Al final de `content.js` está el objeto `CONTACT`. El correo, el
teléfono y los enlaces se arman en el navegador a partir de esas piezas para no
dejar la dirección completa escrita en el HTML.

**Los dos tipos de proyecto.** El sitio los separa a propósito:

- Los **proyectos de cliente** viven dentro del puesto que los produjo. Cada
  entrada de «Experiencia» lleva un botón `.job__more` y, justo después, un
  `<dialog class="modal">` con sus tarjetas. Para añadir uno, copia una `.card`
  dentro del `<ul class="projects">` de ese `<dialog>`.
- Los **proyectos propios** son las tarjetas de la sección «Mis proyectos». Usan
  el mismo formato más un `<ul class="card__links">` al final con los enlaces al
  repositorio (Recomendautos tiene dos porque son dos repos).

El modal es el elemento nativo `<dialog>`: la trampa de foco, el cierre con Esc y
el fondo inerte los pone el navegador. `main.js` sólo añade la animación de
entrada y salida, el bloqueo del scroll de fondo y el disparo de las barras de
métrica, que el `IntersectionObserver` no puede ver mientras el modal está oculto.

Sin JavaScript no hay modal: los botones se ocultan y cada `<dialog>` se muestra
en línea bajo su propio puesto, así que el contenido sigue siendo legible e
indexable. Si se tocan los estilos del modal, comprueba también ese caso.

**Colores y tipografía.** Todo sale de las variables CSS al principio de
`styles.css`, en `:root` (tema claro) y `[data-theme="dark"]` (tema oscuro).

**El retrato.** El `<picture>` de «Sobre mí» sirve WebP con JPEG de respaldo, en
dos tamaños. Para cambiar la foto, parte de un original cuadrado y genera las
cuatro variantes recortadas a 3:2:

```python
from PIL import Image
im = Image.open("assets/img/tu-foto.jpg")
W, H = im.size
im = im.crop((0, int(H * 0.08), W, int(H * 0.08) + int(W / 1.5)))   # 3:2, 8 % de aire arriba
for w in (1200, 600):
    r = im.resize((w, int(w / 1.5)), Image.LANCZOS)
    r.save("assets/img/me-%d.jpg" % w, quality=82, optimize=True, progressive=True)
    r.save("assets/img/me-%d.webp" % w, quality=80, method=6)
```

En tema oscuro la imagen lleva `filter: brightness(.82)` para que un fondo claro
no deslumbre; ajústar en la sección «6b. Retrato» de `styles.css`.

## Pendientes

- [ ] Opcional: `assets/img/og-cover.png` (1200 × 630, la vista previa al
      compartir el enlace) está generada con Segoe UI porque Archivo no estaba
      instalado en el sistema. Si quieres que coincida exactamente con el sitio,
      rehazla con Archivo Expanded.


## Accesibilidad y detalles

- El idioma se resuelve en este orden: `?lang=es|en` en la URL → `localStorage` →
  idioma del navegador → español. El selector actualiza la URL, así que el enlace
  se puede compartir en un idioma concreto.
- Enlace para saltar al contenido, anillo de foco visible y `prefers-reduced-motion`
  respetado en todas lass animaciones.
