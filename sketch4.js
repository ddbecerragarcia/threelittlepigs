let contents = ""
let img;
let img2;
let cnv;

function setup() {
  createCanvas(800, 800);
  //pos = createVector(random(0, 200), random(0, 200));

}

function preload() {
  img = loadImage('pig.png');
  img2 = loadImage('sugar.png');
  bubble = loadImage('pig2.png');
  let a = createA('pagefive.html', 'Next Page');
  a.position(200,40);
}

function draw() {
  background('#C6E1AC');
  text("X: "+mouseX, 0, height/4);
  text("Y: "+mouseY, 0, height/2);
  fill('#EE7179');
  texts();
  textFont(`Barriecito`);
  textSize(50);
  text(contents, 530, 462, width-40, height-40);
  click();
}

function texts() {
  text("I ran out of sugar.", 30, 100);
  text("So I walked down the street to", 130, 250);
  text("ask my neighbor for a cup of sugar.", 20, 300 );
  text("Now the neighbor was a", 20, 500);
  image(img, 660, 421);
  image(img2, 500, 0);
  }

function keyTyped() {
  //contents = contents + key;
  contents += key;
}

function keyReleased(){
  if (keyCode == BACKSPACE){
  contents = contents.substring(0, contents.length -1);
    //in python: contents[:-1]
  }

  if (keyCode == 71) {
    background('#C6E1AC');
  }
}

function click() {
  let button = dist(mouseX, mouseY, 672, 460);
  if (button <= 50) {
    imageMode(CENTER); 
    image(bubble, 700, 420);
  }

}
