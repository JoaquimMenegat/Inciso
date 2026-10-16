// Testa as calculadoras do motor (engine.js) com casos de resultado conhecido.
// Roda o código real de cada calculadora, com uma página falsa mínima, sem navegador.
// Uso: node validacao/ferramentas/testar_calculadoras.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const engine = fs.readFileSync(path.join(__dirname, '..', '..', 'prototipo', 'pacotes', 'inciso-materiais', 'src', 'engine.js'), 'utf8');
const linhas = engine.split('\n');
const linha = prefixo => linhas.find(l => l.startsWith(prefixo));
// Trecho de uma calculadora: da linha "CALC.<nome>=" até a linha anterior à próxima "CALC.".
const calculadora = nome => {
  const i = linhas.findIndex(l => l.startsWith(`CALC.${nome}=`));
  let j = i + 1;
  while (j < linhas.length && !linhas[j].startsWith('CALC.')) j++;
  return linhas.slice(i, j).join('\n');
};

// Elemento falso: guarda valor, texto e ouvintes, o bastante para as calculadoras.
const elemento = () => {
  const filhos = {};
  return {
    innerHTML: '', textContent: '', value: '', checked: false, style: {}, classList: { add() {}, remove() {} },
    addEventListener(tipo, fn) { this.ouvinte = fn; },
    querySelector(sel) { return filhos[sel] || (filhos[sel] = elemento()); },
    querySelectorAll() { return []; },
    closest() { return null; },
  };
};

const ctx = { CALC: {}, Date, Math, console };
vm.createContext(ctx);
vm.runInContext([linha('const pad='), 'const replay=()=>{};', calculadora('forca')].join('\n'), ctx);

let falhas = 0;
const confere = (nome, obtido, esperado) => {
  const ok = obtido === esperado;
  if (!ok) falhas++;
  console.log(`${ok ? 'ok  ' : 'FALHOU'} ${nome}: ${obtido}${ok ? '' : ` (esperado: ${esperado})`}`);
};

// Força nova ou velha (CPC, art. 558): a aula usa como limite a data do fato + 1 ano + 1 dia, inclusive.
const forca = (fato, acao) => {
  const el = elemento();
  ctx.CALC.forca(el);
  el.querySelector('.a').value = fato;
  el.querySelector('.b').value = acao;
  el.querySelector('.a').ouvinte();
  return el.querySelector('.res').textContent;
};
confere('fato 01/01/2025, ação 01/01/2026', forca('2025-01-01', '2026-01-01'), 'Força nova');
confere('fato 01/01/2025, ação 02/01/2026 (último dia)', forca('2025-01-01', '2026-01-02'), 'Força nova');
confere('fato 01/01/2025, ação 03/01/2026', forca('2025-01-01', '2026-01-03'), 'Força velha');
confere('fato 01/01/2025, ação 10/01/2026 (questão da aula)', forca('2025-01-01', '2026-01-10'), 'Força velha');
confere('fato 15/06/2025, ação no mesmo dia', forca('2025-06-15', '2025-06-15'), 'Força nova');
confere('fato 31/12/2024, ação 01/01/2026 (virada de ano)', forca('2024-12-31', '2026-01-01'), 'Força nova');
confere('fato 31/12/2024, ação 02/01/2026', forca('2024-12-31', '2026-01-02'), 'Força velha');

console.log(falhas ? `\n${falhas} falha(s).` : '\nTodas as verificações passaram.');
process.exit(falhas ? 1 : 0);
