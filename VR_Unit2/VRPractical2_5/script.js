/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let maze = [
  "ooooooooo--ooooooooooo",
  "o---x-u---x-----u---oo",
  "o-x-x-xxx-x-xxxxxxx-xo",
  "o-x---x---x-------x--o",
  "o-xxxxx-xxxxxxxxx-xx-o",
  "o-----x--u----x------o",
  "oxxxx-xxxxxxx-x-xxxxxo",
  "o-u-x---x-----x------o",
  "o-x-xxx-x-xxxxxxxxxx-o",
  "o-x-----x----------x-o",
  "o-xxxxxxx-xxxxxxxx-x-o",
  "o-------x----u---x---o",
  "o-xxxxx-xxxxxxxx-xxx-o",
  "o--------------------o",
  "ooooooooo--ooooooooooo"
];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
     let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Rocket(c,1,r)
      }
      else if(cols[c] == "u"){
        new UFO(c,1,r);
      }else if(cols[c]=="o"){
        new Cloud(c,1,r)
      }
    }

  }

})