document.addEventListener('DOMContentLoaded', () => {

  // ==================== HERRAMIENTAS ====================
  const toolsContainer = document.getElementById('tools-marquee');
  if (toolsContainer) {
    const tools = `
      <div class="text-center min-w-[170px] px-4"><i class="fab fa-java text-5xl text-orange-500"></i><p class="mt-2">Java</p></div>
      <div class="text-center min-w-[170px] px-4"><i class="fas fa-code-branch text-5xl text-blue-500"></i><p class="mt-2">Git</p></div>
      <div class="text-center min-w-[170px] px-4"><i class="fab fa-linux text-5xl text-yellow-400"></i><p class="mt-2">Linux</p></div>
      <div class="text-center min-w-[170px] px-4"><i class="fas fa-database text-5xl text-blue-600"></i><p class="mt-2">MongoDB</p></div>
      <div class="text-center min-w-[170px] px-4"><i class="fas fa-database text-5xl text-emerald-500"></i><p class="mt-2">PostgreSQL</p></div>
      <div class="text-center min-w-[170px] px-4"><i class="fas fa-globe text-5xl text-sky-400"></i><p class="mt-2">HTML/CSS/JS</p></div>
      <div class="text-center min-w-[170px] px-4"><i class="fab fa-figma text-5xl text-pink-500"></i><p class="mt-2">Figma</p></div>
      <div class="text-center min-w-[170px] px-4"><i class="fas fa-video text-5xl text-red-500"></i><p class="mt-2">Filmora</p></div>
      <div class="text-center min-w-[170px] px-4"><i class="fas fa-video text-5xl text-purple-500"></i><p class="mt-2">DaVinci Resolve</p></div>
      <div class="text-center min-w-[170px] px-4"><i class="fas fa-laptop-code text-5xl text-cyan-400"></i><p class="mt-2">VS Code</p></div>
      <div class="text-center min-w-[170px] px-4"><i class="fas fa-server text-5xl text-amber-400"></i><p class="mt-2">Oracle</p></div>
      <div class="text-center min-w-[170px] px-4"><i class="fas fa-image text-5xl text-indigo-400"></i><p class="mt-2">Pixlr</p></div>
      <div class="text-center min-w-[170px] px-4"><i class="fas fa-video text-5xl text-orange-400"></i><p class="mt-2">OBS Studio</p></div>
    `;
    toolsContainer.innerHTML = tools + tools;  // ← Duplicado para bucle infinito
  }

  // ==================== IA ====================
  const iaContainer = document.getElementById('ia-marquee');
  if (iaContainer) {
    const ia = `
      <div class="text-center min-w-[240px]"><i class="fas fa-robot text-5xl text-purple-400"></i><p class="mt-2">Perplexity + Copilot</p></div>
      <div class="text-center min-w-[240px]"><i class="fas fa-image text-5xl text-fuchsia-400"></i><p class="mt-2">Leonardo + Banana</p></div>
      <div class="text-center min-w-[240px]"><i class="fas fa-video text-5xl text-rose-400"></i><p class="mt-2">Runway + Grok </p></div>
      <div class="text-center min-w-[240px]"><i class="fas fa-music text-5xl text-violet-400"></i><p class="mt-2">Suno AI</p></div>
      <div class="text-center min-w-[240px]"><i class="fas fa-volume-up text-5xl text-cyan-400"></i><p class="mt-2">ElevenLabs + Clipchamp</p></div>
    `;
    iaContainer.innerHTML = ia + ia;  // ← Duplicado
  }
});