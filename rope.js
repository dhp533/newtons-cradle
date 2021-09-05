class Rope {
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA : body1,
            bodyB : body2,
            pointB:{x:this.offsetX, y:this.offsetY},
          // length : 400,
            
        }
        
         this.rope = Matter.Constraint.create(options);
         World.add (world, this.rope);
    }
    display() {
        var bobPos = this.rope.bodyA.position
        var RoofPos = this.rope.bodyB.position
        var RoofPosX = RoofPos.x + this.offsetX
        push();
        stroke ("black")
        line(RoofPosX, RoofPos.y, bobPos.x, bobPos.y);
        pop();
    }
}