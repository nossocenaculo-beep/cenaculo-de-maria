function toggleSubmenu(id) {
  const submenu = document.getElementById(id);
  const isOpen = submenu.style.maxHeight && submenu.style.maxHeight !== '0px';
  
  document.querySelectorAll('.submenu').forEach(s => s.style.maxHeight = '0px');
  if (!isOpen) {
    submenu.style.maxHeight = submenu.scrollHeight + "px";
  }
}

function loadPage(pageId) {
  const conteudo = document.getElementById('conteudo');
  conteudo.innerHTML = '<div class="loading">Carregando...</div>';

  fetch(`paginas/${pageId}.html`)
    .then(response => {
      if (!response.ok) throw new Error('Página não encontrada');
      return response.text();
    })
    .then(html => {
      conteudo.innerHTML = html;
      window.scrollTo({ top: 400, behavior: 'smooth' });
      
      // Fecha submenus no mobile
      if (window.innerWidth <= 768) {
        document.querySelectorAll('.submenu').forEach(s => s.style.maxHeight = '0px');
      }
    })
    .catch(err => {
      conteudo.innerHTML = `<p style="text-align:center; color:red;">Erro: ${err.message}</p>`;
    });
}

// Carrega a página inicial
document.addEventListener('DOMContentLoaded', () => {
  loadPage('home');
});

let baseFontSize = 100; // tamanho base em %

function changeFontSize(step) {
    baseFontSize += step * 10;           // aumenta/diminui 10% por clique
    if (baseFontSize < 70) baseFontSize = 70;   // limite mínimo
    if (baseFontSize > 180) baseFontSize = 180; // limite máximo
    
    document.documentElement.style.fontSize = baseFontSize + '%';
    
    // salva a preferência do usuário no celular
    localStorage.setItem('userFontSize', baseFontSize);
}

// Carrega a preferência salva quando abre a página
window.addEventListener('load', function() {
    const saved = localStorage.getItem('userFontSize');
    if (saved) {
        baseFontSize = parseInt(saved);
        document.documentElement.style.fontSize = baseFontSize + '%';
    }
});
