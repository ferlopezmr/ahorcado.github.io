let imagenSuccess = document.getElementById("imgSuccess");
let bg = document.getElementById("juego");
let palabraAdivinar;
let cant_errores = 0; 
let cant_aciertos = 0; 
let tematica = getTematica(tematicas[0]);
const btn =  document.getElementById("jugar");
const imagen = document.getElementById("imagen");
const btn_letras = document.querySelectorAll( "#letras button" );
const btn_ayuda = document.getElementById("ayuda");

addTematicas();

function cambiarTematica(t){

    if( getTematica(t).palabras.length < 1 ){

        Swal.fire({
            icon: 'error',
            title: 'No se puede seleccionar esa tematica',
            text: `Muy pronto se habilitara!`
        })
            

    }else{
  
        document.querySelector('.card-tematica.active').classList.remove("active");
        tematica = getTematica(t);
        document.querySelector('#card-tematica'+t).classList.add("active");
        bg.style.backgroundImage = `url('./img/tematica/${tematica.bg}')`;
        iniciar();

    }
}


/* click en iniciar juego */
function iniciar(){
    btn_ayuda.style.cssText = 'display:block;';
    imagen.src = 'img/img0.png';
    imagenSuccess.style.cssText = 'display:none;';
    imagenSuccess.innerHTML = ``;
    btn.innerHTML = `<i class="fa-solid fa-shuffle"></i> <span class="n-d-mobile"> Cambiar palabra </span>`;
    cant_errores = 0;
    cant_aciertos = 0; 

    const parrafo = document.getElementById('palabra_a_adivinar');
    parrafo.innerHTML = ''; 

    const cant_palabras = tematica.palabras.length;

    palabraAdivinar = tematica.palabras[ Math.floor( Math.random( ) * (cant_palabras )) ];
    
    
 
    const cant_letras = palabraAdivinar.nombre.length;

    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = false;
    }

    for( let i = 0; i < cant_letras; i++ ){
        const span = document.createElement( 'span' );
        parrafo.appendChild( span );
    }

}

for( let i = 0; i < btn_letras.length ; i++ ){
    btn_letras[ i ].addEventListener( 'click', click_letras );
}

function click_letras(event){
    const spans = document.querySelectorAll( '#palabra_a_adivinar span' );
    const button = event.target; 
    button.disabled = true;

    const letra = button.innerHTML.toLowerCase( );
    const palabra = palabraAdivinar.nombre.toLowerCase( );

    let acerto = false;
    for( let i = 0; i < palabra.length;  i++ ){
        if( letra == palabra[i] ){

            spans[i].innerHTML = letra;
            cant_aciertos++;
            acerto = true;
        }
    }

    if( acerto == false ){
        cant_errores++;
        const source = `img/img${cant_errores}.png` ;
        imagen.src = source;
    }


    if( cant_errores == 7 ){
        Swal.fire({
            icon: 'error',
            title: 'Perdiste',
            text: `la palabra era ${palabraAdivinar.nombre}`
        })
        imagenSuccess.style.cssText = 'display:flex;';
        imagenSuccess.innerHTML = `<img src="img/sad.gif" class="imgSuccess"/>`;

        game_over();
        
    }else if( cant_aciertos == palabraAdivinar.nombre.length ){
        Swal.fire({
            title:'Ganaste!!!',
            icon: 'success',
            width: 600,
            padding: '3em',
            color: '#F26D3D',
            background: '#fff',
            backdrop: `
              rgba(0,0,123,0.4)
              url("img/confeti.png")
              left top
              no-repeat
            `
        })
        imagenSuccess.style.cssText = 'display:flex;';
        imagenSuccess.innerHTML = `<img src="img/${palabraAdivinar.nombre}.gif" class="imgSuccess"/>`;
        game_over( );
    }
}


/* fin del juego */
function game_over( ){
    btn_ayuda.style.cssText = 'display:none;';
    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[i].disabled = true;
    }

    btn.innerHTML = `<i class="fa-solid fa-play"></i> <span class="n-d-mobile"> Jugar </span`;
}

function getPista(){
    Swal.fire(palabraAdivinar.pista);
}


game_over( );

document.onselectstart = selecionar;
document.oncontextmenu = selecionar;

function selecionar() {
    return false;
}

