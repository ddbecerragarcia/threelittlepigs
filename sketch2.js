let value = 0;
let img;
let img2;

function preload() {
  img = loadImage('wolf1.png');
  img2 = loadImage('wolf3.png');
}

function setup() {
  createCanvas(800, 800);
  let a = createA('pagethree.html', 'Next Page');
  a.position(200,40);
  textFont(`Barriecito`);
  background('#C6E1AC');
  textSize(30);
  fill('#EE7179');
  text("I don’t know how this whole Big Bad Wolf thing got started,", 60, 288);
}

function draw() {
  fill(value);
  textSize(40);
  //image(img, 240, 20);
  click();
}


function keyTyped() {
  if (key === 'w') {
    value = '#EE7179';
  } else if (key === 'o') {
    value = 0;
  } else if (key === 'l') {
    value = 250;
  } else if (key === 'f') {
    value = 0;
  }
  textSize(110);
  text("but it’s all wrong.", 50, 380);
}

function click() {
  let button = dist(mouseX, mouseY, 387, 145);
  if (button <= 50) {
    imageMode(CENTER); 
    image(img2, 387, 145);
  }

}