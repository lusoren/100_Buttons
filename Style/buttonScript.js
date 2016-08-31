$(document).ready(function(){
    
    /*---------1---------*/
    var a= false;
    $("#a").click(function(){
        
        if (a==true) {
            $(this).css("background-color", "#FFC9FF");
            a=false;
        }
        else {
            $(this).css("background-color", "#FCF4FF");
            a=true;
        }
    });
    
    /*---------3---------*/
    var c= true;
    $("#c").click(function(){
        
        if (c==true) {
            $("#blackGrow").css("width", "150px");
            $("#blackGrow").css("height", "150px");
            $("#blackGrow").css("border-radius", "75px");
            c=false;
        }
        else {
            $("#blackGrow").css("width", "100px");
            $("#blackGrow").css("height", "100px");
            $("#blackGrow").css("border-radius", "50px");
            c=true;
        }
    });
    
    /*---------4---------*/
    var d= false;
    $("#d").click(function(){
        
        if (d==true) {
            $("#square").css("border-radius", "0px");
            d=false;
        }
        else {
            $("#square").css("border-radius", "125px");
            d=true;
        }
    });
    
    /*---------5---------*/
    var e= true;
    $("#e").click(function(){
        
        if (e==true) {
            $("#germ").css("height", "200px");
            $("#germ").css("width", "100px");
            e=false;
        }
        else {
            $("#germ").css("height", "100px");
            $("#germ").css("width", "300px");
            e=true;
        }
    });
    
    /*---------6---------*/
    var f= true;
    $("#f").click(function(){
        
        if (f==true) {
            $( "#slide" ).animate({left:"50%"}, 1000);
            f=false;
        }
        else {
            $( "#slide" ).animate({left:"0%"}, 1000);
            f=true;
        }
    });
    
    /*---------7---------*/
    var g= true;
    $("#g").click(function(){
        
        if (g==true) {
            $( "#top" ).animate({width:"100%"}, 1000);
            $( "#mid" ).delay( 400 ).animate({width:"100%"}, 1000);
            $( "#bot" ).delay( 800 ).animate({width:"100%"}, 1000);
            g=false;
        }
        else {
            $( "#top" ).delay( 800 ).animate({width:"0%"}, 1000);
            $( "#mid" ).delay( 400 ).animate({width:"0%"}, 1000);
            $( "#bot" ).animate({width:"0%"}, 1000);
            g=true;
        }
    });
    
    /*---------8---------*/
    var h= true;
    var x=1;
    $("#h").click(function(){
        if (x==1) {
            alert("YOU'VE CLICK THE BIG PINK DOT " + x + " TIME");
            x++;
        }
        
        else {
            alert("YOU'VE CLICK THE BIG PINK DOT " + x + " TIMES");
            x++;
        }
        
    });
    
    /*---------10---------*/
    var j= 0;
    $("#j").click(function(){
        j++;
        $("#counter").html(j);
        
    });
    
    /*---------11---------*/
    var k= true;
    $("#blue").click(function(){
        $( "#red" ).animate({opacity:"0"}, 1000);
        $( "#blue" ).animate({opacity:"0"}, 1000);
        $( "#pod" ).delay( 1000 ).animate({opacity:".2"}, 2000);
        
        
    });
    
});