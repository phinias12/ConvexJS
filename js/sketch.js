const points = [];

function orientation(p, q, r) {
  // To find orientation of ordered triplet (p, q, r).  
  // The function returns following values  
  // 0 --> p, q and r are colinear  
  // 1 --> Clockwise  
  // 2 --> Counterclockwise
  let val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y)

  if (val == 0) {
    return 0;
  }
  if (val > 0) {
    return 1;
  } else {
    return 2;
  }
}

function convexHull() {
  n = points.length
  if (n >= 3) {
    points.sort((a, b) => a.x - b.x);
    let mostLeft = points[0];
    let hull = [];
    let p = 0;
    let q = 0;
    while (true) {
      hull.push(p);
      q = (p + 1) % n
      for (let i = 0; i < n; i++) {
        if (orientation(points[p], points[i], points[q]) == 2) {
          q = i;
        }
      }
      p = q;

      if (p == 0) {
        break;
      }
    }
    
    hull.push(0)
    
    for (let k = 0; k < n; k++){
        try {
          stroke(0, 255, 0);
          console.log(points[hull[k]].x + ", " + points[hull[k]].y);
          ellipse(points[hull[k]].x, points[hull[k]].y, 20, 20);
        } catch(err) {}
    }
    
    stroke(0,0,0);
    
    for (var l = 1; l < hull.length; l++){
      try {
       line(points[hull[l-1]].x,points[hull[l-1]].y, points[hull[l]].x, points[hull[l]].y);
      } catch(err) {}
    }
  } else {
    text("Need more points.", 10, 20)
  }
}

function setup() {
  createCanvas(400, 400);
  background(244);
}

function draw() {
  if (mouseIsPressed) {
    mouseReleased = function() {
      fill(0)
      ellipse(mouseX, mouseY, 20, 20);
      points.push(createVector(mouseX, mouseY));
    };
  }

  if (isKeyPressed) {
    if (keyIsPressed && key.toString() === 'a') {
      convexHull();
    }
  }
}