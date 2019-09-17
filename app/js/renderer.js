const { ipcRenderer } = require('electron');

const linkSobre = document.getElementById('link-sobre');
linkSobre.addEventListener('click', () => ipcRenderer.send('abrir-janela-sobre'));