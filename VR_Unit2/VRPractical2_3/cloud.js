class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let cldprt1 = document.createElement("a-sphere")
  cldprt1.setAttribute("color","white");
  cldprt1.setAttribute("radius","1.3");
  cldprt1.setAttribute("position","0 10 0");
  this.obj.append(cldprt1);


  let cldprt2 = document.createElement("a-sphere")
  cldprt2.setAttribute("color","white");
  cldprt2.setAttribute("radius","0.6");
  cldprt2.setAttribute("position","1.5 10 0");
  this.obj.append(cldprt2);

  let cldprt3 = document.createElement("a-sphere")
  cldprt3.setAttribute("color","white");
  cldprt3.setAttribute("radius","1");
  cldprt3.setAttribute("position","2 10 0");
  this.obj.append(cldprt3);
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}