function setup() {
  // Anna Le
  createCanvas(400, 269);
  background(114, 1, 1)

  createCanvas(400, 269);
  background(114, 1, 1)

}

function draw() {
  
  
  // top line
  strokeWeight(3);
  line(0, 153, 400, 153);
  
  // middle line
  strokeWeight(5);
  line(0, 180, 400, 180);
  
  // bottom line
  strokeWeight(8);
  line(0, 220, 400, 220);
  
  // blue rectangle taking a nap
  // x, y, w, h,
  fill(1, 9, 54)
  rect(0, 0, 250, 150);
  
  // sky
  // x, y, w, h,
  strokeWeight(3);
  fill(122, 120, 133)
  rect(150, 0, 250, 150);
  
  // thumb
  // x, y, diameter
  fill(172, 144, 132)
  circle(280, 30, 95);
  
  // red triangle / suit
  // x1, y1, x2, y2, x3, y3
  strokeWeight(4);
  fill(114, 1, 1)
  triangle(120, 145, 100, 0, 30, 0);
  
  
  // Give each corner a unique radius.
  // hand rectangle
  // x, y, w, h
  fill(172, 144, 132)
  rect(175, 0, 155, 150, 60, 80, 40, 8);
  
  // finger line
  // x1, y1, x2, y2
  line(175, 90, 500, 150);
  
  // line hand
  // x1, y1, x2, y2
  line(175, 50, 330, 75);
  
  // yellow triangle
  // x1, y1, x2, y2, x3, y3
  fill(224, 178, 2)
  triangle(0, 150, 85, 150, 0, 0);
  
  // grey rectangle standing up
  // x, y, w, h,
  fill(207, 204, 199)
  rect(250, 0, 40, 150);
  
  // grey rectangle taking a nap
  // x, y, w, h,
  strokeWeight(5);
  fill(207, 204, 199)
  rect(290, 115, 140, 35); 
  
  // print details
  // x, y, diameter
  noFill();
  strokeWeight(8)
  circle(0, 30, 30);
  circle(0, 50, 30);
  circle(0, 100, 30);
  circle(40, 130, 30);
  strokeWeight(12)
  fill(0)
  circle(0, 120, 30);
  circle(50, 140, 10);
  circle(50, 100, 5);
  noFill();
  circle(30, 70, 5);

}