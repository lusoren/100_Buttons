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
    
    /*---------9---------*/
    var i= true;
    $("#i").click(function(){
        if (i==true) {
            $( "body" ).css("-webkit-filter", "invert(100%)");
            $( "body" ).css("filter", "invert(100%)");
            $( "body" ).css("background-color", "black");
            $( "#i" ).css("-webkit-filter", "invert(100%)");
            $( "#i" ).css("filter", "invert(100%)");
            i=false;
        }
        
        else {
            $( "body" ).css("-webkit-filter", "invert(0)");
            $( "body" ).css("filter", "invert(0)");
            $( "body" ).css("background-color", "white");
            $( "#i" ).css("-webkit-filter", "invert(0)");
            $( "#i" ).css("filter", "invert(0)");
            i=true;
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
        $( "#red" ).animate({opacity:"0"}, 600);
        $( "#blue" ).animate({opacity:"0"}, 600);
        $( "#notMatrix" ).delay( 600 ).animate({opacity:".3"}, 1000);
        
        
    });
    
    $("#red").click(function(){
        $( "#red" ).animate({opacity:"0"}, 600);
        $( "#blue" ).animate({opacity:"0"}, 600);
        $( "#matrix" ).delay( 600 ).animate({opacity:".3"}, 1000);
        
        
    });
    
    /*---------13---------*/
    var m= true;
    $("#m").click(function(){
        if (m==true) {
            $( "body" ).css("background-color", "#454B52");
            $( ".cell" ).css("opacity", ".1");
            $( "#m" ).css("opacity", "1");
            
            
            
            m=false;
        }
        else {
            $( "body" ).css("background-color", "white");
            $( ".cell" ).css("opacity", "1");
            
            m=true;
        }
    });
    
    /*---------14---------*/
    var n= true;
    $("#n").click(function(){
        if (n==true) {
            $( "#invade" ).animate({width: "100%"}, 1000);
            $( "#invade" ).animate({height: "750px"}, 1300);
   
    
            n=false;
        }
        else {
        
            $( "#invade" ).animate({height: "100px"}, 1300);
            $( "#invade" ).animate({width: "100px"}, 1000);
            
            n=true;
        }
    });
    
    /*---------15---------*/
    $("#o").click(function(){
            
            var ad = Math.round(Math.random() * 255);
            var bd = Math.round(Math.random() * 255);
            var cd = Math.round(Math.random() * 255);
            $( "#o" ).css("background-color", "RGB(" + ad + "," + bd + "," + cd + ")");
    });
    
    /*---------15---------*/


    $("#p").click(function(){
            var a = Math.random() * 255;
            var b = Math.random() * 255;
            var c = Math.random() * 255;
            $( "#o" ).css("background-color", "RGB(" + col + "," + col + "," + col + ")");
            
            
    });
    
    /*---------17---------*/
    var q= true;
    $("#q").click(function(){
        if (q==true) {
            $( "#lock" ).css("position", "fixed");
            $( "#lock" ).css("display", "inherit");
            
            q=false;
        }
        else {

            $( "#lock" ).css("display", "none");

            q=true;
            
        }
   
            
    });
    
    /*---------18---------*/
    var r= true;
    $("#r").click(function(){
        if (r==true) {
            $( "#spin" ).css( "-webkit-transform", "rotate(90deg)");
            $( "#spin" ).css( "-ms-transform", "rotate(180deg)");
            $( "#spin" ).css( "transform", "rotate(180deg)");
            $( "#spin" ).css( "top", "46%");
            $( "#spin" ).css( "left", "-50%");    
            r=false;
        }
        else {
            $( "#spin" ).css( '-webkit-transform', "rotate(0deg);");
            $( "#spin" ).css( '-ms-transform', "rotate(0deg);");
            $( "#spin" ).css( 'transform', "rotate(0deg)");
            r=true;
        }    
    });
    
    /*---------19---------*/
    var s= true;
    $("#s").click(function(){
        if (s==true) {
        
            s=false;
        }
        else {
        
            s=true;
        }    
    });
    
    /*---------20---------*/
    var t= true;
    $("#t").click(function(){
        if (t==true) {
            
            $("#yes").html('NO');
            t=false;
        }
        else {
            $("#yes").html('YES');
            t=true;
        }    
    });
    
    /*---------21---------*/
    var u= true;
    $("#u").click(function(){
        if (u==true) {

            $( "body" ).css( "-webkit-filter", "hue-rotate(90deg)");
            $( "body" ).css( "filter", "hue-rotate(90deg)");
            
            
            u=false;
        }
        else {
            $( "body" ).css( "-webkit-filter", "hue-rotate(0deg)");
            $( "body" ).css( "filter", "hue-rotate(0deg)");
            
            u=true;
        }    
    });

});