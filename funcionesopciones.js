function seleccionhecha() {

    select.value === 'Estudiante' && cuadroclick(cuadro1)
    select.value === 'Trainee' && cuadroclick(cuadro2)
    select.value === 'Junior' && cuadroclick(cuadro3)

}

select.addEventListener('change', seleccionhecha)
