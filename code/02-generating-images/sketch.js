var data;

function setup() {
  createCanvas(1024, 512); // this seems to be a good resolution for twitter
}

function draw() {
  background("#2821AF"); // blue background as tim does it https://timrodenbroeker.de/projects/programming-posters/

  fill(255); // white text

  textSize(12);
  textFont("Avara Bold Italic");
  text("Machines for Future", 20, 0, width-40, 40);
  textAlign(CENTER);
  text("WS 2019/2020", 20, 0, width-40, 40);
  textAlign(RIGHT);
  text("KH Berlin Weißensee", 20, 0, width-40, 40);


  // select the webfont we loaded in index.html
  textFont("Typefesse Pleine");

  textSize(random(6, 400));

  // text horizontal und vertikal zentrieren
  textAlign(LEFT, CENTER);
  translate(width/2, height/2);

  rotate(random(0, 2*PI));

  // eine kleine schleife
  for(let i=0; i<12; i++){
    rotate(PI/6)
    text("#machines4future", 100, 0);
  }
}

// save the canvas as jpeg
function keyTyped() {
  if (key === 's') {
    console.log("saving file");

    // name the file with the current date and time
    //save(year() + "-" + month() + "-" + day() + "_" + hour() + "-" + minute() + "-" + second());

    save("image.jpg");
  }
}
