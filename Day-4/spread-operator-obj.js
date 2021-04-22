//Combinar dos objetos con Spread Operator

let persona = {
    nombre: "Yulianny",
    Apellido: "Betancourt"
}

let organizacion = {
    nombre: "Raydesite",
    rubro: "IT" 
}

let newObject = {
    ...persona,
    ...organizacion
}
console.log(newObject);


//Con Spread Operator si una propiedad tiene el msimo
//nombre en ambos objetos, mostrara la primera propiedad
//que se consiga
