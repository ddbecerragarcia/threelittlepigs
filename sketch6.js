let img;
let imgX = 280; // X-coordinate of the image
let imgY = 350; // Y-coordinate of the image
let imgWidth = 200; // Initial width of the image
let imgHeight = 200; // Initial height of the image
let scaleFactor = 1.0; // Initial scale factor


function setup() {
  createCanvas(800, 800);
  let a = createA('pageseven.html', 'Next Page');
  a.position(200,40);
}

function preload() {
  img = loadImage('wolf2.png');
}

function draw() {
  background('#C6E1AC');
  texts();
  fill('#EE7179');
  textFont(`Barriecito`);
  textSize(25);
  //ellipse(mouseX, mouseY, 20, 20);  
  
  let scaledWidth = imgWidth * scaleFactor;
  let scaledHeight = imgHeight * scaleFactor;
  
  // Display the image
  image(img, imgX, imgY, scaledWidth, scaledHeight);
  
  // Check if the mouse is hovering over the image
  if (mouseX > imgX && mouseX < imgX + scaledWidth &&
      mouseY > imgY && mouseY < imgY + scaledHeight) {
    // Adjust scaleFactor based on mouse position
    scaleFactor = map(mouseX, imgX, imgX + scaledWidth, 1, 2); // Change the '2' to adjust the maximum scale factor
  } else {
    // Reset scaleFactor if the mouse is not hovering over the image
    scaleFactor = 1.0;
  }
}


function texts() {
  text("That's when my nose started to ich. I felt a sneeze coming on.", 80, 250);
  textSize(60);
  text("Well, I huffed. And I snuffed.", 75, 310);
  //image(img, 280, 350);
  text("And I sneezed a great sneeze.", 30, 700);
}


