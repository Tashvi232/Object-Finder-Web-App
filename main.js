status="";

function setup() {
    canvas=createCanvas(480,380);
    canvas.center();
}

function draw() {
    image(video,0,0,480,380);
}

function start() {
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects";
    input_object= document.getElementById("input");
}

function modelLoaded() {
    console.log('model loaded');
    status=true;
}