function addTematicas(){
    let selectTematica = document.getElementById("flex-tematicas");
    let tematica;

    for(i = 0 ; i< tematicas.length ; i++){
            tematica = getTematica(tematicas[i]);
            selectTematica.innerHTML += ` <div id="card-tematica${tematicas[i]}" class="card-tematica ${i == 0 ? 'active' : ''}" onclick="cambiarTematica('${tematicas[i]}')">
            <img src="img/tematica/${tematica.bg}" >
                ${tematica.nombre}
            </div> `;    
    }
}

function getTematica(t){
    switch (t) {
        case "juegosRetro":
            
            return juegosRetro;

          break

        case "peliculas":

            return peliculas;

          break;

        case "coming_soon":

            return coming_soon;

          break;

        default:

            return juegosRetro;

          break
      }
}


let tematicas = ["JuegosRetro", "peliculas", "coming_soon" ]



let juegosRetro = {

  nombre: "Juegos retro",
  bg: 'juegos.jpg',
  palabras: [
    {
        nombre: 'megaman',
        pista: 'es azul'
    },
    {
        nombre: 'kirby',
        pista: 'una bola rosada'
    },
    {
        nombre: 'yoshi',
        pista: 'es verde'
    },
    {
        nombre: 'pacman',
        pista: 'es una bola amarilla'
    },
 
  ]
}

 
let peliculas = {
  
    nombre : 'peliculas',
    bg: 'peliculas.jpg',
    palabras: [
        {
            nombre: 'Coraline',
            pista: 'botones'
        },
        {
            nombre: 'Spirit',
            pista:  'Ya nadie me va dominaar'
        },
        {
            nombre: 'shrek',
            pista: 'Muchisimas gracias, doy clases los jueves'
        },
        {
            nombre: 'Madagascar',
            pista: 'Un leon, un hipopotamo, una jirafa y una ze...'
        },
    ]
}


let coming_soon = {
    nombre : 'proximamente',
    bg: 'commingsoon.jpg',
    palabras: [
 
    ]
}

