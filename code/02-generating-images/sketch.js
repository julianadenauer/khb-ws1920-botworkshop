var data;

function setup() {
  createCanvas(1024, 512);
}

function draw() {
  background("#2821AF");

  fill(255);

  textSize(12);
  textFont("Avara Bold Italic");
  text("Machines for Future", 20, 0, width-40, 40);
  textAlign(CENTER);
  text("WS 2019/2020", 20, 0, width-40, 40);
  textAlign(RIGHT);
  text("KH Berlin Weißensee", 20, 0, width-40, 40);

  
  // select the webfont we loaded in index.html
  textFont("Typefesse Pleine");
  
  textSize(mouseY);

  // text horizontal und vertikal zentrieren
  textAlign(LEFT, CENTER);
  translate(width/2, height/2);

  rotate(mouseX/100.0);

  // eine kleine schleife
  for(let i=0; i<12; i++){
    rotate(PI/6)
    text("#machines4future", 100, 0);
  }

  
  

}
