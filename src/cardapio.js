import pratos from './objetos/pratos.js';

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
    `;
}

const pratosHtml = pratos.map(prato => criarPrato(prato));

document.getElementById('menu').innerHTML = pratosHtml.join('');