let scene, car, sun, rocket, dude, pokeball
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    car = document.querySelector("#car");
    sun = document.querySelector("#sun");
    rocket = document.querySelector("#rocket");
    dude = document.querySelector("#dude");
    pokeball = document.querySelector("#pokeball");

    car.x = 0;
    car.dx = 0.05;

    rocket.y=0;
    rocket.dy=0.1;

    sun.o=0;
    sun.do=0.1;


    loop();

    
})

function loop(){
    car.x += car.dx;
    car.setAttribute("position",{x:car.x , y:0, z:-5});

    rocket.y += rocket.dy;
    rocket.setAttribute("position",{x:0,y:rocket.y,z:-5});

    sun.o += sun.do;
    sun.setAttribute("opacity",sun.o);

    window.requestAnimationFrame(loop);
}
