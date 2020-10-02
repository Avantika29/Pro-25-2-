class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic' : true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);

      this.image = loadImage("images/dustbin.png");
    }

    display(){
      var pos =this.body.position;
     
      push();
      rectMode(CENTER);
      fill(255);
      

      imageMode(CENTER);
      image(this.image,pos.x,pos.y,70,100);

      
      pop();
    }
  }
  