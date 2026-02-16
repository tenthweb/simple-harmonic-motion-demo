// ---- PARAMETERS ----
let m = 1;        
let L0 = 1;       
let k = 100;     
let g = -9.81;   
let damping = 0.05; 

let x;           
let v = -1;      

let scale = 100;  // 1 m -> 100 pixels
let dt;

let turns = 10;   // spring coils
let r = 10;       // spring radius

function setup() {
  createCanvas(400, 400, WEBGL);
  frameRate(60);
  dt = 1/60;
  x = L0 + 1.5;  
}

function draw() {
  background(0);
  orbitControl(); // rotate view

  // --- MASS POSITION ---
  // x = height above "ground" in meters
  // Free-fall acceleration
  let compression = max(0, L0 - x); // compression >0 if spring shorter than rest
  let springForce = (k / m) * compression; // m/s^2
  let a = g + (compression > 0 ? springForce : 0) - damping * v;

  // --- INTEGRATE ---
  v += a * dt;
  x += v * dt;

  // --- SPRING VISUAL COORDS ---
  let freeY = x * scale;    // top of spring = mass
  let fixedY;

  if (compression > 0) {
    fixedY = 0;            // spring bottom fixed on ground
  } else {
    // spring "pogo" phase: lift bottom as mass moves upward
    fixedY = freeY - L0*scale;
  }

  // --- DRAW SPRING AS HELIX ---
  stroke(255);
  noFill();
  beginShape();
  let N = 100;
  for (let i = 0; i <= N; i++){
    let t = map(i, 0, N, 0, TWO_PI*turns);
    let y = map(i, 0, N, fixedY, freeY);
    let xPos = r * cos(t);
    let zPos = r * sin(t);
    vertex(xPos, -y, zPos);
  }
  endShape();

  // --- DRAW MASS ---
  push();
  translate(0, -freeY, 0);
  fill(0,255,0);
  noStroke();
  sphere(8);
  pop();

  // --- DRAW GROUND ---
  push();
  translate(0, 0, 0); // ground at y=0
  stroke(100);
  line(-100,0,100,0);
  pop();
}
