function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, model_load_hogaya);
    poseNet.on('pose', poses_milgaya);
}

function model_load_hogaya() {
    console.log('PoseNet model is initialized!');
}

function draw() {
    background('#00FFBF');
}

function poses_milgaya(results) {
    if(results.length > 0) {
        console.log(results);
    }
}