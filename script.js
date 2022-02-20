const elDia = document.getElementById('dia');
const elHora = document.getElementById('hora');
const elMinuto = document.getElementById('minuto');
const elSegundo = document.getElementById('segundo');




const anoNovo = '1 Jan 2026';

function contador(){
    const dataAnoNovo = new Date(anoNovo);
    const dataCorrente = new Date();

    const totalSegundos = (dataAnoNovo - dataCorrente)/1000;

    const dias = Math.floor(totalSegundos / 3600 / 24);
    const horas = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = Math.floor(totalSegundos) % 60;

    elDia.innerHTML = dias;
    elHora.innerHTML = formataData(horas);
    elMinuto.innerHTML = formataData(minutos);
    elSegundo.innerHTML = formataData(segundos);
}

function formataData(time) {
    return time < 10 ? `0${time}` : time;
}

//chamada inicial
contador();

setInterval(contador, 1000);