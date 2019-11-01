const moment = require('moment');
let segundos;

module.exports = {
    iniciar(el) {
        const tempo = moment.duration(el.textContent);
        segundos = tempo.asSeconds();
        setInterval(() => el.textContent = this.segundosParaTemp(segundos++), 1000);
    },
    segundosParaTemp: (segundos) => moment().startOf('day').seconds(segundos).format("HH:mm:ss"),
    parar() {
    }
}