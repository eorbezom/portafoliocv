document.addEventListener('DOMContentLoaded', () => {

  // HERRAMIENTAS
  const toolsContent = document.getElementById('tools-content');
  if (toolsContent) {
    let html = '';
    const toolsList = [
      `<div class="text-center min-w-[160px]"><i class="fab fa-java text-5xl text-orange-500"></i><p class="mt-2">Java</p></div>`,
      `<div class="text-center min-w-[160px]"><i class="fas fa-code-branch text-5xl text-blue-500"></i><p class="mt-2">Git</p></div>`,
      `<div class="text-center min-w-[160px]"><i class="fab fa-linux text-5xl text-yellow-400"></i><p class="mt-2">Linux</p></div>`,
      `<div class="text-center min-w-[160px]"><i class="fas fa-database text-5xl text-blue-600"></i><p class="mt-2">MongoDB</p></div>`,
      `<div class="text-center min-w-[160px]"><i class="fas fa-database text-5xl text-emerald-500"></i><p class="mt-2">PostgreSQL</p></div>`,
      `<div class="text-center min-w-[160px]"><i class="fab fa-figma text-5xl text-pink-500"></i><p class="mt-2">Figma</p></div>`
    ];
    html = toolsList.join('') + toolsList.join('');
    toolsContent.innerHTML = html;
  }

  // INTELIGENCIA ARTIFICIAL
  const iaContent = document.getElementById('ia-content');
  if (iaContent) {
    let html = '';
    const iaList = [
      `<div class="text-center min-w-[240px]"><i class="fas fa-robot text-5xl text-purple-400"></i><p class="mt-2">Perplexity AI</p></div>`,
      `<div class="text-center min-w-[240px]"><i class="fas fa-image text-5xl text-fuchsia-400"></i><p class="mt-2">Leonardo AI</p></div>`,
      `<div class="text-center min-w-[240px]"><i class="fas fa-video text-5xl text-rose-400"></i><p class="mt-2">Runway + CapCut</p></div>`,
      `<div class="text-center min-w-[240px]"><i class="fas fa-music text-5xl text-violet-400"></i><p class="mt-2">Suno AI</p></div>`
    ];
    html = iaList.join('') + iaList.join('');
    iaContent.innerHTML = html;
  }
});