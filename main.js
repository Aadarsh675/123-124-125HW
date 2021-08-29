noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    canvas = createCanvas(500, 500);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(500, 500);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + ", noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + ", rightWristX = " + rightWristX + ", difference = " + difference);
    }
}

function modelLoaded(){
    console.log("Model Successfully Loaded");
}

function draw(){
    background("#6C91C2");
    fill("#F90093");
    stroke("#F90093");
    textSize(difference)
    text("Hello", noseX - 250, noseY);
    document.getElementById("font_size").innerHTML = "The fontsize of the text is " + difference + " px.";
}