class UFO {
    constructor(x, y, z) {
        this.x = x;
        this.y = 65;
        this.z = z;
        
        this.dy = Math.random() * 0.1; 
        
        this.obj = document.createElement("a-entity");

        let dome = document.createElement("a-sphere");
        dome.setAttribute("color", "lime");
        dome.setAttribute("radius", "2");
        dome.setAttribute("position", {x: 0, y: 0.3, z: 0});
        this.obj.append(dome);

        let base = document.createElement("a-cylinder");
        base.setAttribute("color", "gray");
        base.setAttribute("radius", "4.2");
        base.setAttribute("height", "0.5");
        base.setAttribute("position", {x: 0, y: 0, z: 0});
        this.obj.append(base);

        this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});
        scene.append(this.obj);
    }

    invade() {

       this.y -= this.dy;
       
            
        this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});
        }
    }