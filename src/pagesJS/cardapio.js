import pratos from './objetos/pratos.js';

document.addEventListener('DOMContentLoaded', () => {

    function criarPrato(prato) {
        return `
        <div data-category="${prato.categoria}" class="menu-item bg-white shadow-lg rounded-2xl p-4 transition delay-100 duration-150 ease-in hover:scale-105">
            <img src="${prato.imagem}" alt="${prato.categoria} ${prato.nome}" class="w-full h-48 object-cover rounded-xl">
                <div class="mt-4">
                    <h2 class="font-[xilosa] text-center text-3xl font-semibold text-orange-400">${prato.nome}</h2>
                    <p class="text-center text-gray-500 mt-2">${prato.descricao}</p>
                    <div class="mt-3 flex justify-center items-center">
                        <span class="font-[xilosa] text-2xl font-bold text-orange-400">R$ ${prato.preco}</span>
                    </div>
                </div>
        </div>
        `
    };

    const pratosHtml = pratos.map(prato => criarPrato(prato));

    document.getElementById('menu').innerHTML = pratosHtml.join('');
});


// cardapio.html
document.addEventListener('DOMContentLoaded', () => {

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
                };
            });
        };
    };
   
    // Atribuindo evento de clique a cada botão de categoria
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const category = event.target.innerText.toLowerCase(); // Obtém o nome da categoria a partir do texto do botão
                filterMenu(category); // Filtra o cardápio com base na categoria
            });
    });
});    

document.addEventListener('DOMContentLoaded', () => {    
    document.getElementById("menu-toggle").addEventListener("click", function() {
        const menu = document.getElementById("category-menu");
            menu.classList.toggle("hidden");
    });
});