# buski87.dev — Buski87

Web estática (HTML/CSS/JS, sin build) para GitHub Pages.

## Páginas
- `index.html`: inicio genérico (tres áreas) con contacto general.
- `juegos.html`: juegos publicados, prototipos, paquetes y contacto de juegos.
- `web.html`: Webs & Apps (creación y mantenimiento de webs y aplicaciones), con su contacto.
- `ciber.html`: pentesting, SIEM con Wazuh y SOC, y DLP, con su contacto. **Oculta por ahora** (Ciberseguridad (oculta)): no está enlazada y lleva `noindex`. Para reactivarla: volver a añadir su enlace en el menú de los 4 HTML, su tarjeta en `index.html`, la opción "ciber" en `renderAreaSelect()` de `assets/app.js`, y quitar el `noindex`.
- Todas comparten `assets/app.js` (textos ES/EN y contacto) y `assets/style.css`. Al cambiar uno de los dos, sube el `?v=` en los HTML.

## Antes de publicar
1. Edita `CONFIG` al principio de `assets/app.js`: email y WhatsApp.
2. (Opcional) Añade capturas en `assets/img/` y pon `img: "assets/img/xxx.png"` en cada juego.

## Publicar
1. Crea un repo (p. ej. `buski87-site`), sube estos archivos a la rama `main`.
2. Settings → Pages → Source: `Deploy from a branch` → `main` / `(root)`.
3. En Pages → Custom domain: `buski87.dev` (el archivo `CNAME` ya está) y activa Enforce HTTPS.

## DNS (en tu registrador)
Registros A para `buski87.dev` (apex):
185.199.108.153 · 185.199.109.153 · 185.199.110.153 · 185.199.111.153

Registro CNAME `www` → `<tu-usuario>.github.io`

La propagación puede tardar de minutos a unas horas.

## Direcciones y SEO
- Las páginas se sirven sin `.html` (`/juegos`, `/web`, `/privacidad`); GitHub Pages lo hace solo. Cada página tiene su `canonical`, y si alguien entra por `.html` la barra se limpia sola.
- `sitemap.xml` y `robots.txt` en la raíz. La imagen para compartir es `assets/og-image.jpg` (1200x630) y el icono, `favicon.svg` y `apple-touch-icon.png`.
- Las capturas están en WebP (`assets/img/`). Para añadir más, conviértelas a `.webp` (calidad ~80) y referencia la ruta en `assets/app.js`.
- `aviso-legal.html` está completo y enlazado desde el pie de todas las páginas; también figura en `sitemap.xml`.

## Seguridad y SEO local
- **CSP:** cada página lleva una política de contenido en una `<meta>`. Si añades una página, ejecuta `python tools/update_csp.py` (revisa todas las páginas y falla si encuentra scripts o estilos en línea; el JavaScript de arranque está en `assets/boot*.js` y `assets/legal-*.js`).
- **404:** `404.html` es la página de error de GitHub Pages (con `noindex`).
- **security.txt:** `.well-known/security.txt` (hace falta el archivo vacío `.nojekyll` para que GitHub Pages sirva la carpeta). Caduca el 2027-11-17: renueva `Expires` cada año.
- **Datos estructurados (JSON-LD):** organización con dirección en la portada, servicio y preguntas frecuentes en Juegos y en Web. Las preguntas del JSON-LD son las mismas que las visibles; si cambias una FAQ, actualiza también el bloque.
- **Contacto:** sin formulario. Cada sección de contacto tiene 4 tarjetas (email, teléfono, WhatsApp y dirección); el correo y el WhatsApp se preparan en `assets/app.js` según la página (juegos, web o ciberseguridad) y según el juego o paquete pulsado. El correo y el WhatsApp se cambian en `CONFIG`.

## Iconos
Los logos de `assets/icons/` son de [Simple Icons](https://simpleicons.org) (licencia CC0); los logos son marcas de sus propietarios. Se asignan por nombre en el objeto `ICONS` de `assets/app.js`.

## Seguridad
Resumen de protecciones, cómo avisar de un fallo y lista de comprobación del propietario: ver `SECURITY.md`.
