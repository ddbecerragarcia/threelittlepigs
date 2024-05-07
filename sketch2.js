let value = 0;
let img;

function preload() {
  img = loadImage('wolf1.png');
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
  image(img, 240, 50);
  fill(value);
  //textFont(`Barriecito`);
  textSize(40);
  // text("I don’t know how this whole Big Bad Wolf thing got started,", 60,     288);
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