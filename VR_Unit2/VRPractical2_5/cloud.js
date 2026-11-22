class Cloud {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        
        this.obj = document.createElement("a-entity");

        // Center puff (tallest/largest)
        let centerPuff = document.createElement("a-sphere");
        centerPuff.setAttribute("color", "white");
        centerPuff.setAttribute("radius", "1.5");
        centerPuff.setAttribute("position", {x: 0, y: 0.3, z: 0});
        this.obj.append(centerPuff);

        // Left puff
        let leftPuff = document.createElement("a-sphere");
        leftPuff.setAttribute("color", "white");
        leftPuff.setAttribute("radius", "1.1");
        leftPuff.setAttribute("position", {x: -1.3, y: 0, z: 0.2});
        this.obj.append(leftPuff);

        // Right puff
        let rightPuff = document.createElement("a-sphere");
        rightPuff.setAttribute("color", "white");
        rightPuff.setAttribute("radius", "1.2");
        rightPuff.setAttribute("position", {x: 1.3, y: -0.1, z: -0.2});
        this.obj.append(rightPuff);

        this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});
        scene.append(this.obj);
    }
}