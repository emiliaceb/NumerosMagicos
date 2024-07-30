let numeroAleatorio;
const comenzarJuego = () => {
    numeroAleatorio = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(numeroAleatorio,' <= Numero aleatorio');
    //obtener el boton
    const botonComenzar = document.querySelectorAll('button');
    botonComenzar[0].style.display = 'none';

    const formulario = document.createElement('form');
    //creo lo de adentro del form
    const label = document.createElement('label');
    label.textContent = 'Ingresa un numero del 1 al 100'
    const input = document.createElement('input');
    const botonEnviar = document.createElement('button');
    botonEnviar.innerHTML = 'Enviar';
    botonEnviar.className= 'buttonEnviar'

    //insertar
    const div = document.querySelectorAll('div');
    console.log(div);
    div[2].appendChild(formulario);
    const form = document.querySelector('form');
    console.log(form);
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(botonEnviar);

    form.addEventListener('submit',adivinarNumero);
}

const adivinarNumero = (e) =>{
 e.preventDefault();
 const input = document.querySelector('input');
 const numero = parseInt(input.value)
 console.log('Numero ingresado:',numero);
 let bandera = false;

 if(numero<1 || numero>100 || isNaN(numero)){
    alert('El numero ingresado no es valido.');
    document.querySelector('input').value = '';
 }
 else{
    const div = document.querySelectorAll('div');

    //remover el parrafo anterior si existe
    const parrafoAnterior = document.querySelector('#resultado');
    if(parrafoAnterior){
        div[2].removeChild(parrafoAnterior);
    }

    const nuevoParrafo=document.createElement('p');
    nuevoParrafo.id= 'resultado';

        if(numeroAleatorio > numero){
            nuevoParrafo.innerHTML = 'El numero es mayor que el ingresado. Intentalo de nuevo!';
        }
        if(numeroAleatorio < numero){
            nuevoParrafo.innerHTML = 'El numero es menor que el ingresado. Intentalo de nuevo!';
        }
        if(numeroAleatorio == numero){
            nuevoParrafo.innerHTML = 'ACERTASTE! 😁👍';
            nuevoParrafo.className ='text-success'
        }
        div[2].appendChild(nuevoParrafo);
 }
}


