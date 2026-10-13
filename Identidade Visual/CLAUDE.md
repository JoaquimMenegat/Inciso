# JurInterativo — identidade visual (handoff para Claude Code)

Marca: **JurInterativo** (antes "Inciso"; nomes de arquivo e `IncisoMotion` mantidos por compatibilidade). Wordmark em Libre Caslon com o pingo do último "i" como selo vermelho. Ícone/favicon: monograma "Ji" em Tinta com o pingo-selo vermelho (SVG 32×32 no brand book).

Plataforma de estudo de Direito. Slogan: **"Direto, incisivo."** Conceito: inciso = item numerado de um artigo ("I –", "II –").

## Arquivos
- `Inciso Identidade.dc.html` — brand book: logos (3 caminhos), abertura animada, ícone/favicon, cores, padrão, selo, ícones, marcadores, aplicações (capa de aula, card de progresso, post, telas do app claro/escuro). Abrir no navegador; o markup é a referência visual.
- `Inciso Guia de Movimento.dc.html` — regras de animação.
- `Inciso Sistema.dc.html` — cor por matéria, escala tipográfica, 10 ícones (traço/preenchido/animados), gestos (flashcard, acerto/erro, conquista), hover/clique, transições de tela.
- `IncisoSelo.dc.html` — selo circular reutilizável (SVG + textPath). Props: text, center, color, ink, outline, spin, period.
- `inciso-motion.js` — motor de animação (Web Animations API). `IncisoMotion.play(root)`, `.observe(root)`, `.spin(el, s)`. Elementos com `data-a="draw|rise|up|fade|grow|stamp|letters|ring|count|stroke|pop"`, `.shake(el)`, ícones com `data-ia` animam no hover de `[data-ih]` + `data-d` (delay ms) / `data-dur`. Respeita prefers-reduced-motion (HTML = estado final).
- `support.js` — runtime para abrir os .dc.html; não faz parte da marca.

## Tokens
```css
:root{
  --tinta:#1B2540; --selo:#A3263A; --latao:#B98A2E; --salvia:#4F7464;
  --papel:#EEF1F5; --folha:#FFFFFF; --texto-2:#59627A; --hairline:#C8CFDB;
  --ease-inciso:cubic-bezier(.2,.8,.2,1);
}
[data-theme=dark]{
  --bg:#131A2B; --superficie:#1B2540; --texto:#EEF1F5; --texto-2:#A3ADC2;
  --selo:#E0566B; --latao:#D9AE57; --salvia:#82B29B; --hairline:#2E3A58;
}
```
- Fontes (Google Fonts): Libre Caslon Text **só na marca** (wordmark, monograma "I –", ícone, selo e lema "Direto, incisivo." da abertura). Todo o resto — títulos, numerais romanos, interface — em Archivo (títulos 600, letter-spacing −.035em).
- Cantos arredondados: blocos/cards 16px, botões 10px, etiquetas 8px, barras 2px, ícone do app 22%. Réguas de 2px em Tinta, alinhamento à esquerda.
- Vermelho só no selo e no que pede atenção; Sálvia só para progresso/acerto; Latão para travessões e numerais.
- Ícones: traço 1,5px, linecap square, grade 24; versão preenchida = estado ativo; cor por tipo (Aula Tinta, Questão Latão, Flashcard Selo, Simulador Sálvia). Ver `Inciso Sistema.dc.html`.
- Cor por matéria (só rótulo, faixa, etiqueta): Sucessões #3E6B78 · Família #8C4A6E · Contratos #2F5D8A · Coisas #6B7A2E · Penal #A0582A · Constitucional #5B4E8C (texto/claro/escuro no Sistema).
- Escala de tipo: Display 64 · T1 44 · T2 32 · T3 22 · Corpo 17 · Apoio 14 · Rótulo 12 caixa alta.

## Movimento
Clique 120ms (scale .97) · Hover 160 · Base 240 · Transição de tela 360 · Erro 420 (tremida) · Acerto 480 (check desenha) · Entrada 560 (sobe 20px) · Virar flashcard 560 · Carimbo 620 (escala 1.9→.92→1.05→.98→1.01→1, rotate -8°) · Travessão 700 · Subida mascarada 720 · Conquista 1200 · Progresso 1600 · Abertura 3200 (só splash).
Um gesto de marca por vez; no máximo um carimbo por tela.

## Evitar
Balança, martelo, colunas, livros, louros, brasões, corujas, beca; degradês, 3D, sombras pesadas, mascotes.
