const requestPromise = require('request-promise');

async function showInfo(){
        
        try {
          const respuesta = await requestPromise('https://api.github.com/users/yuliannydev/repos');

            if (respuesta.status >= 400){
            throw new Error("Bad response from server");
            }

            const res = await res.json();

            console.log(res);
        } catch (err) {
            console.log(err);
        }
    
    
       // Peticion a una API con fetch
        //let response = await requestPromise('https://pokeapi.co/api/v2/pokemon/pikachu');

        //Para poder leer la respuesta, que se transforme
        //en un json
        //let res = await response.json();
    
        //console.log(res);
}
showInfo();

