var data;

function preload(){
  var url = "http://api.openweathermap.org/data/2.5/weather?";
  var city = "Berlin";
  var format = "metric";
  var id = "c96429d70a1299c784e85d3a88b353a1";

  var request = url + "q=" + city + "&units=" + format + "&APPID=" + id;

  data = loadJSON(request);
}

function setup() {
  createCanvas(400, 400);
  print(data.main.temp);
}

function draw() {
  background(220);
  textSize(30);
  text(data.main.temp, 10, 10, 390, 390);
}
