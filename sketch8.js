function setup() {
    createCanvas(800, 800);
    let a = createA('index.html', 'Home');
    a.position(200,40);
  }
  
  function draw() {
    background('#C6E1AC');
    fill('#EE7179');
    textFont(`Barriecito`);
    title();
    text2();
  }
  
  function title() {
    textSize(40);
    text("The True Story of the 3 Little Pigs!", 150, 191);
    text("Book by Jon Scieszka", 235, 240);
  }
  
  function text2() {
    textSize(20);
    text("Interactive Web by: Daine Becerra Garcia", 257, 420);
    text("I used to read this book a lot when I was little. This is the type of text that made me", 60, 350)
    text("excited to read, especially being bilingual and learning a new language", 120, 380);
  }