function setup(){
    video=createCapture(VIDEO)
video.size(500,500)
video.position(100,200)

canvas=createCanvas(400,400)
canvas.position(700,200)

posenet=ml5.poseNet(video,modelloaded)
posenet.on("pose",gotposes)
}

function gotposes(results){
 if (results.length>0) {
     console.log(results)
 }
}


function modelloaded(){
    console.log("PRANAV MODEL LOADED!!!")
}

function draw(){
background("black")

}
