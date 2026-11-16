class Mech{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;

        this.obj = mechTemplate.cloneNode(True);
        this.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.obj);
    }
}
