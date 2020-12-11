class Paper {
    constructor(x, y, radius) {
   
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage('images/paper.png');
        World.add(world, this.body);
    }

    display () {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius);
    }
}