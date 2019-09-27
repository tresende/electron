const { ipcRenderer, shell } = require('electron');

const linkSobre = document.getElementById('link-fechar');
const linkGithub = document.getElementById('link-github')
const versaoElectron = document.getElementById('versao-electron')

linkSobre.addEventListener('click', () => ipcRenderer.send('fechar-janela-sobre'));
linkGithub.addEventListener('click', () => shell.openExternal('https://github.com/tresende'));

window.onload = function(){
    versaoElectron.textContent = process.versions.electron;
}
