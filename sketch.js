var x= 0;
var speed=3;

function setup(){
    createCanvas(600,400);

}

function draw(){
    background(50);
    
    if(mouseIsPressed){
        background(100,100,200);
    }
    
    stroke(255);
    strokeWeight(6);
    
    if(mouseY<150){
        fill(0,25,200);
    }else{
        fill(30,150,20);
    }
    
    ellipse(x,200,100,100);
    
   
    
    
    if(x>width || x<0) {
        console.log("CIRCLE IS OFF THE SCREEN!!!!!!!!!!!");
        speed = speed * -1
    
    }
    
    x = x + speed;
    console.log(x)

}