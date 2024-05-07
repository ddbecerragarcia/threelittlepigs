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
  }
  
  
  function texts() {
    text("That's when my nose started to ich. I felt a sneeze coming on.", 80, 100);
    textSize(60);
    text("Well, I huffed. And I snuffed.", 75, 160);
    image(img, 280, 220);
    text("And I sneezed a great sneeze.", 30, 550);
  }
  
  