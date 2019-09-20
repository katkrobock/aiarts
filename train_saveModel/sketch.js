let mobilenet;
let classifier;
let video;
let label = '';
let aButton;
let bButton;
let cButton;
let dButton;
let eButton;
let fButton;
let gButton;
let hButton;
let iButton;
let jButton;
let kButton;
let lButton;
let mButton;
let nButton;
let oButton;
let pButton;
let qButton;
let rButton;
let sButton;
let tButton;
let uButton;
let vButton;
let wButton;
let xButton;
let yButton;
let zButton;
let trainButton;

function modelReady() {
  console.log('Model is ready!');
  classifier.load('model.json', customModelReady);
}

function customModelReady() {
  console.log('Custom model is ready!');
}

function videoReady() {
  console.log('Video is ready!');
  // mobilenet.predict(gotResults);
}

function whileTraining(loss) {
  if (loss == null) {
    console.log('Training complete!');
    classifier.classify(gotResults);
  } else {
    console.log(loss);
  }
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

  aButton = createButton('A');
  aButton.mousePressed(function() {
    classifier.addImage('A');
  });

  bButton = createButton('B');
  bButton.mousePressed(function() {
    classifier.addImage('B');
  });

  cButton = createButton('C');
  cButton.mousePressed(function() {
    classifier.addImage('C');
  });

  dButton = createButton('D');
  dButton.mousePressed(function() {
    classifier.addImage('D');
  });

  eButton = createButton('E');
  eButton.mousePressed(function() {
    classifier.addImage('E');
  });

  fButton = createButton('F');
  fButton.mousePressed(function() {
    classifier.addImage('F');
  });

  gButton = createButton('G');
  gButton.mousePressed(function() {
    classifier.addImage('G');
  });

  hButton = createButton('H');
  hButton.mousePressed(function() {
    classifier.addImage('H');
  });

  iButton = createButton('I');
  iButton.mousePressed(function() {
    classifier.addImage('I');
  });

  jButton = createButton('J');
  jButton.mousePressed(function() {
    classifier.addImage('J');
  });

  kButton = createButton('K');
  kButton.mousePressed(function() {
    classifier.addImage('K');
  });

  lButton = createButton('L');
  lButton.mousePressed(function() {
    classifier.addImage('L');
  });

  mButton = createButton('M');
  mButton.mousePressed(function() {
    classifier.addImage('M');
  });

  nButton = createButton('N');
  nButton.mousePressed(function() {
    classifier.addImage('N');
  });

  oButton = createButton('O');
  oButton.mousePressed(function() {
    classifier.addImage('O');
  });

  pButton = createButton('P');
  pButton.mousePressed(function() {
    classifier.addImage('P');
  });

  qButton = createButton('Q');
  qButton.mousePressed(function() {
    classifier.addImage('Q');
  });

  rButton = createButton('R');
  rButton.mousePressed(function() {
    classifier.addImage('R');
  });

  sButton = createButton('S');
  sButton.mousePressed(function() {
    classifier.addImage('S');
  });

  tButton = createButton('T');
  tButton.mousePressed(function() {
    classifier.addImage('T');
  });

  uButton = createButton('U');
  uButton.mousePressed(function() {
    classifier.addImage('U');
  });

  vButton = createButton('V');
  vButton.mousePressed(function() {
    classifier.addImage('V');
  });

  wButton = createButton('W');
  wButton.mousePressed(function() {
    classifier.addImage('W');
  });

  xButton = createButton('X');
  xButton.mousePressed(function() {
    classifier.addImage('X');
  });

  yButton = createButton('Y');
  yButton.mousePressed(function() {
    classifier.addImage('Y');
  });

  zButton = createButton('Z');
  zButton.mousePressed(function() {
    classifier.addImage('Z');
  });

  trainButton = createButton('Train');
  trainButton.mousePressed(function() {
    classifier.train(whileTraining);
  });

  saveButton = createButton('save');
  saveButton.mousePressed(function() {
    classifier.save();
  });
}

function draw() {
  background(0);
  image(video, 0, 0, 500, 390);
  fill(255);
  textSize(16);
  text(label, 10, height - 10);

}