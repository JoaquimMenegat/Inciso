/* ================= ícones da marca =================
   Grade de 24, traço de 1,5 px, pontas retas (manual, seção V). Cada traço tem pathLength=1,
   então o CSS pode "desenhar" o ícone quando ele entra na tela (classe .icd). */
const ICO={
  aula:'<path d="M3 5h6.5A2.5 2.5 0 0 1 12 7.5V20a2 2 0 0 0-2-2H3z"/><path d="M21 5h-6.5A2.5 2.5 0 0 0 12 7.5V20a2 2 0 0 1 2-2h7z"/>',
  questao:'<rect x="3" y="3" width="18" height="18"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.6 2.24c-.66.33-1.1.98-1.1 1.71v1.05"/><path d="M12 17.4v.2"/>',
  flash:'<rect x="3" y="8" width="14" height="12"/><path d="M7 8V4h14v12h-4"/><path d="M6.5 14h7"/>',
  sequencia:'<rect x="3" y="5" width="18" height="16"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M8.5 15.5l2.5 2.5 4.5-4.5"/>',
  alvo:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><path d="M12 12l7.5-7.5M16 4.5h3.5V8"/>',
  concluida:'<rect x="3" y="3" width="18" height="18"/><path d="M7.5 12.5l3 3 6-7"/>',
  relogio:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  grafico:'<path d="M3 20h18"/><path d="M6 16v-4M11 16V8M16 16v-6M21 16V5"/>',
  seta:'<path d="M4 12h16M14 6l6 6-6 6"/>'
};
const ic=(k,cls)=>`<svg class="ico ${cls||''}" viewBox="0 0 24 24" aria-hidden="true">${(ICO[k]||'').replace(/<(path|rect|circle)/g,'<$1 pathLength="1"')}</svg>`;
/* carregando: três incisões que se acendem em sequência */
const loader=(d)=>`<span class="ld" style="--d:${d||0}ms" aria-hidden="true"><i></i><i></i><i></i></span>`;
/* selo girando: borda tracejada em volta do pingo-selo */
const spinSeal=()=>`<svg class="spinseal" viewBox="0 0 24 24" aria-hidden="true"><circle class="o" cx="12" cy="12" r="10"/><circle class="c" cx="12" cy="12" r="3.2"/></svg>`;
