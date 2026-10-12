"""Importa um pacote de materiais feito no Claude.ai (pasta inciso-materiais) para o protótipo.

Uso:  python prototipo/importar_pacote.py <pasta inciso-materiais>

Gera, em prototipo/src/js/:
  54-pk-engine.js      motor de blocos do pacote (R, B, CALC) + CSS dele, que roda isolado (shadow DOM)
  6N-pk-<materia>.js   conteúdo de cada matéria, registrado com defPackCourse()
e copia engine/conteúdo para prototipo/pacotes/ (a pasta fontes/ NUNCA é copiada: deriva de notas de aula).
Depois rode build.py. Não edite os arquivos gerados à mão: altere o pacote e importe de novo.
"""
import sys, re, json, shutil, pathlib

AREA = {'tgp': 'Direito Processual', 'conhecimento': 'Direito Processual', 'procesp': 'Direito Processual'}
SEED = {'tgp'}  # matérias que abrem com histórico de demonstração

def main(pkg):
    pkg = pathlib.Path(pkg)
    src = pkg / 'src'
    here = pathlib.Path(__file__).parent
    out = here / 'src' / 'js'

    # ---------- motor ----------
    eng = (src / 'engine.js').read_text(encoding='utf-8')
    a = eng.index('/* ---------- blocos ---------- */')
    b = eng.index('/* quiz */')
    body = eng[a:b]
    css = (src / 'engine.css').read_text(encoding='utf-8')
    blk = css[css.index('/* texto */'):css.index('/* quiz */')]
    m720 = re.search(r'@media \(max-width:720px\)\{.*?\n\}', css, re.S).group(0)
    m720 = '\n'.join(l for l in m720.split('\n') if '.nextmod' not in l)
    base = r"""
:host{display:block;color:var(--ink);font:400 1rem/1.62 var(--sans);margin:0 0 26px}
*,*::before,*::after{box-sizing:border-box}
h1,h2,h3,h4{font-family:var(--serif);font-weight:400;line-height:1.15;margin:0}
p{margin:0 0 .9em;max-width:68ch}
b,strong{font-weight:650}
button{font:inherit;color:inherit;cursor:pointer}
button:disabled{cursor:default}
:focus-visible{outline:3px solid var(--brass);outline-offset:3px}
.art-ref{color:var(--seal);font-weight:600;white-space:nowrap}
mark{background:color-mix(in srgb,var(--brass) 26%,transparent);color:inherit;padding:0 .15em}
@keyframes rise{to{transform:none}}
@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@keyframes swap{from{opacity:0;transform:translateX(14px)}to{opacity:1;transform:none}}
@keyframes pop{0%{transform:scale(.6);opacity:0}100%{transform:none;opacity:1}}
@keyframes shake{25%{transform:translateX(-7px)}75%{transform:translateX(7px)}}
.swap{animation:swap .45s}
.reveal{opacity:0;transform:translateY(22px);transition:opacity .6s,transform .6s}
.reveal.vis{opacity:1;transform:none}
/* identidade v2 (Inciso Sistema): títulos em Archivo 600 apertado, cantos 16/10/8, sem sombra */
h1,h2,h3,h4,.flip .f strong,.tl .it b,.stage h4,.wiz .q,.wiz .end .t,.jc .tese,.out .t,.gauge .t,.calc .res,.vs .col h4,.bins button{font-family:var(--sans);font-weight:600;letter-spacing:-.02em}
.stage .rn,.artb b,.key b,.big,.cal .mh,.vs .x{font-family:var(--sans);font-weight:600}
.flip .in,.flip .f,.flip .b,.card,.callout,.out,.wiz .end,.vs .col,.calc input,.calc select,.tbl,.juris .jc{border-radius:16px}
.chips button,.bins button,.btn,.stepnav button,.wiz .ans button,.tog input{border-radius:10px}
.tag,.wiz .path span{border-radius:8px}
.tog input::after{border-radius:6px}
.flip .f,.card,.calc input,.calc select{background:var(--sheet)}
.card{border-color:var(--edge,var(--line))}
/* ajustes do protótipo: nada vaza da largura do celular */
.calc>*{min-width:0}
.exp .art-ref{white-space:normal}
"""
    reduce = "@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}.reveal{opacity:1;transform:none}}"
    pk_css = base + blk + m720 + '\n' + reduce
    engine_js = (
        "/* ================= motor de blocos dos pacotes (gerado por importar_pacote.py — não editar) =================\n"
        "   Extraído de inciso-materiais/src/engine.js. Roda dentro de shadow DOM, isolado do CSS do protótipo. */\n"
        "const PK_CSS=" + json.dumps(pk_css, ensure_ascii=False) + ";\n"
        "const PKE=(function(){\n"
        "const RN=['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI','XXII','XXIII','XXIV','XXV'];\n"
        "const replay=(el,c)=>{if(!el)return;el.classList.remove(c);void el.offsetWidth;el.classList.add(c)};\n"
        "let uid=0;const nid=()=>'pkb'+(++uid);\n"
        + body +
        "return {R,B};\n})();\n"
    )
    (out / '54-pk-engine.js').write_text(engine_js, encoding='utf-8')

    # ---------- conteúdo ----------
    cont = src / 'conteudo'
    ids = sorted({re.match(r'([a-z]+)', p.stem).group(1) for p in cont.glob('*.js')},
                 key=lambda i: ['tgp', 'conhecimento', 'procesp'].index(i) if i in ('tgp', 'conhecimento', 'procesp') else 99)
    for old in out.glob('6?-pk-*.js'):
        old.unlink()
    for n, cid in enumerate(ids):
        parts = sorted(p for p in cont.glob(cid + '*.js') if re.fullmatch(cid + r'\d*', p.stem))
        data = ''.join(p.read_text(encoding='utf-8') for p in parts)
        data = data.replace('window.COURSE=', 'PK.c=').replace('COURSE.mods.push(', 'PK.c.mods.push(')
        opts = {'area': AREA.get(cid, 'Direito'), 'seed': cid in SEED}
        js = (f"/* ================= Matéria: {cid} (gerado por importar_pacote.py — não editar) ================= */\n"
              "(function(){\nconst a=s=>`<span class=\"art-ref\">${s}</span>`;const PK={};\n"
              + data + f"\ndefPackCourse(PK.c,{json.dumps(opts)});\n}})();\n")
        (out / f'6{n}-pk-{cid}.js').write_text(js, encoding='utf-8')
        print(cid, len(js))

    # ---------- cópia do pacote (sem fontes/) ----------
    dst = here / 'pacotes' / pkg.name
    # sobrescreve sem apagar a pasta antes (o OneDrive costuma travar a remoção de diretórios)
    shutil.copytree(src, dst / 'src', dirs_exist_ok=True)
    if (pkg / 'LEIA-ME.md').exists():
        shutil.copy(pkg / 'LEIA-ME.md', dst / 'LEIA-ME.md')

if __name__ == '__main__':
    main(sys.argv[1])
