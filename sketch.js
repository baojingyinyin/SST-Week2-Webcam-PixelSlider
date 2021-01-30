//SST-Winter2021-Week2
//Code edite by Yin Yu
// Inspired by Daniel Shiffman's https://youtu.be/rNqaw8LT2ZU


var video;

var vScale = 20;
var theSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  // Slider:
  theSlider=createSlider(5,40,35);
  theSlider.position(10,10);
  theSlider.style('width', '200px');
  
}

function draw() {
  vScale = theSlider.value();
  video.size(width / vScale, height / vScale);
  
  background(51);
  video.loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
      // var w = map(bright, 0, 255, 0, vScale);
      // Square sizes:
      var w = map(bright, 0, 255, 0, theSlider.value());
      
      
      noStroke();
      fill(255);
      rectMode(CENTER);
      rect(x * vScale, y * vScale, w, w);
    }
  }
 
  
}
