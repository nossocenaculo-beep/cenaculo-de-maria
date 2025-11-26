// script.js

// Função para definir dinamicamente o ano atual no rodapé
function setCurrentYear() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Quando a página carregar, execute a função
document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Página Cenáculo de Maria carregada!");
    setCurrentYear();

    // Você pode adicionar mais interatividade aqui, se quiser.
    // Exemplo: alertar quando clicar na imagem principal
    const headerImage = document.getElementById('headerImage');
    if (headerImage) {
        headerImage.addEventListener('click', () => {
            alert('Você clicou na imagem de Pentecostes!');
        });
    }
});
