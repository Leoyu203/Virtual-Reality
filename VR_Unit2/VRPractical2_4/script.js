let scene;
let rockets = [];
let ufos = [];
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);

window.addEventListener("DOMContentLoaded", function() {
    scene = document.querySelector("a-scene"); 

   
    for (let i = 0; i < 100; i++) {
        let r = new Rocket(rnd(-50,50),rnd(-50,50));       
        rockets.push(r);
    }

     for (let i = 0; i < 100; i++) {
        let u = new UFO(rnd(-50,50),rnd(-50,50));       
        ufos.push(u);
    }

    loop();
});

function loop() {

    for (let i = 0; i < rockets.length; i++) {
        r.fly(); 
    }

     for (let i = 0; i < ufos.length; i++) {
        u.invade(); 
    }

    
    
    window.requestAnimationFrame(loop);
}