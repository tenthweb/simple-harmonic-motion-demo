const fixedX = 0
const fixedY = -150
let freeX = 0
let freeYOrigin =-0
let freeY = -0
const mass = 10
const g = 9.8
let t=0
let deltaT = .1
let tension = 0
let force =0
let k = .1
let velocity = 20


function setup() {
  createCanvas(800, 600, WEBGL);
  noFill();
  stroke(255);
}

function draw() {
  background(0);




  
  tension = k*(freeYOrigin-freeY)
  
//  force = g-tension
  force = tension
  
  velocity += force*deltaT
  freeY += velocity*deltaT
  
  
  
  
    let r = 100;
  let pitch = (fixedY-freeY);
  let L = 50;

  beginShape();
  for (let t = 0; t < PI*10; t += 0.05) {
    vertex (r*sin(t), fixedY-t*pitch/20, r*cos(t));
  }
  endShape();
  
 // line(fixedX,fixedY,freeX,freeY)


  t+=deltaT

}
