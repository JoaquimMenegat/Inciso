"""Confere se todo endereço da aula.md aparece na ficha.md e conta as perguntas por tipo.
Uso: python validacao/ferramentas/cobertura.py <aula-id>"""
import re, sys, pathlib
pasta = pathlib.Path(__file__).resolve().parent.parent / 'aulas' / sys.argv[1]
aula = (pasta / 'aula.md').read_text(encoding='utf-8')
ficha = (pasta / 'ficha.md').read_text(encoding='utf-8')
perg = (pasta / 'perguntas.md').read_text(encoding='utf-8')
ends = re.findall(r'^- \[([^\]]+)\]', aula, re.M)
faltam = [e for e in ends if f'[{e}]' not in ficha and e not in ficha]
tipos = {}
for linha in perg.splitlines():
    c = [x.strip() for x in linha.split('|')]
    if len(c) > 3 and c[1].startswith(sys.argv[1]):
        tipos.setdefault(c[2], []).append(c[1].rsplit('-', 1)[-1])
print(f'{sys.argv[1]}: {len(ends)} endereços, faltam {len(faltam)}' + (f': {faltam}' if faltam else ''))
for t, ids in tipos.items():
    print(f'  {t}: {len(ids)} ({", ".join(ids)})')
