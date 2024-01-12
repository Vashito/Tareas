// Desestructuracion de Arreglos
const arreglo = [
'Batman', 
'iroman',
'spiderman',
]
console.log(arreglo);

//La desestructuracion de arreglos es
// similar a la de objetos
const[,,personaje ] = arreglo;
console.log(personaje);


const arre = () => {
  return [
    'ABCDE',
    12345,

  ]
}

// desestrecturando funciones que 
//devuelvan arreglos
const [letras,numeros] = arre();
console.log(letras,numeros);

const _usestate = (valor) => {
return[
  valor,
  () => 'Esta es una funcion'
]
}

console.log(_usestate(50));

/*Ejercicio:
Desestructura la funcion _usestate
como sigue:
1. El valor Desestructurado commo 
'nombre'
2. La funcion Desestructurada como getMensaje()
3.ejecuta la funcion y muestra 
resultado en la consola 
*/
/*const [letra  ,numero] = getMensaje();
console.log(letras,numeros);*/

const [nombre,getMensaje] =  usestate();
console.log(nombre,getMensaje);