"""Monta vade-sucessoes.html a partir de src/.

Uso: python build.py
"""
from pathlib import Path

ROOT = Path(__file__).parent
SRC = ROOT / "src"
CSS_ORDER = ["styles.css", "lessons.css", "brand.css", "courses.css"]

head = (SRC / "head.html").read_text(encoding="utf-8")
css = "\n".join((SRC / name).read_text(encoding="utf-8") for name in CSS_ORDER)
shell = (SRC / "shell.html").read_text(encoding="utf-8")
js = "\n".join(p.read_text(encoding="utf-8") for p in sorted((SRC / "js").glob("*.js")))

out = f"""{head}<style>
{css}</style>

{shell}
<script>
(function(){{
'use strict';
{js}
}})();
</script>
"""
(ROOT / "vade-sucessoes.html").write_text(out, encoding="utf-8")
print(f"vade-sucessoes.html: {len(out.encode('utf-8')) / 1024:.0f} KB")
