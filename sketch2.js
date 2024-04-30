let value = 0;
let img;

function preload() {
  img = loadImage('wolf1.png');
}

function setup() {
  createCanvas(600, 600);
  let a = createA('pagethree.html', 'Next Page');
  textFont(`Barriecito`);
  background('#C6E1AC');
  textSize(20);
  text("I don’t know how this whole Big Bad Wolf thing got started,", 60,     288);
}

function draw() {
  image(img, 150, 85);
  fill(value);
  //textFont(`Barriecito`);
  textSize(20);
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
  textSize(65);
  text("but it’s all wrong.", 70, 350);
}