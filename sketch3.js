let font;
let img;
let string = `The real story is about a sneeze`;
let string2 = 'and a cup of sugar.'
var index = 0;
var last = 0;

function preload() {
  img = loadImage('sugar.png');
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  typeWriter();
  reveal();
}

function typeWriter() {
  textSize(40);
  fill("#EE7179");
  textAlign(CENTER, CENTER);
  textFont('Barriecito');
  background('#C6E1AC');
  text(string.substring(0, index), 0, 0, width, height);
	
	if (millis() > last + 200) {
		index = index + 1;
		//ONE WORD AT A TIME
		// while(message.charAt(index) != ' ' &&
		// 		 index < message.length){
		// 	index = index + 1;
		// }
		last = millis();
	}
  image(img, 150, 85);

}

function reveal() {
  textSize(60);
  fill("#EE7179");
  textAlign(CENTER, CENTER);
  textFont('Barriecito');
  let revealText = map(mouseX, 0, width, 0, string2.length);
  text(string2.substring(0, revealText), 300, 350);
}
