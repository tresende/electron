const { ipcRenderer } = require('electron');

const linkSobre = document.querySelector('#link-sobre');
const botaoPlay = document.querySelector('.botao-play');

linkSobre.addEventListener('click', () => ipcRenderer.send('abrir-janela-sobre'));

botaoPlay.addEventListener('click', () => {
    console.log(1);
});

