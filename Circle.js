function Circle(x,y,col){
    this.alpha = 127;
    this.color = color(255,0,0,this.alpha);
    this.x = x;
    this.y = y;

  this.show = function(){
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, 55, 55);
  }

  this.update = function(){
  //  this.x += 1;
//this.y += 1;
    this.updateAlpha();
  }

  this.updateAlpha = function(){
    let r = random(5);

    this.alpha-=r;
    if(this.alpha < 5){
      this.alpha = 255;
    }
    this.color = color(255,0,0,this.alpha);
  }

}
