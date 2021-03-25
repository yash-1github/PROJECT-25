class Paper {
    constructor(x, y, r ) {
      var options = {
        
          'restitution':0.3,
          'friction':0.5 ,
          'density':0.5,
          
      }
      this.image= loadImage("paper.png");
      this.x= x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x,this.y,this.r/2, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
      
      ellipseMode(RADIUS);
      strokeWeight(0);
      
      fill("white");
      
      imageMode(CENTER);
        image(this.image, 0, 0, this.r , this.r);
      pop();
    }
  };