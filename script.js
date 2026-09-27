const texto = "Desenvolvedor Web e Estudante do ITC";
const elemento = document.getElementById("digitando");

let i = 0;
let apagando = false;

function efeitoDigitando() {

    if (!apagando) {

        // ESCREVENDO
        elemento.textContent = texto.substring(0, i + 1);

        i++;

        // terminou de escrever
        if (i === texto.length) {

            apagando = true;

            // espera 2 segundos antes de apagar
            setTimeout(efeitoDigitando, 2000);

            return;
        }

        // velocidade de escrita
        setTimeout(efeitoDigitando, 100);

    } else {

        // APAGANDO
        elemento.textContent = texto.substring(0, i - 1);

        i--;

        // terminou de apagar
        if (i === 0) {

            apagando = false;

            // espera meio segundo antes de escrever novamente
            setTimeout(efeitoDigitando, 500);

            return;
        }

        // velocidade de apagar
        setTimeout(efeitoDigitando, 60);
    }
}

efeitoDigitando();