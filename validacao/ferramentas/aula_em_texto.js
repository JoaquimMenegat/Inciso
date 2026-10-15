// Converte uma aula do pacote em texto limpo, com endereço para cada trecho.
// Uso: node validacao/ferramentas/aula_em_texto.js <aula-id> [pasta-conteudo] > aula.md
//   <aula-id>: tgp-<id>, con-<id> ou pe-<id> (ex.: pe-possessorias)
//   [pasta-conteudo]: padrão prototipo/pacotes/inciso-materiais/src/conteudo
// Sem IA: o mesmo arquivo de entrada gera sempre o mesmo texto e a mesma contagem.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const MATERIAS = {
  tgp: ['tgp.js', 'tgp2.js'],
  con: ['conhecimento.js', 'conhecimento2.js'],
  pe: ['procesp.js', 'procesp2.js', 'procesp3.js'],
};

const [aulaId, dirArg] = process.argv.slice(2);
if (!aulaId || !aulaId.includes('-')) {
  console.error('Uso: node aula_em_texto.js <aula-id> [pasta-conteudo]');
  process.exit(1);
}
const prefixo = aulaId.split('-')[0];
const idCurto = aulaId.slice(prefixo.length + 1);
const arquivos = MATERIAS[prefixo];
if (!arquivos) { console.error(`Prefixo desconhecido: ${prefixo}`); process.exit(1); }
const dir = dirArg || path.join(__dirname, '..', '..', 'prototipo', 'pacotes', 'inciso-materiais', 'src', 'conteudo');

// Carrega a matéria como o motor carrega: window.COURSE + pushes; a() vira o próprio texto.
const ctx = { window: {}, a: s => s };
ctx.COURSE = undefined;
vm.createContext(ctx);
const fontes = {};
for (const f of arquivos) {
  const src = fs.readFileSync(path.join(dir, f), 'utf8');
  fontes[f] = src.split('\n');
  vm.runInContext(src.replace(/^window\.COURSE=/m, 'COURSE=window.COURSE='), ctx, { filename: f });
}
const mod = ctx.window.COURSE.mods.find(m => m.id === idCurto);
if (!mod) { console.error(`Aula não encontrada: ${idCurto}`); process.exit(1); }

const limpa = s => String(s).replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const ondeEsta = trecho => {
  const alvo = String(trecho).slice(0, 40);
  for (const [f, linhas] of Object.entries(fontes)) {
    const i = linhas.findIndex(l => l.includes(alvo));
    if (i >= 0) return `${f}:${i + 1}`;
  }
  return '?';
};

const out = [];
let itens = 0;
const item = (endereco, texto) => {
  const t = limpa(texto);
  if (!t) return;
  itens++;
  out.push(`- [${endereco}] ${t}`);
};
// Percorre qualquer estrutura de bloco e lista cada texto com o caminho até ele.
const folhas = (v, caminho) => {
  if (typeof v === 'string') return item(caminho, v);
  if (Array.isArray(v)) return v.forEach((x, i) => folhas(x, `${caminho}[${i + 1}]`));
  if (v && typeof v === 'object') return Object.entries(v).forEach(([k, x]) => folhas(x, `${caminho}.${k}`));
};

out.push(`# ${aulaId} — ${mod.title}`, '', `Origem: ${ondeEsta(`id:\`${idCurto}\``)} · grupo: ${mod.group}`, '');
out.push('## Introdução');
item('intro', mod.intro);

mod.blocks.forEach((b, n) => {
  const nb = `b${n + 1}`;
  out.push('', `## Bloco ${n + 1} · ${b.t}${b.h ? ` · ${limpa(b.h)}` : ''}`, `Origem: ${ondeEsta(b.h || b.t)}`);
  const { t, h, ...resto } = b;
  if (t === 'sorter' && Array.isArray(b.cards)) {
    // Cartão: [texto, índice da categoria certa, explicação]
    (b.bins || []).forEach((x, i) => item(`${nb}.categoria${i + 1}`, x));
    b.cards.forEach(([txt, cat, exp], i) =>
      item(`${nb}.cartao${i + 1}`, `${txt} → categoria certa: ${(b.bins || [])[cat] ?? cat} (${exp || 'sem explicação'})`));
    const { bins, cards, ...outros } = resto;
    folhas(outros, nb);
  } else if (t === 'calc') {
    item(`${nb}.calculadora`, `Calculadora "${b.id || b.calc || JSON.stringify(resto).slice(0, 60)}": a regra está em engine.js (CALC)`);
    folhas(resto, nb);
  } else {
    folhas(resto, nb);
  }
});

out.push('', '## Teste do módulo');
(mod.quiz || []).forEach((q, i) => {
  const [perg, alts, certa, exp] = q;
  item(`quiz${i + 1}`, `${perg} → resposta dada como certa: "${(alts || [])[certa]}" (alternativas: ${(alts || []).map(limpa).join(' | ')}) — explicação: ${exp}`);
});

out.splice(3, 0, `Itens listados: ${itens}`, '');
process.stdout.write(out.join('\n') + '\n');
