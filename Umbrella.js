
class Umbrella {
  constructor(x, y) {
    var options = {
      isStatic : true,
      //restitution : 0.1,
      //friction : 0.5,
      //density : 1.2

    }      
    //this.x = x;
    //this.y = y;
    //this.r = r;
    this.image = loadImage("walking_1.png");
    this.Umbrella = Bodies.circle(x, y, 50, options);
    this.radius = 50;
    World.add(world, this.Umbrella);
    
  }

  display(){

    var pos = this.Umbrella.position;
    //push()  
    //translate(pos.x,pos.y);
    //rotate(angle);
    //fill(255,0,255);
    imageMode(CENTER);
    ellipseMode(CENTER)
    image(this.image, pos.x, pos.y + 70, 300, 300);
    //pop();
  
    
  }
}
