const fixedX = 200
const fixedY = 100
let freeX = 200
let freeYOrigin =200
let freeY = 200
const mass = 10
const g = 9.8
let t=0
let deltaT = .1
let tension = 0
let force =0
let k = .1
let velocity = 5
function setup() {
  createCanvas(400, 400);
}

function draw() {  
  background(220);
  
  tension = k*(freeYOrigin-freeY)
  
//  force = g-tension
  force = tension
  
  velocity += force*deltaT
  freeY += velocity*deltaT
  
  
  
  
  
  
  line(fixedX,fixedY,freeX,freeY)
  print(freeY)
  print(force)
  print(tension)

  t+=deltaT

}
