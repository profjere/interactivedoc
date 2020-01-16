var fontsize=14;
var btn1=document.querySelector('#lowerSize');
btn1.addEventListener('click',lowerFont);
var btn2=document.querySelector('#raiseSize');
btn2.addEventListener('click',raiseFont);
          
          
function lowerFont(){
    //fontsize-- means fontsize=fontsize-1
     fontsize--;
    //font-size becomes fontSize
     document.querySelector("p").style.fontSize = fontsize+"px";
          }


function raiseFont(){
    fontsize++;
    document.querySelector("p").style.fontSize = fontsize+"px";
          }
      
      
      
      
      
     