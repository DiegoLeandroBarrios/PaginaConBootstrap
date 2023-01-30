const app = document.getElementById('typewriter');/*representa el div donde se va a escribir con un metodo*/

const typewriter = new Typewriter(app,
    {
        loop: true, delay: 75
});

typewriter.typeString('Los perritos de casa')
.pauseFor(200).start();
    
