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

// Gastos
const datos = [];

// Añadir gasto
const anadirGasto = () => {
  let cantidad = parseInt(prompt(`Introduce la cantidad:`));
  let concepto = prompt(`Introduce el concepto (opcional):`)
  let id = datos.length ? datos[datos.length - 1].id + 1 : 1;

  let movimiento = {
    id: id,
    cantidad: - cantidad,
    concepto: concepto
  }

  datos.push(movimiento);
  return datos;
}

// Mostrar listado de gastos
const mostrarGastos = () =>{
  for (const movimiento of datos) {
    for (const key in movimiento) {
        console.log(`${key}: ${movimiento[key]}`)
    }
  }
}

// Editar gasto
const editarGasto = () => {
  let opciones = `Escriba el id de la transacción a editar:\n`
  datos.forEach(({ id, cantidad, concepto }) => {
    opciones += `${id}  |  ${cantidad}  |  ${concepto}\n`;
  });
  let id = parseInt(prompt(opciones));

  const resultado = datos.map((dato) => {
    if (dato.id === id) {
      dato.cantidad = - prompt(`Introduzca la nueva cantidad`);
      dato.concepto = prompt(`Introduzca el nuevo concepto`);
      alert(`Movimiento editado correctamente`);
    }
  });
  return resultado;
}

// Eliminar gasto
const eliminarGasto = () => {
  let opciones = `Escriba el id de la transacción a eliminar:\n`
  datos.forEach(({ id, cantidad, concepto }) => {
    opciones += `${id}  |  ${cantidad}  |  ${concepto}\n`;
  });
  let id = parseInt(prompt(opciones));

  const resultado = datos.filter((dato) => {
    if (dato.id === id) {
      datos.splice(datos.indexOf(id) - 1, 1);
      alert(`Movimiento eliminado`);
    } else {
      return dato;
    }
  });
  return resultado;
}

// Menú de elección
let opcion = 0;

do {
  opcion = parseInt(prompt(`
    Seleccione una opción:

      1. Añadir un gasto.
      2. Mostrar gastos.
      3. Editar un gasto.
      4. Eliminar un gasto.
      5. Salir.
  `));

  switch (opcion) {
    case 1:
      anadirGasto();
      break;
    case 2:
      mostrarGastos();
      break;
    case 3:
      editarGasto();
      break;
    case 4:
      eliminarGasto();
      break;
    case 5:
      break;
    default:
      console.log('Opción no válida')
      break;
  }

} while (opcion != 5);