function cuadroover(cuadro) {
    cuadro.classList.replace('border-muted', 'border-primary')

}

function cuadroleave(cuadro) {
    cuadro.classList.replace('border-primary', 'border-muted')


}

function cuadroclick(cuadro) {
    cuadro.ariaChecked = true
    cuadro.classList.replace('border-primary', 'border-warning')
    cuadro.classList.replace('border-muted', 'border-warning')

    select.value =

        cuadro.id === 'cuadro1' && 'Estudiante' || 
        cuadro.id === 'cuadro2' && 'Trainee' || 
        cuadro.id === 'cuadro3' && 'Junior' 

    for (let item of cuadros) {
        if(item.id !== cuadro.id) {
            item.classList.replace('border-warning', 'border-muted')
        }
    }


    cuadro.ariaChecked = false

}

function asignareventos (cuadro) {
    cuadro.addEventListener('mouseover', ()=> cuadroover(cuadro))
    cuadro.addEventListener('mouseleave',()=> cuadroleave(cuadro))
    cuadro.addEventListener('click',()=> cuadroclick(cuadro))

}

asignareventos(cuadro1)
asignareventos(cuadro2)
asignareventos(cuadro3)





