let circles = [];

function spawn(){
  circles = []

  for (var i = 0; i < 100; i++) {
    let col = color(255,0,0);
    let d = new Circle(random(width),random(height),col);
    circles.push(d);
  }
}

function setup() {

  createCanvas(windowWidth,windowHeight);
  background(0);

  spawn();
}

function mousePressed() {
    fullscreen(true);
    resizeCanvas(displayWidth, displayHeight);
    spawn();
}

function draw() {
  background(0);

  for(let i = 0; i < circles.length;i++){
    circles[i].update();
    circles[i].show();
  }



}
