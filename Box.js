class Box {
    constructor(x,y,width,height) {
      var options= {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
      this.height = height;
      World.add(world, this.body);
   }
    display(){
      var pos =this.body.position;
     rectMode(CENTER);
      fill(180, 65, 65);
      rect1(pos.x, pos.y, this.width, this.height);
      rect2(pos.x, pos.y, this.width, this.height);
      rect3(pos.x, pos.y, this.width, this.height);
    }
  }