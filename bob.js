class Bob
{
    constructor (xpos, ypos, radius)
    {
        var options={
            isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
        }
        this.bob = Bodies.circle(xpos, ypos, radius, options);        
        World.add(world, this.bob)
        this.radius = radius;
    }
    display()
    {
        var position = this.bob.position;
        push();
        ellipseMode(RADIUS)
        fill ("pink")
        ellipse(position.x,position.y, this.radius);
        pop();
    }
}