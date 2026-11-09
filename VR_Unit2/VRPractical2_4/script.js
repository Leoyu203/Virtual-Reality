let scene;
let rockets = [];
let ufos = [];
let rnd = (l, u) => Math.floor(Math.random() * (u - l) + l);

window.addEventListener("DOMContentLoaded", function() {
    scene = document.querySelector("a-scene"); 

    for (let i = 0; i < 100; i++) {
        let r = new Rocket(rnd(-30, 30), rnd(-5, -1), rnd(-50, -5));       
        rockets.push(r);
    }
    for (let i = 0; i < 100; i++) {
        let u = new UFO(rnd(-30, 30), rnd(10, 30), rnd(-50, -5));       
        ufos.push(u);
    }

    loop();
});

function loop() {
    for (let i = 0; i < rockets.length; i++) {
        rockets[i].fly(); 
    }
    for (let i = 0; i < ufos.length; i++) {
        ufos[i].invade(); 
    }
    
    window.requestAnimationFrame(loop);
}