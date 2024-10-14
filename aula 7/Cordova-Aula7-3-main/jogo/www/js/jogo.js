import inicio from './modulo.js';

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    pronto();
}

async function pronto() {
    await inicio();
}

