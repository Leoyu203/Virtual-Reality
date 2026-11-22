class Target{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.a = 0;
        this.da = 0.1;


        this.obj = document.createElement("a-box");
        this.obj.setAttribute("wireframe",true);

        let target = document.createElement("a-box");
        target.setAttribute("position",{x:0,y:0,z:0});
        this.obj.append(target);

        this.obj.setAttribute("position",{x:0,y:0,z:0})
        this.obj.append(this.obj);

        
    }
}