class Rocket {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        
        this.dy = Math.random() * 0.2 + 0.05; 
        
        this.obj = document.createElement("a-entity");

        let head = document.createElement("a-cone");
        head.setAttribute("radius-top","0");
        head.setAttribute("radius-bottom","0.5");
        head.setAttribute("color", "red");
        head.setAttribute("height", "1");
        head.setAttribute("position", {x: 0, y: 0, z: -2});
        this.obj.append(head);

        let body = document.createElement("a-cylinder");
        body.setAttribute("color", "gray");
        body.setAttribute("radius", "0.5");
        body.setAttribute("height", "2");
        body.setAttribute("position", {x: 0, y: -1.5, z: -2});
        this.obj.append(body);

        let flame = document.createElement("a-cone");
        head.setAttribute("radius-top","0");
        head.setAttribute("radius-bottom","0.9");
        flame.setAttribute("color", "orange");
        flame.setAttribute("height", "2");
        flame.setAttribute("rotation", "-180 0 0");
        flame.setAttribute("position", {x: 0, y: -3, z: -2});
        this.obj.append(flame);

        this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});
        scene.append(this.obj);
    }

    fly() {
        this.y += this.dy;

        this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});
    }
}