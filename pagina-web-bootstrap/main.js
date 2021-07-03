const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop:true, // para que no pare de repetirse el texto un (bucle)
    delay:100   //velocidad a la que se pone o aparece cada caracter
});

typewriter
.typeString('La capital del sol.') // El texto que queremos que aparezca 
.pauseFor(3000) // Será la pausa entre bucles 
.start() // Método que hace que arranque