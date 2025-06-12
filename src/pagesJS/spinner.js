// spinner do saiba mais
document.addEventListener('DOMContentLoaded', () => {

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
});


// spinner do cardápio
document.addEventListener('DOMContentLoaded', () => {

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
});


// spinner fomulario
document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('submitButton').addEventListener('click', function() {
        document.getElementById('submitSpinner').classList.remove('hidden');
        document.getElementById('submitSpinner').classList.add('inline');
        document.getElementById('submitText').textContent = 'Processando...';
    });
});


// Garante que todos os spinners estejam ocultos ao exibir a página, inclusive ao voltar pelo navegador
document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('pageshow', () => {
        const spinners = [
            document.getElementById('verMaisSpinner'),
            document.getElementById('saibaMaisSpinner'),
            document.getElementById('submitSpinner')
        ];
        
        spinners.forEach(spinner => {
            if (spinner) {
                spinner.classList.add('hidden');
                spinner.classList.remove('inline');
            };
        });
        
        document.getElementById('saibaMaisText').textContent = 'Saiba mais';
        document.getElementById('verMaisText').textContent = 'Ver mais';
        document.getElementById('submitText').textContent = 'Enviar';
    });
});