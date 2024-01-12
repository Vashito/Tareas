// funciones en JS
// declaracion tradicional de una funcion 
function saludar(nombre="Javier"){
    return `Hola ${ nombre }`;
}

// invocar una funcion 

console.log (saludar(Ana), saludar());
console.log(saludar);



// declaracion de una funcion como una constante
const saludar = function (nombre = "Fer"){
    return `Hola ${nombre}`;
}

// declaracion de una funcion flecha
function saludar(nombre = "Ana") {
    return `Hola ${nombre}`;
}

// notacion en una sola linea 
const saludar2 = (nombre="Arely") =>   ` Hola ${nombre}`;


/* 
Ejerciocio 
1. Transforma la funcion a flecha
2. retorna el obejto
3. probar la funcion imprimiendo en consola 

*/
const getUsuario = (nombre) => ({
    id: 123,
    nombre:nombre,


});

console.log(getUsuario(Fernando));