let contents = ""
let img;
let img2;
let cnv;

function setup() {
  createCanvas(600, 600);
  pos = createVector(random(0, 200), random(0, 200));

}

function preload() {
  img = loadImage('pig.png');
  img2 = loadImage('sugar.png');
  let a = createA('pagefive.html', 'Next Page');
}

function draw() {
  background('#C6E1AC');
  texts();
  fill('#EE7179');
  textFont(`Barriecito`);
  textSize(30);
  text(contents, 339, 477, width-40, height-40);
}

function texts() {
  text("I ran out of sugar.", 30, 100);
  text("So I walked down the street to", 130, 300);
  text("ask my neighbor for a cup of sugar.", 130, 350 );
  text("Now the neighbor was a", 30, 500);
  image(img, 320, 380);
  image(img2, 320, 0);
  
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

