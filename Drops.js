class createDrop {
    constructor(x, y) {
      var options = {
        isStatic : false,
        restitution : 0.1,
        friction : 0.001,
        density : 1.2
  
      }      
      
      this.rain = Bodies.circle(x, y , 5, options);
      this.radius = 5;
      World.add(world, this.rain);
      
    }

    updateY(){
      if(this.rain.position.y < height){
        Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})

      }
    }
  
    showDrop(){
      
      //var pos = this.body.position;
      //push()  
      //translate(pos.x,pos.y);
    
      //rotate(angle);
      fill("blue");
      //imageMode(CENTER);
      ellipseMode(CENTER);
      //pop();
    ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
      
    }
  }