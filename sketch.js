/*Dan Shiffman, the CodingTrain
var g = 0;*/

function setup() {
  //angleMode(RADIANS);
  createCanvas(400, 400);
  /*g = map(mouseX, 0, 400, 90, 255);
  g = map(mouseY, 0, 400, 255, 90);

  background(0, g, 0);*/
  background(245, 245, 219);
  
}

function draw() {
  
  //figuras
  stroke("brown");
  strokeWeight(1);
  fill(245, 245, 219, 75);
  ellipse(mouseX, 48, 50, 50);
  ellipse(352, mouseY, 50, 50);

  fill(245, 245, 219, 75);
  ellipse(48, mouseY, 50, 50);
  ellipse(mouseX, 352, 50, 50);
  
  fill(245, 245, 219, 75);
  triangle(mouseX, mouseY, 200, 150, 200, 230)

/* angleMode(DEGREES); 
  let a = atan2(mouseY - height / 2, mouseX - width / 2);
  translate(width / 2, height / 2);
  push();
  rotate(a);
  pop();
  angleMode(RADIANS);
  rotate(a); 
  fill(245, 245, 219, 75);
  triangle(-30, -5, 200, 150, 200, 230);*/

  //  drawBlob();
}

function mousePressed() {
  /*g = map(mouseX, 0, 400, 90, 255);
 g = map(mouseY, 0, 400, 255, 90);*/

  background(245, 245, 219);
  //background(0, g, 0);
}
//function mousePressed() {
//print("vertex(" + mouseX + "," + mouseY + ");");
//}

//function drawBlob() {}