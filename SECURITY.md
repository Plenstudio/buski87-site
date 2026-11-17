# Seguridad de buski87.dev

## Cómo avisar de un fallo
Escribe a **buski1987@gmail.com** (también en `/.well-known/security.txt`). Indica la dirección afectada y cómo reproducirlo.
No hay programa de recompensas, pero se agradece el aviso y se responde lo antes posible.

## Qué protege la web
- **Sitio estático** (GitHub Pages): no hay servidor propio, base de datos, panel de acceso ni contraseñas que atacar.
- **HTTPS siempre**: `http://` y `www` redirigen a `https://buski87.dev`; el dominio `.dev` además obliga a HTTPS en los navegadores (HSTS precargado).
- **Política de contenido (CSP)** en cada página: solo se ejecutan los scripts propios y los hashes de los scripts en línea; las conexiones solo van a este sitio y a `api.web3forms.com`. Se recalcula con `python tools/update_csp.py`.
- **Sin cookies ni analítica**; solo se guarda en el navegador el idioma y la hora del último envío (anti-spam).
- **Sin dependencias externas**: ni librerías, ni fuentes, ni scripts de terceros. Los iconos están en `assets/icons/`.
- **Enlaces externos** con `rel="noopener noreferrer"`.
- **Código sin secretos**: la clave de Web3Forms (`web3formsKey`) es pública por diseño; no hay tokens ni contraseñas en el repositorio ni en su historial.

## Formularios
- Se envían a Web3Forms por HTTPS. Protecciones en el navegador: campo trampa (`botcheck`), tiempo mínimo de relleno, un envío por minuto, bloqueo de enlaces en el nombre y el mensaje, límites de longitud y validación del teléfono.
- Estas protecciones **solo frenan a bots sencillos**: quien llame directamente a la API de Web3Forms puede saltárselas. Si aparece spam, activar **hCaptcha** en el panel de Web3Forms (implica cargar un script de terceros: habría que actualizar la CSP y la política de privacidad).
- El formulario usa `method="post"`: si JavaScript falla, los datos personales **no** viajan en la dirección.

## Lista de comprobación del propietario (fuera del código)
- [ ] **Verificación en dos pasos** en: cuenta de GitHub, cuenta de Squarespace (dominio), cuenta de Google (Search Console) y correo `buski1987@gmail.com`.
- [ ] **Bloqueo de transferencia del dominio** activado en Squarespace Domains.
- [ ] **Privacidad WHOIS** del dominio activada (evita publicar datos personales).
- [ ] **Registro CAA** en el DNS que limite quién puede emitir certificados (por ejemplo, `letsencrypt.org`), si el panel lo permite.
- [ ] **DNSSEC** activado, si Squarespace lo ofrece para `.dev`.
- [ ] En GitHub: *Settings → Pages → Enforce HTTPS* activado; *Settings → Code security*: alertas de secretos activadas.
- [ ] Renovar la fecha `Expires` de `.well-known/security.txt` cada año (caduca el 2027-11-17).
- [ ] Revisar cada cierto tiempo el panel de Web3Forms: envíos al mes y correos recibidos.
- [ ] No poner nunca contraseñas ni claves en archivos del repositorio.

## Limitaciones conocidas
GitHub Pages no permite configurar cabeceras HTTP (`X-Frame-Options`, `frame-ancestors`, `Permissions-Policy`, `HSTS` propio). Si se quieren, hay que poner un proxy delante, como Cloudflare (plan gratuito), que además añade protección contra ataques de denegación de servicio.
