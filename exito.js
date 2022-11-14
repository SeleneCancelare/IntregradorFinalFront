let exito = sessionStorage.getItem('calculartotal')

exito = JSON.parse(exito)
    
 let Nombre = exito['Nombre']
 let Apellido = exito['Apellido']

 console.log(Nombre)
document.getElementById('Nombre').innerText = 'Nombre: ' + Nombre 


document.getElementById('Apellido').innerText = 'Apellido: ' + Apellido