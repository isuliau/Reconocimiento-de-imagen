noseX=0;
noseY=0;
diffrence = 0;
rightWristX = 0;
leftWristX = 0;

 function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modeloaded);
    poseNet.on('pose', gotPoses);
 }

 function modeLoaded() {
    console.log('PoseNet Is Initialized');
 }


 function gotPoses(results)
 {
    if(results.lenghth > 0)
        {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("noseX = "+ noseX + " noseY = " + noseY);

            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            diffrence = floor(leftWristX - rightWristX);
            
            console.log("noseX = " + leftWristX +" rightWristX = "+ rightWristX + " difference = " + diffrence);
        }
 }

 function draw() {
    background('#969A97');

    document.getElementById("square_side").innerHTML = "El ancho y el alto del cuadrado será = " + diffrence +"px";
    Fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, diffrence);
}