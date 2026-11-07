// =====================================
// Sistema de Gestión de Tareas
// =====================================

/**
 * Christian Lafayette Martinez Pérez
 * 00000010383
 * Aplicaciones Web
 */

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
  { nombre: "Ir a la playa", prioridad: 1, completada: false },
  { nombre: "Estudiar JS", prioridad: 2, completada: true },
  { nombre: "Ver películas", prioridad: 3, completada: false }
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/
function mostrarTareas(lista) {
  // Aquí primero creo un ciclo for para recorrer los elementos del array lista, que es el
  // parámetro que le estoy pasando a la función mostrarTareas.
  for(let i = 0; i < lista.length; i ++){

    // Ahora le pongo la condición para ver el estado de cada tarea.

    // Si la tarea en la posición i dentro del array tiene el estado de completada, imprimimos
    // el nombre de la tarea y su estado de completada
    if(lista[i].completada === true)
      {console.log("La tarea " + lista[i].nombre + " está completada")}
    else

      // De otra manera, imprimimos el nombre de la tarea con su estado de pendiente
      {console.log("La tarea " + lista[i].nombre + " está pendiente")}
  }
}


/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/
const obtenerCompletadas = (lista) => {

  // Aquí simplemente regreso el nuevo array con las tareas completadas. Para esto 
  // cree la nueva función tareaCompletada que regresa una tarea cuando su atributo 
  // completada es verdadero.
  return lista.filter(function(tareaCompletada){
    return tareaCompletada.completada === true;
  });
};


/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/
const obtenerPendientes = (lista) => {

  // Prácticamente lo mismo, solo que en esta ocasión regreso un nuevo array con
  // las tareas que tienen como atributo completada false, es decir, están pendientes.
  return lista.filter(function(tareaPendiente){
    return tareaPendiente.completada === false;
  });
};


/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/
const obtenerNombres = (lista) => {

  // Aquí simplemente mapee las tareas dentro del arraylist y regresé únicamente
  // su atributo nombre.
  return lista.map(e => e.nombre)
};


/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/
function contarTareas(lista) {

  // A ver si entendí bien pero, creo que solo se deseaba obtener el total
  // de tareas dentro del array, esto lo obtuve con el length del array.
  return lista.length;
}


// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/

const sistema = {
  tareas: tareas,

  mostrarTareas: function() {

    // Aquí simplemente reutilicé el método mostrarTareas para pasarle
    // como parámetro las tareas que pertenecen a este objeto sistema.
    // Solo que en lugar de poner sistema.tareas, estoy poniendo this para
    // referirme a él.
    return mostrarTareas(this.tareas);
  },

    // Aquí hago prácticamente lo mismo, es decir, simplemente reutilicé el 
    // método obtenerCompletadas para pasarle como parámetro las tareas que 
    // pertenecen a este objeto sistema.

  mostrarCompletadas: function() {
    return obtenerCompletadas(this.tareas);
  },

    // Igual aquí.  Para esta función reutilizó la función obtenerPendientes.
  mostrarPendientes: function() {
    return obtenerPendientes(this.tareas);
  }
};


// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/

// Aquí primero valido si el arreglo de tareas es igual a 0, es decir,
// si no contiene ningún elemento.  De ser asi, se imprime que no hay tareas.
if(tareas.length === 0){
  console.log("No hay tareas");
}

// Si se encontraron tareas en el arreglo, entonces inicializo un contador
let contador = 0;

// Ahora hago un for para recorrer cada elemento del arreglo tareas y ver si su atributo
// completada es verdadero.  Si es asi, le sumamos un punto al contador.
for(let i = 0; i < tareas.length; i++){
  if(tareas[i].completada === true){
    contador++;
  }
}

// Una vez finalizada la iteración con el for, si el contador tiene el mismo
// valor que el número de elementos del arreglo, según yo se puede determinar
// que todas las tareas han sido completadas.
if(contador === tareas.length){
  console.log("Todas las tareas están completadas")
}

// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/

const opcion = 1;

// En este switch case imprimí mediante console.log los métodos globales
// mostrarTareas, obtenerCompletadas y obtenerPendientes con su respectivo
// parámetro.  Solo que no supe como habilitar las otras opciones sin un
// Scanner, por lo que siempre entra con la opción 1.
switch (opcion) {
  case 1:
    console.log("IMPRIMIENDO el Case 1")
    console.log(mostrarTareas(tareas));
    break;

  case 2:
    console.log("IMPRIMIENDO el Case 2")
    console.log(obtenerCompletadas(tareas));
    break;

  case 3:
    console.log("IMPRIMIENDO el Case 3")
    console.log(obtenerPendientes(tareas));
    break;

  default:
    console.log("Opción inválida");
}


// =====================================
// 6. Pruebas
// =====================================

/*
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/

// TODO 1
console.log("IMPRIMIENDO la parte del TODO 1")
mostrarTareas(tareas);

// TODO 2
console.log("IMPRIMIENDO la parte del TODO 2")
console.log(obtenerCompletadas(tareas));

// TODO 3
console.log("IMPRIMIENDO la parte del TODO 3")
console.log(obtenerPendientes(tareas));

// TODO 4
console.log("IMPRIMIENDO la parte del TODO 4")
console.log(contarTareas(tareas));

// TODO 5
console.log("IMPRIMIENDO la parte del TODO 5")
console.log(obtenerNombres(tareas));

// TODO 6
console.log("IMPRIMIENDO la parte del TODO 6")
sistema.mostrarTareas();
console.log(sistema.mostrarCompletadas());
console.log(sistema.mostrarPendientes());