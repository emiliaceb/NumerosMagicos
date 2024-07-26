const comenzarJuego = () => {
    console.log('desde la funcion comenzar juego')
    //obtener el boton
    const botonComenzar = document.querySelectorAll('button');
    console.log('botonComenzar[0]');
    botonComenzar[0].style.display = 'none';
    const parrafoNuevo = document.createElement('p');
    parrafoNuevo.textContent = 'Ingresa un numero del 1 al 100';

    //inserto el parrafo nuevo
    const div = document.querySelectorAll('div');
    console.log(div);
    div[2].appendChild(parrafoNuevo);
}

