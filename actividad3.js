//actividad 3

const delay = (T) =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve();
        }, T);
    })
}

delay(6000).then(() =>{console.log("Espera Completada")});

delay(2000).then(() => {
    console.log("primer espera completada");
    return delay(2000);
}).then(() =>{
    console.log("segunda espera completada");
    return delay(2000);
}).then(() =>{
    console.log("tercer espera compeltada");
})
