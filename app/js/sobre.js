const { ipcRenderer } = require('electron');

const linkSobre = document.getElementById('link-fechar');
linkSobre.addEventListener('click', () => ipcRenderer.send('fechar-janela-sobre'));