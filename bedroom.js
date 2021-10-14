Status ="";
img = "";

function preload(){
   img=loadImage("bedroom.jpg");   
}

function setup(){
    canvas =createCanvas(600,300);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model is loaded");
    Status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){

    if(error){
        console.log(error)
    }
    console.log(results);
}

function draw(){
    image(img,0,0,600,300);
}
