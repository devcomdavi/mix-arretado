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

// spinner do saiba mais
document.getElementById('saibaMaisButton').addEventListener('click', function(event) {
    event.preventDefault();
    // Exibe o spinner e altera o texto para "Carregando..."
    document.getElementById('saibaMaisSpinner').classList.remove('hidden');
    document.getElementById('saibaMaisSpinner').classList.add('inline');
    document.getElementById('saibaMaisText').textContent = 'Carregando...';

    // Atraso para garantir que o spinner seja visível antes do redirecionamento
    setTimeout(function() {
    window.location.href = '/pages/sobre.html';
    }, 500);
});


// spinner do cardápio
document.getElementById('verMaisButton').addEventListener('click', function(event) {
    event.preventDefault();
    // Exibe o spinner e altera o texto para "Carregando..."
    document.getElementById('verMaisSpinner').classList.remove('hidden');
    document.getElementById('verMaisSpinner').classList.add('inline');
    document.getElementById('verMaisText').textContent = 'Carregando...';

    // Atraso para garantir que o spinner seja visível antes do redirecionamento
    setTimeout(function() {
    window.location.href = '/pages/cardapio.html';
    }, 500);
});

// spinner fomulario
document.getElementById('submitButton').addEventListener('click', function() {
    document.getElementById('submitSpinner').classList.remove('hidden');
    document.getElementById('submitSpinner').classList.add('inline');
    document.getElementById('submitText').textContent = 'Processando...';
});


// cardapio.html
    // Obtendo os botões de categoria
const buttons = document.querySelectorAll('.category-btn');
      
    // Obtendo todos os pratos do cardápio
const menuItems = document.querySelectorAll('.menu-item');
      
    // Função de filtro
function filterMenu(category) {
    // Se a categoria for 'all', exibe todos os pratos
    if (category === 'all') {
        menuItems.forEach(item => {
            item.style.display = 'block';
        });
    } else {
        // Exibe apenas os pratos da categoria selecionada
        menuItems.forEach(item => {
            if (item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
}
      
    // Atribuindo evento de clique a cada botão de categoria
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const category = event.target.innerText.toLowerCase(); // Obtém o nome da categoria a partir do texto do botão
            filterMenu(category); // Filtra o cardápio com base na categoria
        });
});


document.getElementById("menu-toggle").addEventListener("click", function() {
    const menu = document.getElementById("category-menu");
        menu.classList.toggle("hidden");
});
