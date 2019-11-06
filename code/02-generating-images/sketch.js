var data;

function preload() {
  myFont = loadFont('fonts/Typefesse_Claire-Obscure.otf');
}

function setup() {
  createCanvas(1024, 512);
}

function draw() {
  textFont(myFont);
  text("test", 10, 10);
  background("#2821AF");
}
