function setup(){
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects";
    }
    
    img = "";
    status = "";
    objects = [];
    function preload(){
    img = loadImage("png.webp");
    }
    
    
    function draw(){
    if(status!= ""){
    for(i=0; i < objects.length;i++){
    document.getElementById("status").innerHTML="status:object detected";
    fill("#FF0000");
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%" , objects[i].x,objects[i].y);
    noFill();
    stroke("#FF0000");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    
    }
    
    }
    /*image(img ,0 ,0 ,640,420);
    fill("#0000FF");
    text("oven" ,45,75);
    noFill();
    stroke("#0000FF");
    rect(30,60,450,350);
    }*/
    
    function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img,gotResult);
    }
    
    function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
    }}