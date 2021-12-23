song = "";

function preload() {
    song = loadSound("music.mp3")
}

scoreRightWrist = 0;
scoreleftWrist = 0;

rightWrightX = 0;
rightwrighty = 0;

leftWrightX = 0;
leftwrightY = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    veio = createCapture(VIDEO);
    vedio.hide();

    poseNet = ml5.poseNet(vedio, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialize');
}