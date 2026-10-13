"""Monta a pasta publicar/ para subir na Cloudflare Pages.

O Inciso fica num endereço difícil de adivinhar: <domínio>/a/<código>/.
O código fica em .codigo-acesso, fora do Git (o repositório é público).

Uso:
  python publicar.py          usa o código atual (cria um na primeira vez)
  python publicar.py --novo   troca o código, para quando o link vazar

Depois de trocar o código, suba a pasta de novo e atualize o link na área de
membros da Kiwify. O progresso dos alunos não se perde, porque o domínio é o mesmo.
"""
import secrets
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).parent
CODIGO = ROOT / ".codigo-acesso"
SAIDA = ROOT / "publicar"

if "--novo" in sys.argv or not CODIGO.exists():
    CODIGO.write_text(secrets.token_urlsafe(16), encoding="utf-8")
codigo = CODIGO.read_text(encoding="utf-8").strip()

subprocess.run([sys.executable, str(ROOT / "build.py")], check=True)

shutil.rmtree(SAIDA, ignore_errors=True)
(SAIDA / "a" / codigo).mkdir(parents=True)
shutil.copy(ROOT / "vade-sucessoes.html", SAIDA / "a" / codigo / "index.html")

# A raiz não mostra nada do conteúdo.
(SAIDA / "index.html").write_text(
    '<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex">'
    '<title>Inciso</title><p>Inciso: Direto, incisivo.</p>',
    encoding="utf-8",
)
# Cabeçalhos da Cloudflare Pages: não indexar e não vazar o endereço para outros sites.
(SAIDA / "_headers").write_text(
    "/*\n"
    "  X-Robots-Tag: noindex, nofollow\n"
    "  Referrer-Policy: no-referrer\n",
    encoding="utf-8",
)

print(f"Pronto: publicar/  ->  endereço do aluno: <domínio>/a/{codigo}/")
