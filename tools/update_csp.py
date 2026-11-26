"""Recalcula la política de contenido (CSP) de todas las páginas.

Uso (desde la carpeta del sitio):  python tools/update_csp.py

Cada página lleva una etiqueta <meta http-equiv="Content-Security-Policy"> que solo permite:
  - scripts propios (nada en línea ni hashes) y estilos propios (nada en línea: ni style="" ni <style>);
  - imágenes y fuentes propias; ninguna conexión de red desde JavaScript, ningún iframe y ningún objeto;
  - fuerza HTTPS en todo recurso. La web no carga nada de terceros.
Si añades una página, vuelve a ejecutar este script. Falla si encuentra algo en línea que la política bloquearía.
"""
import base64
import glob
import hashlib
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
META_RE = re.compile(r'[ \t]*<meta http-equiv="Content-Security-Policy"[^>]*>\r?\n')


def inline_hashes(html):
    out = []
    for m in re.finditer(r'<script(?P<attrs>[^>]*)>(?P<body>.*?)</script>', html, re.S):
        attrs, body = m.group('attrs'), m.group('body')
        if 'src=' in attrs or 'application/ld+json' in attrs or not body.strip():
            continue
        text = body.replace('\r\n', '\n')
        digest = base64.b64encode(hashlib.sha256(text.encode('utf-8')).digest()).decode()
        out.append("'sha256-%s'" % digest)
    return out


def policy(hashes):
    return "; ".join([
        "default-src 'self'",
        "script-src 'self'" + ((" " + " ".join(hashes)) if hashes else ""),
        "style-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'none'",
        "frame-src 'none'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "upgrade-insecure-requests",
    ])


for path in sorted(glob.glob(os.path.join(ROOT, '*.html'))):
    with open(path, encoding='utf-8', newline='') as f:
        html = f.read()
    nl = '\r\n' if '\r\n' in html else '\n'
    html = META_RE.sub('', html)
    # La política no permite nada en línea: avisa si alguien lo añade en el futuro.
    problems = []
    if inline_hashes(html): problems.append('<script> en línea (muévelo a assets/)')
    if re.search(r'<style[\s>]', html): problems.append('<style> en línea (muévelo a assets/style.css)')
    if re.search(r'\sstyle="', html): problems.append('atributo style="" (usa una clase)')
    if problems:
        raise SystemExit('%s: la CSP bloquearía: %s' % (os.path.basename(path), '; '.join(problems)))
    meta = '  <meta http-equiv="Content-Security-Policy" content="%s">%s' % (policy(inline_hashes(html)), nl)
    m = re.search(r'<meta name="viewport"[^>]*>\r?\n', html)
    assert m, path
    html = html[:m.end()] + meta + html[m.end():]
    with open(path, 'w', encoding='utf-8', newline='') as f:
        f.write(html)
    print(os.path.basename(path), len(inline_hashes(html)), 'script(s) en línea')
