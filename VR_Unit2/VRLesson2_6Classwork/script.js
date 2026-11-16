let scene;
let mechTemplate;
let mechs = [] ;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");
  mech1 = mechTemplate.cloneNode(True);

   for(let x = -10; x < 10; x += 2){
    for(let z = -10; z < 10; z += 2){
      let m = new Mech (x, 1, z);
      mechs.push(m);
    }
  }
 
  loop();
})
function loop(){


  window.requestAnimationFrame( loop );
}
