let img;

function setup() {
  createCanvas(800, 800);
  let a = createA('pagesix.html', 'Next Page');
  a.position(200,40);
}


function preload() {
  img = loadImage('wolf1.png');
}


function draw() {
  background('#C6E1AC');
  //text("X: "+mouseX, 0, height/4);
  //text("Y: "+mouseY, 0, height/2);
  texts();
  fill('#EE7179');
  textFont(`Barriecito`);
  textSize(40);
  mouseClicked();
  
}

function texts() {
  text("I didn’t want to just walk into someone", 100, 200);
  text("else’s house. So I called", 200, 250);
  image(img, 280, 250);
  text("“Little Pig, Little Pig, are you in?”", 150, 520);

}

function mouseClicked() {
  if (mouseX < 470) {
    background('#C6E1AC');
  }
}