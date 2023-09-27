//Ejercicio1
function numeroMasRepetido(arreglo) {
  const conteos = {};

  arreglo.forEach((numero) => {
    conteos[numero] = (conteos[numero] || 0) + 1;
  });

  let numeroMasRepetido;
  let maxConteo = 0;

  for (const numero in conteos) {
    if (conteos[numero] > maxConteo) {
      maxConteo = conteos[numero];
      numeroMasRepetido = numero;
    }
  }

  return parseInt(numeroMasRepetido);
}

const arreglo = [3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6];
const resultado = numeroMasRepetido(arreglo);
console.log(`El número más repetido en el arreglo es: ${resultado}`);

//Ejercicio2
function letrasEncontradas(arr) {
  const letras = arr.filter((el) => typeof el === "string" && el.length === 1);
  return letras;
}

const arr = [8, "e", 7, 2, "a", "d", "f", 2, 3, 1, 4, 3];
const resultado2 = letrasEncontradas(arr);
console.log(`Las letras son: ${resultado2}`);

//Ejercicio3
function numeroGrande(arr2) {
  if (arr2.length === 0) return null;

  let masGrande = arr2[0];

  for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > masGrande) {
      masGrande = arr2[i];
    }
  }
  return masGrande;
}

const arr2 = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];
const resultado3 = numeroGrande(arr2);
console.log(`EL numero mayor es: ${resultado3}`);

//Ejercicio4
function numeroGrande(arr3) {
  if (arr3.length === 0) return null;

  let masPequenio = arr3[0];

  for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] < masPequenio) {
      masPequenio = arr3[i];
    }
  }
  return masPequenio;
}

const arr3 = [1, 4, 5, -1, -7, 2, 3, 9];
const resultado4 = numeroGrande(arr3);
console.log(`EL numero mayor es: ${resultado4}`);

//Ejercicio5
class Contacto {
  constructor(nombre, apellidos, telefono) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.telefono = telefono;
  }
}

class ListaContactos {
  constructor() {
    this.contactos = [];
  }

  agregarContacto(Contacto) {
    this.contactos.push(Contacto);
  }

  buscarContacto(nombre) {
    return this.contactos.find((Contacto) => Contacto.nombre === nombre);
  }
}

const lista = new ListaContactos();

const contacto1 = new Contacto("Carlos", "Manzanilla", 9994356723);
const contacto2 = new Contacto("Petra", "Sanchez", 55342817);

lista.agregarContacto(contacto1);
lista.agregarContacto(contacto2);
console.log(
  `Los contactos agregados fueron ${contacto1.nombre} y ${contacto2.nombre} con sus respectivos datos`
);

const BuscarNombre = "Petra";
const contactoEncontrado = lista.buscarContacto(BuscarNombre);
console.log(`El contacto encontrado fue ${contactoEncontrado.nombre}`);
