var theBox1 = document.querySelector("#box1");
var theBox2 = document.querySelector("#box2");
var theBox3 = document.querySelector("#box3");


function setTranslate(xPos,yPos,el){
    var theString = "translate3d("+ xPos + "px, " + yPos +"px, 0)";
    el.style.transform = theString;
}

window.addEventListener("DOMContentLoaded",scrollLoop,false);

var xScrollPosition;
var yScrollPosition;

function scrollLoop(){
    yScrollPosition = window.scrollY;
    
    setTranslate(yScrollPosition*.5,0,theBox1);
    setTranslate(0,yScrollPosition*.8,theBox2);
    setTranslate(yScrollPosition*-1.2,0,theBox3);
    
    
    requestAnimationFrame(scrollLoop);
}
    
    
    
    
    

