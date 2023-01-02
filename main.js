function preload() {
 
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(500, 500);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
  console.log("left eye = "+results[0].pose.leftEye.x);
  console.log("left eye = "+results[0].pose.rightEye.x);
  }
}

function draw() {
  image(video, 0, 0, 500, 500);

}

function clickphoto(){
    save("sasuke eyes.png");
}