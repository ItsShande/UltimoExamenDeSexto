//actividad 1 del examen
const tomaNumero = (N) =>{
    return new Promise((resolve, reject) =>{
        if(N > 5){
            resolve(`numero aceptado: ${[N]}`);
        }
        else {
            reject(`numero rechazado: ${[N]}`);
        }
    })
}

tomaNumero(4).then((msg) =>{console.log(msg)}).catch((msg) => {console.log(msg)});