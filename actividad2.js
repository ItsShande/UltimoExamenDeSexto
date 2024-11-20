//actividad 2
const multiplybyThree = (N) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(N * 3);
        }, 2000)
    })
}

const addFive = (N) =>{
    return new Promise((resolve, reject) =>{
        resolve(N + 5);
    })
}

multiplybyThree(4).then((N = multiplybyThree(N)) =>{
addFive(N).then((msg) =>{console.log(msg)}
)});
