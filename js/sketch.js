const points = [];

function convexHull(){
  if (keyIsPressed && key.toString() === 'a') {
        if(points.length >= 3){
          points.sort((a,b) => a.x - b.x);
          mostLeft = points[0];
          stroke(0, 255, 0);
          ellipse(mostLeft.x, mostLeft.y,20,20);
          stroke(0, 0, 0);
        } else {
          alert("Need more points.")
        }
      }
}

function setup(){
    createCanvas(400, 400);
    background(244)
}

function draw(){
    if (mouseIsPressed) {
        mouseReleased = function() {
            fill(0)
            ellipse(mouseX, mouseY, 20, 20);
            points.push(createVector(mouseX, mouseY));
        };
    }
    
    if (isKeyPressed) {
      convexHull();
    }
}