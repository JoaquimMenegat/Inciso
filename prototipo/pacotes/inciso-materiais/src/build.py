import sys, pathlib
base = pathlib.Path(__file__).parent
conteudo = base/'conteudo'
css = (base/'engine.css').read_text()
js = (base/'engine.js').read_text()
for name in (sys.argv[1:] or ['tgp','conhecimento','procesp']):
    data = ''.join((conteudo/f).read_text() for f in sorted(p.name for p in conteudo.glob(f'{name}*.js')))
    title = {'tgp':'Teoria Geral do Processo','conhecimento':'Processo de Conhecimento','procesp':'Procedimentos Especiais e Recursos'}[name]
    html = f'''<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title} | JurInterativo</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Archivo:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>{css}</style></head><body>
<header class="top"><div class="in"><button class="menu" aria-label="Abrir módulos">Módulos</button><a class="brand" href="#" style="color:inherit;text-decoration:none"><i aria-hidden="true"></i>JurInterativo</a><span class="course"></span><span class="pct">0%</span></div><div class="prog"><i></i></div></header>
<div class="backdrop"></div>
<div class="wrap"><nav class="side" aria-label="Módulos"></nav><main></main></div>
<script>
const a=s=>`<span class="art-ref">${{s}}</span>`;
{data}
</script>
<script>{js}</script>
</body></html>'''
    out = base.parent/'dist'/f'inciso-{name}.html'
    out.write_text(html)
    print(name, len(html))
