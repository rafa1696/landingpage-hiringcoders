// Função que pega data e subtrai da atual para gerar contagem regressiva

let dataReducao = new Date("Nov 26, 2021 00:00:00").getTime();

let contagemTempo = setInterval(() => {
    let agora = new Date().getTime();

    let distancia = dataReducao - agora;

    let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    let horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((distancia % (100 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("contagem").innerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";

    if (distancia < 0) {
        clearInterval(contagemTempo);
        document.getElementById("contagem").innerHTML = "EXPIRADO";
    }
}, 1000);