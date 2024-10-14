document.addEventListener('deviceready', onDeviceReady, false);
let corAtual = 'warning';

function onDeviceReady() {
    const botao = document.getElementById('botao');
    botao.addEventListener('click', mudaTema);
}

function mudaTema() {
    navigator.notification.prompt(
        'Digite uma cor (ex: danger, primary, success, etc.):', // mensagem
        onPrompt,                                             // callback para invocar
        'Mudar Tema',                                        // título
        ['OK', 'Cancelar'],                                  // botões
        corAtual                                             // valor inicial
    );
}

function onPrompt(results) {
    if (results.buttonIndex === 1) { // Se "OK" foi pressionado
        const novaCor = results.input1.trim(); // Remove espaços em branco
        finalizado(novaCor);
    }
}

function finalizado(novaCor) {
    const body = document.body;

    // Limpa as classes de cor anteriores
    body.classList.remove('bg-warning', 'bg-primary', 'bg-success', 'bg-danger', 'bg-info', 'bg-light', 'bg-dark');
    body.classList.remove('text-dark', 'text-light', 'text-white', 'text-body');

    // Define a nova cor ou mantém a padrão se inválida
    if (['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(novaCor)) {
        corAtual = novaCor;
    } else {
        corAtual = 'warning'; // Retorna para o padrão se a cor for inválida
    }

    // Aplica a nova cor
    body.classList.add(`bg-${corAtual}`, 'text-dark');
    console.log('Tema alterado para: ' + corAtual);
}
