class Rope  {
    constructor(bodyA,pointB){
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.2,
        Length: 250
      }
    
    this.pointB = pointB;
    this.rope = Constraint.create(options);

    World.add(world,this.rope);
    }
  
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke(220);
      fill("green");
      rect(0,0,this.width,this.height);
      pop();
    }
  };
  