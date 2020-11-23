class Plinko {
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          restitution:0.8,
          friction:0.3,
          density:1.0
      }
      this.body = Bodies.circle(x, y, r/2, options);
      this.r=r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      ellipseMode(RADIUS);
      pop();
    }
  };
  