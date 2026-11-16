# buski87.dev — Buski87 Games

Web estática (HTML/CSS/JS, sin build) para GitHub Pages.

## Antes de publicar
1. Edita `CONFIG` al principio de `assets/app.js`: email y WhatsApp de Plenstudio.
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
