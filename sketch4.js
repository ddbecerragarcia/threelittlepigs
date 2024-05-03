let contents = ""
let img;
let img2;
let cnv;

function setup() {
  createCanvas(800, 800);
  pos = createVector(random(0, 200), random(0, 200));

}

function preload() {
  img = loadImage('pig.png');
  img2 = loadImage('sugar.png');
  bubble = loadImage('pig2.png');
  let a = createA('pagefive.html', 'Next Page');
}

function draw() {
  background('#C6E1AC');
  texts();
  fill('#EE7179');
  textFont(`Barriecito`);
  textSize(50);
  text(contents, 550, 462, width-40, height-40);
  click();
}

function texts() {
  text("I ran out of sugar.", 30, 100);
  text("So I walked down the street to", 130, 300);
  text("ask my neighbor for a cup of sugar.", 20, 350 );
  text("Now the neighbor was a", 30, 500);
  image(img, 550, 380);
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
  let button = dist(mouseX, mouseY, 550, 380);
  if (button <= 50) {
    imageMode(CENTER); 
    image(bubble, 550, 380);
    console.log("click!");
  }

}
