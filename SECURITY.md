# Seguridad de buski87.dev

## Cómo avisar de un fallo
Escribe a **buski1987@gmail.com** (también en `/.well-known/security.txt`). Indica la dirección afectada y cómo reproducirlo.
No hay programa de recompensas, pero se agradece el aviso y se responde lo antes posible.

## Qué protege la web
- **Sitio estático** (GitHub Pages): no hay servidor propio, base de datos, panel de acceso ni contraseñas que atacar.
- **HTTPS siempre**: `http://` y `www` redirigen a `https://buski87.dev`; el dominio `.dev` además obliga a HTTPS en los navegadores (HSTS precargado).
- **Política de contenido (CSP) estricta** en cada página: `script-src 'self'` y `style-src 'self'` (sin `unsafe-inline` ni hashes: no hay scripts, estilos ni atributos `style=""` en línea), `connect-src 'none'` (sin conexiones desde JavaScript), `frame-src 'none'` y `object-src 'none'`. `upgrade-insecure-requests` fuerza HTTPS. Se recalcula con `python tools/update_csp.py`, que además falla si alguien añade algo en línea que la política bloquearía.
- **Sin cookies ni analítica**; solo se guarda en el navegador el idioma elegido.
- **Sin dependencias externas**: ni librerías, ni fuentes, ni scripts de terceros, ni formularios. Los iconos están en `assets/icons/`.
- **Enlaces externos** con `rel="noopener noreferrer"`.
- **Código sin secretos**: no hay claves, tokens ni contraseñas en el repositorio ni en su historial.

## Contacto
No hay formulario: el contacto es por email, teléfono y WhatsApp, con el mensaje ya preparado según la página. Así no se recogen datos desde la web ni se depende de servicios externos (antes se usaban Web3Forms y hCaptcha; ya no).

## Lista de comprobación del propietario (fuera del código)
- [ ] **Verificación en dos pasos** en: cuenta de GitHub, cuenta de Squarespace (dominio), cuenta de Google (Search Console) y correo `buski1987@gmail.com`.
- [ ] **Bloqueo de transferencia del dominio** activado en Squarespace Domains.
- [ ] **Privacidad WHOIS** del dominio activada (evita publicar datos personales).
- [ ] **Registro CAA** en el DNS que limite quién puede emitir certificados (por ejemplo, `letsencrypt.org`), si el panel lo permite.
- [ ] **DNSSEC** activado, si Squarespace lo ofrece para `.dev`.
- [ ] En GitHub: *Settings → Pages → Enforce HTTPS* activado; *Settings → Code security*: alertas de secretos activadas.
- [ ] Renovar la fecha `Expires` de `.well-known/security.txt` cada año (caduca el 2027-11-17).
- [ ] No poner nunca contraseñas ni claves en archivos del repositorio.

## Limitaciones conocidas
GitHub Pages no permite configurar cabeceras HTTP (`X-Frame-Options`, `frame-ancestors`, `Permissions-Policy`, `HSTS` propio). Si se quieren, hay que poner un proxy delante, como Cloudflare (plan gratuito), que además añade protección contra ataques de denegación de servicio.
