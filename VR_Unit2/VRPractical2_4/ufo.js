class UFO {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        
        this.dy = Math.random() * 0.15 + 0.05; 
        
        this.obj = document.createElement("a-entity");

        let dome = document.createElement("a-sphere");
        dome.setAttribute("color", "lime");
        dome.setAttribute("radius", "0.6");
        dome.setAttribute("position", {x: 0, y: 0.3, z: 0});
        this.obj.append(dome);

        let base = document.createElement("a-cylinder");
        base.setAttribute("color", "purple");
        base.setAttribute("radius", "1.5");
        base.setAttribute("height", "0.3");
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