import countdown from "./countdown.js";

const tempoParaAniver = new countdown("28 july 2022 10:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostartempo() {
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoParaAniver.total[index];
    });
}
mostartempo();
setInterval(mostartempo, 1000);