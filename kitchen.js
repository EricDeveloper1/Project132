img = "";
status = "";
objects = [];

function preload() {
    img = loadImage("kitchen.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    status = true;
    console.log("Model Loaded")
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
}

function back() {
    window.location = "index.html";
}