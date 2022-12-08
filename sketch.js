function setup() {
  // put setup code here
  createCanvas(500,500);
  background("#FE2F1E");
}
function draw() {
  // put drawing code here


stroke('#A35c2c');
fill('#f0A471');
ellipse(50,50,25,25);
ellipse(50,100,25,45);

recta(100,100,25,60);


triangle(200,50,200,100,400,100);

quad(200,300,200,400,250,100,300,350)
}