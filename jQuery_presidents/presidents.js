$(function(){

    $("#RutherfordName").mouseenter(function(){
    $("#RutherfordName h1").css("color","#00f");
    $("#Rutherford").animate({ 
                    bottom: "100px" 
                },1500); 
  });
    
    $("#RutherfordName").mouseleave(function(){
    $("#RutherfordName h1").css("color","#f00");
    $("#Rutherford").animate({ 
                    bottom: "-450px" 
                },500); 
  });
    
    $("#FillmoreName").mouseenter(function(){
    $("#FillmoreName h1").css("color","#00f");
    $("#Fillmore").animate({ 
                    bottom: "100px" 
                },1500); 
  });
    
    $("#FillmoreName").mouseleave(function(){
    $("#FillmoreName h1").css("color","#f00");
    $("#Fillmore").animate({ 
                    bottom: "-450px" 
                },500); 
  });
    
       $("#GarfieldName").mouseenter(function(){
    $("#GarfieldName h1").css("color","#00f");
    $("#Garfield").animate({ 
                    bottom: "100px" 
                },1500); 
  });
    
    $("#GarfieldName").mouseleave(function(){
    $("#GarfieldName h1").css("color","#f00");
    $("#Garfield").animate({ 
                    bottom: "-450px" 
                },500); 
  });
    
 });

