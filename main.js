function preload(){
    img=loadImage("mustache.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.position(600,200);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
image(img,noseX,noseY,80,30);
}
function modelLoaded(){
    console.log("model stared loading");

}
noseX = 0;
noseY= 0;
function gotPoses(results){
    if (results.length>0) {
        noseX=results[0].pose.nose.x-26;
        noseY=results[0].pose.nose.y;
    }
}

function take_snapshot(){
    save("m.png");
}