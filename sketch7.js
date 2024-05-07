let txt;
const ratio = 0.98; // word
const keyratio = 1 - ratio; //keyword

txt1 = 'FELL';
txt2 = 'DOWN';

bg = '#1b1b1b'
figma = ['#AF50FF', '#00BEFF', '#FF685F', '#F7C839','#FF3E0D', '#FD9540', '#F7C839', '#00D37E'];

const totalWords = 300; // Total number of words you want

function generateText(ratio, keyratio, totalWords) {
  const wordCount = Math.floor(totalWords * ratio);
  const keywordCount = Math.floor(totalWords * keyratio);

  let words = [];
  for (let i = 0; i < wordCount; i++) {
    words.push(txt1);
    // words.push(random([txt1, txtt]));
  }

  let keywords = [];
  for (let i = 0; i < keywordCount; i++) {
    keywords.push(txt2);
  }

  const allWords = words.concat(keywords);

  // Shuffle the array to randomize the order
  for (let i = allWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allWords[i], allWords[j]] = [allWords[j], allWords[i]];
  }

  return allWords.join(' ');
}

function setup() {
  createCanvas(800, 800);
  
  txt = generateText(ratio, keyratio, totalWords);
  
  data = [];
  
  let t = txt.split(' ');
  
  // console.log(t.length);
  
  for (i = 0; i < t.length; i++) {
    
    
    if(t[i] == txt2){
       c = '#ffffff';
    }else{
      c = random(figma);
    }
    
    data.push({
      txt: t[i],
      h: 0,
      mass: random(2,4),
      c: c
    });
  }
  
  fontSize = 12;
  m = fontSize/2;
  
  // TEXT CSS
  noStroke();
  fill(255);
  textSize(12);
  textFont('monospace');
  textStyle(BOLD);
  
  h = 0;
  totalTw = 0;
  
  moveX = 0;
}

function draw() {
  background('#C6E1AC');
  texts();
  fill('#EE7179');
  textFont(`Barriecito`);
  textSize(50);
  
  //translate(m, m);
  
  h = 0;
  totalTw = 0;
  
  for (let i = 0; i < data.length; i++) {
    cnt = 0;
    
    if (totalTw > (width - m*2)) {
      cnt += 1;
      h += (fontSize * 1.4 * cnt);
      totalTw = 0;
    }
    
    // Check if the word is 'word' and apply the drop animation
    if(mouseIsPressed){
      
    if (data[i].txt === txt) {
        data[i].h = 0;
      
    }else{
      data[i].h += data[i].mass + data[i].h/30;
      data[i].mass += 0.01; //acceleration
    }
      
  }
    
    //sort motion
    let x = totalTw + moveX;
    x = constrain(x, m, width);
    
    if(keyIsPressed){
       moveX -= 0.1;
     }
        // Draw text
    fill(data[i].c)
    text(data[i].txt, x, h + data[i].h);
    
    totalTw += textWidth(data[i].txt) * 1.4;
  }
}

function texts() {
  text("The whole darn straw house", 140, 200);
  textSize(150);
  text("fell down.", 149, 340);
}
