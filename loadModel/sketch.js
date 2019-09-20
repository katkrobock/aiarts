let mobilenet;
let classifier;
let video;
let label = 'loading model';


function modelReady() {
  console.log('Model is ready!');
  classifier.load('model.json', customModelReady);
}

function customModelReady() {
  console.log('Custom model is ready!');
  label = 'model ready';
  classifier.classify(gotResults);
}

function videoReady() {
  console.log('Video is ready!');
  // mobilenet.predict(gotResults);
}

function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {
    label = result;
    classifier.classify(gotResults);
  }
}

function setup() {
  createCanvas(500, 350);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  //mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  //classifier = mobilenet.classification(video, videoReady);
  mobilenet = ml5.featureExtractor('MobileNet', {
    numClasses: 26
  }, modelReady);
  classifier = mobilenet.classification(video, videoReady);

}

function draw() {
  background(0);
  image(video, 0, 0, 500, 390);
  fill(255);
  textSize(16);
  text(label, 10, height - 10);

}