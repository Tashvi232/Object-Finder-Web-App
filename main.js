status="";
objects=[];

function setup() {
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480,380);
    video.hide();
}

function draw() {
    image(video,0,0,480,380);
    if(status !="") {
        objectDetector.detect(video,gotResult);
        for(i=0;i<objects.length;i++) {
            document.getElementById("status").innerHTML="status: Objects Detected";
            document.getElementById("objects_detected").innerHTML=objects+ "detected";
            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
        if(objects[i].label==object_name){
            video.LiveView.stop();
            objectDetector.detect(gotResult);
            document.getElementById("object_status").innerHTML=object_name + " found";
        }
        else{
        document.getElementById("object_status").innerHTML=object_name + " object mentioned not found";
        }
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

function gotResult(error,results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects=results;
}
}