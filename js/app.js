const comenzarJuego = () => {
    console.log('desde la funcion comenzar juego')
    //obtener el boton
    const botonComenzar = document.querySelectorAll('button');
    console.log('botonComenzar[0]');
    botonComenzar[0].style.display = 'none';

    const formulario = document.createElement('form');
    //creo lo de adentro del form
    const label = document.createElement('label');
    label.textContent = 'Ingresa un numero del 1 al 100'
    const input = document.createElement('input');
    const botonEnviar = document.createElement('button');
    botonEnviar.innerHTML = 'Enviar'

    //inserto
    const div = document.querySelectorAll('div');
    console.log(div);
    div[2].appendChild(formulario);
    const form = document.querySelector('form');
    console.log(form);
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(botonEnviar);
    
}

