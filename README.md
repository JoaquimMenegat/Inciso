# Inciso

*Direto, incisivo.*

Plataforma de estudo para estudantes de Direito: aulas interativas (simuladores, linhas do tempo, classificação, cartões) com acompanhamento de progresso, revisão espaçada e banco de questões.

## Estrutura

| Pasta / arquivo | O que é |
|---|---|
| `prototipo/src/` | Fonte do protótipo: HTML base, CSS e um arquivo JS por matéria (`40-pena.js` … `51-administrativo.js`) |
| `prototipo/build.py` | Junta tudo em um único HTML |
| `prototipo/vade-sucessoes.html` | Protótipo gerado (não editar à mão) |
| `prototipo/roadmap-inciso.md` | Roadmap até o lançamento |
| `prototipo/prompt-base44.md` | Prompt para gerar a plataforma no Base44 |
| `Identidade Visual/` | Manual da marca e versão animada |
| `*.svg` (raiz) | Exportações da logo e do ícone |

## Rodar o protótipo

```bash
python prototipo/build.py
python -m http.server 8765 --directory prototipo
```

Depois abra `http://localhost:8765/vade-sucessoes.html`.

## Matérias liberadas

No lançamento ficam abertas as três matérias de processo (Teoria Geral do Processo, Processo de Conhecimento, Procedimentos Especiais e Recursos). As demais aparecem como "Em breve"; a lista fica em `LIVE`, no início de `prototipo/src/js/90-app.js`.

## Conteúdo

O conteúdo é revisado antes de qualquer venda. Repositório privado: o material não deve ser publicado sem a revisão jurídica e a definição dos direitos de uso (ver Fase 0 do roadmap).
