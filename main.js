difference=0;
rightwristX=0;
leftwristX=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposes);
}

function modelloaded()
{
    console.log("poseNet is initialised");
}

function gotposes(results)
{
    if(results.length>0)
        {
          console.log(results);
          leftwristX=results[0].pose.leftWrist.x;
          rightwristX=results[0].pose.rightWrist.x;
          difference=floor(leftwristX-rightwristX);
          console.log("difference"+difference);
        }
}  


function draw()
{
   background("blue");
   document.getElementById("text_side").innerHTML="font sixe of the text will be ="+difference+"px";
   fill('#e620a7');
   textSize(difference);
   text('Harry Potter', 50 , 400);
  
}
