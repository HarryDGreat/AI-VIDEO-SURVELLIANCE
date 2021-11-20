video="";
status="";
objects=[];

function preload(){
    video=createVideo('video.mp4');
    video.hide();
}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
}

function start(){
    ObjectDetector=ml5.objectDetector('cocossd',Modelloaded);
    document.getElementById("status").innerHTML=" Status = Detecting Objects";    
    }

    function Modelloaded(){
        console.log("Modelloaded!");
        status=true;
        video.loop();
        video.speed(1);
        video.volume(0);
    }

    function gotResults(error,results){
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            objects=results;
        }
        }

function draw(){
    image(video,0,0,480,380);
    if(status!=""){
        objectDetector.detect(video,gotResults);
        for (let i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML=" Status = Objects Detected";
            document.getElementById("number_of_objects").innerHTML=" Number of Objects ="+objects.length;

            fill("#0539e6");
            percent=floor(objects[i].confidence *100);
            text(objects[i].label+" "+percent+"%",objects[i].x+ 15,objects[i].y +15);
            noFill();
            stoke("#0539e6")
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height,)
        }
    }
}


