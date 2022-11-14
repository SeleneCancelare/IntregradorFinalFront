function calcularTotal() {

    var cantEntradas,
        total,
        categoria,
        entradaEstudiante,
        entradaTrainee,
        entradaJr,

        

        cantEntradas = document.getElementById('Cantidad').value;
    categoria = document.getElementById('Categoria').value;




    entradaEstudiante = 200 - (200 * 80) / 100;
    entradaTrainee = 200 - (200 * 50) / 100;
    entradaJr = 200 - (200 * 15) / 100;
    general = 200;

    if (cantEntradas > 0 ) {
      if (categoria == 'Estudiante') {
        total = entradaEstudiante * cantEntradas;
        document.getElementById('importeTotal').innerHTML =
          'Total a Pagar: $' + total;
      } else if (categoria == 'Trainee') {
        total = entradaTrainee * cantEntradas;
        document.getElementById('importeTotal').innerHTML =
          'Total a Pagar: $' + total;
      } else if (categoria == 'Junior') {
        total = entradaJr * cantEntradas;
      }
    } else {
      window.alert('Debe ingresar una cantidad de entradas valida Ej: 1, 2, 3');
    }


    //const nombre = document.getElementById('Nombre').value

    var informacion = false

    informacion = {
      Nombre: document.getElementById('Nombre').value,
      Apellido : document.getElementById('Apellido').value,
      Email: document.getElementById('Email').value
    }

    console.log(informacion)

    if ( informacion['Nombre', 'Apellido', 'Email']=== '' ){
      window.alert('Complete los campos obligatorios (*)')

    }else exito()

  function exito(){
    window.alert('Sus datos han sindo enviados con exito')
    location.href = 'exito.html'
    calcularTotal && sessionStorage.setItem('calculartotal', JSON.stringify(informacion))
  }

}

  function borrar() {
    document.getElementById('Nombre').value = ' ';
    document.getElementById('Apellido').value = ' ';
    document.getElementById('Email').value = ' ';
    document.getElementById('Cantidad').value = ' ';
    document.getElementById('Categoria').value = 'Seleccione una Categoria';
    document.getElementById('importeTotal').innerHTML = 'Total a Pagar: $';
  }


