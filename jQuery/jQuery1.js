//$(document).ready(function(){
$(function(){
  
    $(".toggleText").click(function(){
        $("article").slideToggle();
    });
    
    
    $( "#MenuToggle" ).click(function() {
        
        var menuLocation = $("#menu").css("left");
        if (menuLocation=="-100px"){
            moveMenu="0px";
        } else {
            moveMenu="-100px";
        }
        
        $( "#menu" ).animate({
    left: moveMenu,
    
  }, 500, function() {
    // Animation complete.
  });
});
    
    
    
});

