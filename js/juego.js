let imagenSuccess = document.getElementById("imgSuccess");
let palabrita;
let cant_errores = 0; //cuantas veces me equivoqué
let cant_aciertos = 0; //cuantas letras acerté

const palabras = [
    'megaman',
    'kirby',
    'yoshi',
    'pacman',
];
const btn =  document.getElementById("jugar");
const imagen = document.getElementById("imagen");
const btn_letras = document.querySelectorAll( "#letras button" );

/* click en iniciar juego */


function iniciar(){
    imagen.src = 'img/img0.png';
    imagenSuccess.style.cssText = 'display:none;';
    imagenSuccess.innerHTML = ``;
    btn.innerHTML = `<i class="fa-solid fa-shuffle mr-2"></i> Cambiar palabra`;
    cant_errores = 0;
    cant_aciertos = 0; 

    const parrafo = id( 'palabra_a_adivinar' );
    parrafo.innerHTML = ''; 

    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random( 0, cant_palabras );

    palabrita = palabras[ valor_al_azar ];
    console.log( palabrita );
    const cant_letras = palabrita.length;

    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = false;
    }

    for( let i = 0; i < cant_letras; i++ ){
        const span = document.createElement( 'span' );
        parrafo.appendChild( span );
    }

}

/* click de adivinar letra */
for( let i = 0; i < btn_letras.length ; i++ ){
    btn_letras[ i ].addEventListener( 'click', click_letras );
}

function click_letras(event){
    const spans = document.querySelectorAll( '#palabra_a_adivinar span' );
    const button = event.target; //cuál de todas las letras, llamó a la función.
    button.disabled = true;

    const letra = button.innerHTML.toLowerCase( );
    const palabra = palabrita.toLowerCase( ); // .toUpperCase( )

    let acerto = false;
    for( let i = 0; i < palabra.length;  i++ ){
        if( letra == palabra[i] ){
            //la variable i es la posición de la letra en la palabra.
            //que coincide con el span al que tenemos que mostarle esta letra...
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

    console.log(cant_errores);
    if( cant_errores == 7 ){
        Swal.fire({
            icon: 'error',
            title: 'Perdiste',
            text: `la palabra era ${palabrita}`
        })
        imagenSuccess.style.cssText = 'display:flex;';
        imagenSuccess.innerHTML = `<img src="img/sad.gif" class="imgSuccess"/>`;

        game_over();
    }else if( cant_aciertos == palabrita.length ){
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
        imagenSuccess.innerHTML = `<img src="img/${palabrita}.gif" class="imgSuccess"/>`;
        game_over( );
    }
}


/* fin del juego */
function game_over( ){
    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[i].disabled = true;
    }

    btn.innerHTML = `<i class="fa-solid fa-play mr-2"></i> Jugar`;
}


game_over( );