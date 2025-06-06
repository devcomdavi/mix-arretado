// menu mobile
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector("button[aria-controls='mobile-menu']");
    const mobileMenu = document.getElementById("mobile-menu");
    
menuButton.addEventListener("click", function () {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.classList.toggle("hidden");
    });
});


// spinner ver mais
document.getElementById('verMaisLink').addEventListener('click', function(event) {
    event.preventDefault();
    // Exibe o spinner e altera o texto para "Carregando..."
    document.getElementById('verMaisSpinner').classList.remove('hidden');
    document.getElementById('verMaisText').textContent = 'Carregando...';

    // Atraso para garantir que o spinner seja visível antes do redirecionamento
    setTimeout(function() {
    window.location.href = './pages/cardapio.html';
    }, 500);
});

// spinner fomulario
document.getElementById('submitButton').addEventListener('click', function() {
    document.getElementById('submitSpinner').classList.remove('hidden');
    document.getElementById('submitText').textContent = 'Processando...';
});
