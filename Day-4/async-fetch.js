async function showInfo(){
    
    //Peticion a una API con fetch
    let response = await fetch('https://api.github.com/users/yuliannydev/repos');

    //Para poder leer la respuesta, que se transforme
    //en un json
    let res = await response.json();

    console.log(res);
}

showInfo();