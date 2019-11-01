const { ipcRenderer } = require('electron');
const timer = require('./timer');

const linkSobre = document.querySelector('#link-sobre');
const botaoPlay = document.querySelector('.botao-play');
const tempo = document.querySelector('.tempo');

linkSobre.addEventListener('click', () => ipcRenderer.send('abrir-janela-sobre'));

let images = ['img/play-button.svg', 'img/stop-button.svg'];
botaoPlay.addEventListener('click', () => {
    images = images.reverse();
    timer.iniciar(tempo);
    botaoPlay.src = images[0];

});
