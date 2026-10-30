class House{
    constructor(x,y,z){
    this.obj = document.createElement("a-entity");

     let base = document.createElement("a-box");
  base.setAttribute("position","0 0 0");
  base.setAttribute("scale","2 2 2");
  base.setAttribute("src","brick2.jpg");
 this.obj.append(base);

  let roof = document.createElement("a-cone");
  roof.setAttribute("position","0 1.5 0");
  roof.setAttribute("src","roof.jpg");
  this.obj.append(roof);

  this.obj.setAttribute("position",{x:x, y:y, z:z});
  scene.append( this.obj )
}
}