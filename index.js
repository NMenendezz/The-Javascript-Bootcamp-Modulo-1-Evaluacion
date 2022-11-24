/* Nos han encargado un controlador de gastos para una aplicación de gestión de finanzas.

El controlador debe permitir como mínimo:

- Añadir un gasto 
- Mostrar un listado de gastos 
- Editar un gasto 
- Eliminar un gasto 

Todo esto lo vamos a hacer con JavaScript por supuesto. Como aún no sabemos manipular el DOM (próximo módulo) vamos a hacerlo todo usando la consola del navegador y usando prompt para pedir datos al usuario. 

Hay un par de bonus que puedes hacer:
- Los datos de los gastos se guardan en el localStorage para que no se pierdan al recargar la página.
- Cuando lo termines puedes incluir también los ingresos y mostrar un balance de los mismos.
*/

/******************************************************************/

// Menú de elección
var opcion = 0;

do {
  /* opcion = parseInt(prompt(`
    Seleccione una opción:

      1. Añadir un gasto.
      2. Editar un gasto.
      3. Eliminar un gasto.
      4. Salir.
  `)); */

  switch (opcion) {
    case 1:
      console.log(opcion)
      //anadirGasto();
      break;
    case 2:
      console.log(opcion)
      //editarGasto();
      break;
    case 3:
      console.log(opcion)
      //eliminarGasto();
      break;
    default:
      console.log('Opción no válida')
      break;
  }

} while (opcion != 4);

// Añadir gasto


// Editar gasto

// Eliminar gasto