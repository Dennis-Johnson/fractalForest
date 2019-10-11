var Mover = function(){

  this.location = createVector(random(width/2),random(height/2));
  this.velocity = createVector(0,0);
  this.acceleration = createVector(0,0);

   this.update = function(){
    this.acceleration = p5.Vector.random2D();
    this.location.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(10);
  };



   this.edges = function(){
     if(this.location.x < 0) this.location.x = width;
     if(this.location.y < 0) this.location.y = height;
     if(this.location.x > width) this.location.x = 0;
     if(this.location.y > height)this.location.y = 0;
  };



  this.display = function(){
    noStroke();
    fill(255);
    ellipse(this.location.x,this.location.y,30,30);
  };

};
