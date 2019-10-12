const { ipcRenderer, shell } = require('electron');
const process = require('process');

const linkFechar = document.querySelector("#link-fechar");
const linkTwitter = document.querySelector("#link-twitter");
const versaoElectron = document.querySelector('#versao-electron');

window.onload = () => versaoElectron.textContent = process.versions.electron;
linkFechar.addEventListener('click', () => ipcRenderer.send('fechar-janela-sobre'));
linkTwitter.addEventListener('click', () => shell.openExternal("https://www.twitter.com/tresende"));
