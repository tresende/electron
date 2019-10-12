const { ipcRenderer } = require('electron');

const linkSobre = document.querySelector('#link-sobre');
const botaoPlay = document.querySelector('.botao-play');

linkSobre.addEventListener('click', () => ipcRenderer.send('abrir-janela-sobre'));

let images = ['img/play-button.svg', 'img/stop-button.svg'];
botaoPlay.addEventListener('click', () => {
    images = images.reverse();
    botaoPlay.src = images[0];
});
