document.addEventListener('deviceready', onDeviceReady, false);

let numero1, numero2, resultado;

function onDeviceReady() {
    geraNovaOperacao();
    const botao = document.getElementById('botao');
    botao.addEventListener('click', verifica);
}

function geraNovaOperacao() {
    numero1 = Math.floor(Math.random() * 10); // Gera um número de 0 a 9
    numero2 = Math.floor(Math.random() * 10); // Gera um número de 0 a 9
    resultado = numero1 + numero2;
    document.getElementById('conta').innerText = `${numero1} + ${numero2} = `;
}

function verifica() {
    const campo = document.getElementById('campo');
    const digitado = parseInt(campo.value, 10); // Converte a entrada do usuário para um número

    if (!isNaN(digitado) && digitado === resultado) {
        alertCallBack();
    }
    // Limpa o campo de resposta independentemente de acertar ou errar
    campo.value = '';
}

function alertCallBack() {
    navigator.notification.alert(
        'Você acertou!',       // mensagem
        () => {
            geraNovaOperacao(); // Gera uma nova operação após o alerta ser dismiss
        },                      // callback
        'Parabéns!',           // título
        'OK'                   // nome do botão
    );
}
