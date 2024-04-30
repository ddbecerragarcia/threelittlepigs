let font;
let string = `
I’m the wolf.
Alexander T. Wolf.
You can call me Al.`;
let img;
var index = 0;
var last = 0;

function preload() {
  img = loadImage('wolf1.png');
  let a = createA('pagetwo.html', 'Next Page');
}

function setup() {
  createCanvas(600, 600);
  textSize(40);
  textAlign(CENTER, CENTER);
  textFont('Barriecito');
}

function draw() {
  typeWriter();
}

function typeWriter() {
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

