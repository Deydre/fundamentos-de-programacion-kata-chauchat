let cargador = ["pium!", "pium!", "pium!", "pium!", "pium!", "pium!", "pium!"]


function chauchat(cargador) {

    if (Math.random() < 0.8 ) {
        console.log("Illo, me he quedao pillá!");
        return;
    }

    for (let i = 0; i < cargador.length; i++) {
        console.log(cargador[i]);

        if ((i + 1) % 3 === 0) {
            console.log('\n'); 
        }
    }
}

chauchat(cargador);