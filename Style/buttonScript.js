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
    var xxx=1;
    $("#h").click(function(){
        if (x==1) {
            alert("YOU'VE CLICK THE BIG PINK DOT " + xxx + " TIME");
            xxx++;
        }
        
        else {
            alert("YOU'VE CLICK THE BIG PINK DOT " + xxx + " TIMES");
            xxx++;
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
            $( "#ca" ).css("opacity", "1");
            
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
    
    /*---------16---------*/
    var p= true;
    $("#p").click(function(){
            $( "#drop" ).css("top", "50%");
            $( "#drop" ).animate({top: "120%"}, 1300);
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
                $( "#cover" ).css( 'position', 'fixed');
                $( "#cover" ).css( 'z-index', '10');
            s=false;
        }
        else {
                $( "#cover" ).css( 'position', 'absolute');
                $( "#cover" ).css( 'z-index', '0');
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
    
    /*---------22---------*/
    var v= true;
    $("#v").click(function(){
        if (v==true) {
                $( "#c" ).css( "display", "none");
            v=false;
        }
        else {
                $( "#c" ).css( "display", "inherit");
            v=true;
        }    
    });
    
    /*---------23---------*/
    var w= true;
    $("#w").click(function wart (){
        if (w==true) {
            $( "#w" ).animate({width:"0%"}, 1000);
            $( "#ww" ).animate({width:"33.33%"}, 1000);
            
            w=false;
        }
        else {
            $( "#w" ).animate({width:"33.33%"}, 1000);
            $( "#ww" ).animate({width:"0%"}, 1000);
            
            w=true;
        }   
    });
    
    $("#ww").click(function wart (){
        if (w==true) {
            $( "#w" ).animate({width:"0%"}, 1000);
            $( "#ww" ).animate({width:"33.33%"}, 1000);
            
            w=false;
        }
        else {
            $( "#w" ).animate({width:"33.33%"}, 1000);
            $( "#ww" ).animate({width:"0%"}, 1000);
            
            w=true;
        }   
    });
    
    /*---------24---------*/
    var x= true;
    $("#x").click(function(){
        $( "body" ).animate({scrollTop: $("a").offset().top}, 2000);
    });
    
    /*---------25---------*/
    var y= true;
    $("#y").click(function(){
        location.reload();
    });
    
    /*---------26---------*/
    var z= true;
    $("#z").click(function(){
        if (z==true) {
                $( "#side" ).animate({left:"100%"}, 1200);
            z=false;
        }
        else {
                $( "#side" ).animate({left:"0%"}, 1200);
            z=true;
        }    
    });
    
    /*---------27---------*/
    $("#aa").click(function(){
        var aa= Math.round(Math.random() * 10);
        if (aa==3) {
            alert("WINNER")
        }
        else {
            alert("YOU LOST!!!")
        }
    });
    
    /*---------28---------*/
    var ba= true;
    $("#ba").click(function(){
        if (ba==true) {
            $( "body" ).css( "cursor", "help");
    
            ba=false;
        }
        else {
            $( "body" ).css( "cursor", "inherit");

            ba=true;
        } 
        
    });
    
    /*---------29---------*/
    var ca= 0;
    $("#ca").click(function(){
        $( "#ca" ).append( "<p class=\"star\" id=" + ca +">&#9733</p>").fadeIn(2000);
        $( "#" + ca ).css( "top", (Math.random()*100) + "%");
        $( "#" + ca ).css( "left", (Math.random()*100) + "%");
        
        ca++;
    });
    
    /*---------30---------*/
    var da= true;
    $("#da").click(function(){
        if (da==true) {
            $( "#space" ).css( "letter-spacing", "37px");
            $( "#space" ).css( "left", "54%");
    
            da=false;
        }
        else {
            $( "#space" ).css( "letter-spacing", "-2px");
            $( "#space" ).css( "left", "50%");

            da=true;
        } 
        
    });
    
    /*---------31---------*/
    var ea= true;
    $("#ea").click(function(){
        if (ea==true) {
      
            $( "#follow" ).css( "position", "fixed");
            $( "#ballGame" ).css( "position", "fixed");
            ea=false;
        }
        
    });

    $('#follow').click(function() {
            $( "#ballGame" ).css( "position", "absolute");
            $( "#follow" ).css( "position", "absolute");
            
            $( "#follow" ).css( "left", "50%");
            $( "#follow" ).css( "top", "50%");
        
    });
    
    $('body').click(function(){
        if( $("#follow").css('position') == 'fixed') {
                var xpos = ((event.clientX)/($(document).width())) *100;
                var ypos = ((event.clientY)/(window.innerHeight)) *100;
                $( "#follow" ).css( "left", xpos +"%");
                $( "#follow" ).css( "top", ypos + "%");
            
        }
    });

    
    /*---------32---------*/
    var fa= 0;
    $("#fa").click(function(){
        if (fa==0) {
            $( "#green" ).css( "width", "700px");
            $( "#green" ).css( "height", "700px");
            $( "#green" ).css( "border-radius", "500px");
            $( "#gatsby" ).animate({opacity: "1"}, 500); 
            fa++;
        }
        else if (fa==1) {
            $( "#gatsby" ).html( "the orgastic future that year by year recedes before us.");
            fa++;
        }
        else if (fa==2) {
            $( "#gatsby" ).html( "It eluded us then, but that's no matter -");
            fa++;
        }
        else if (fa==3) {
            $( "#gatsby" ).html( "to-morrow we will run faster, stretch out our arms farther. . . . .");
            fa++;
        }
        else if (fa==4) {
            $( "#gatsby" ).html( "So we beat on, ");
            fa++;
        }
        else if (fa==5) {
            $( "#gatsby" ).html( "boats against the current,");
            fa++;
        }
        else if (fa==6) {
            $( "#gatsby" ).html( "borne back ceaselessly into the past.");
            fa++;
        }
        else if (fa==7) {
            $( "#gatsby" ).animate({opacity: "0"}, 500);
            fa++;
        }
        else if (fa==8) {
            $( "#gatsby" ).html( "Gatsby believed in the green light");
            $( "#green" ).delay(1000).css( "width", "50px");
            $( "#green" ).delay(1000).css( "height", "50px");

            fa=0;
        }
        
    });
    
    /*---------33---------*/
    var ga= true;
    var ttt;
    $("#ga").click(function(){
        if (ga) {
            ttt=500;
            ga=false;
        }else {
            ttt=0;
            ga=true;
        }
        
        setInterval(function () { 
            $("#ga").css("background-color", function () {
                this.switch = !this.switch
                return this.switch ? "#90929E" : ""
            });  
        }, ttt)
            
    });
    /*---------34---------*/
    var ha= true;
    $("#ha").click(function(){
        
        if (ha==true) {
            $( this ).css("width","100%");
            $( this ).css("height","500px");
            $("#yess").css("font-size", "50px");
            //code
            ha=false;
        }
        
        else {
            
            $( this ).css("width","33.33%");
            $( this ).css("height","250px");
            
            ha=true;

        }    
    });
    
    /*---------35---------*/
    var ia= true;
    $("#ia").click(function(){
        window.open("index.html");
    });
    
    /*---------36---------*/
    var ja= true;
    $("#ja").click(function(){
        if (ja==true) {
            $( "#sun" ).css("top","0%");
            $("#ja").css("background-color", "#68CAF7");
            $("#land").css("background-color", "#3EBD88");
            
            ja=false;
        }
        else {
            $( "#sun" ).css("top","100%");
            $("#ja").css("background-color", "#03192B");
            $("#land").css("background-color", "#0B423C");
            
            ja=true;
        }   
    });
    
    /*---------37---------*/
    var ka= true;
    var sw=true;
    $("#ka").click(function(){
        if (ka==true) {
            $( "#tdoor" ).animate({height:"0%"}, 1000);
            $( "#bdoor" ).animate({height:"0%"}, 1000);
            
            ka=false;
        }
        else {
            if (sw==true) {
                $( "#tdoor" ).animate({height:"100%"}, 1000);
                sw=false;
            }
            else {
                $( "#tdoor" ).animate({height:"50%"}, 1000);
                $( "#bdoor" ).animate({height:"50%"}, 1000);
                sw=true;
            }
            ka=true;
        }   
    });
    
    /*---------38---------*/
    var la=true;
    var rl= 120;
    $("#la").click(function(){
        if (la==true) {
            if (Math.random()>.5) {
                rl=120;
            }
            else {
                rl=-20;
            }
            $( "#fadeR" ).css("left", rl +"%");
            $( "#fadeR" ).css("opacity","0");
                
            
            la=false;
        }
        else {
            
            $( "#fadeR" ).css("left","50%");
            $( "#fadeR" ).css("opacity","1");
          
            la=true;
        }   
    });
    
    /*---------39---------*/
    
    var ma=true;
    $("#ma").click(function(){
        $( ".cell" ).animate({"height":"220"},800);
        $( ".cell" ).delay(1200).animate({"height":"250"},800);
        ma=false;
        
    });

    
    /*var ma=true;
    $("#ma").click(function(){
        if (ma==true) {
           
            $( ".cell" ).animate({"height":"220"},800);
            ma=false;
        }
        else {
            $( ".cell" ).animate({"height":"250"},800);
            ma=false;      
        }
        
    });
    */
    
    /*---------40---------*/
    var na= 0;
    $("#na").click(function(){
        $( "#na" ).append( "<p class=\"numby\" id=\"" + "numby" + na +"\">"+ (Math.round(Math.random() * 10))+ "</p>");
        $( "#numby" + na ).css( "top", (Math.random()*100) + "%");
        $( "#numby" + na ).css( "left", (Math.random()*100) + "%");
        $( "#numby" + na ).css( "font-size", (Math.random()*300) + "px");
        
        na++;
    });
    
    /*---------41---------*/
    var oa= true;
    $("#oa").click(function(){ 
        if (oa==true) {
            $( ".numby").css( "display", "none");
            oa=false;
        }
        else {
            $( ".numby").css( "display", "inherit");
            oa=true;      
        }
       
    });
    
    /*---------42---------*/
    var pa= true;
    $("#pa").click(function(){ 
        if (pa==true) {
            $( "#4twen").html( "420");
            pa=false;
        }
        else {
            $( "#4twen").html( "42");
            pa=true;  
        }
       
    });
    
    /*---------43---------*/
    var qa= true;
    $("#qa").click(function(){ 
        if (qa==true) {
            $( "#erection").css( "height", "2000px");
            qa=false;
        }
        else {
            $( "#erection").css( "height", "50%");
            qa=true;      
        }
       
    });
    
    /*---------44---------*/
    var ra= true;
    $("#ra").click(function(){
        if (ra==true) {

            $( "body" ).css( "-webkit-filter", "grayscale(100%)");
            $( "body" ).css( "filter", "grayscale(100%)");
            
            
            ra=false;
        }
        else {
            $( "body" ).css( "-webkit-filter", "grayscale(0%)");
            $( "body" ).css( "filter", "grayscale(0%)");
            
            ra=true;
        }    
    });
    
    /*---------45---------*/
    var sa= true;
    $("#sa").click(function(){ 
        if (sa==true) {
            $( "#rect" ).css( "-webkit-transform", "rotate(135deg)");
            $( "#rect" ).css( "-ms-transform", "rotate(135deg)");
            $( "#rect" ).css( "transform", "rotate(135deg)");
            $( "#rect" ).css( "top", "30%");
            $( "#rect" ).css( "left", "40%");    
            sa=false;
        }
        else {
            $( "#rect" ).css( "-webkit-transform", "rotate(0deg)");
            $( "#rect" ).css( "-ms-transform", "rotate(0deg)");
            $( "#rect" ).css( "transform", "rotate(0deg)");
        
            sa=true;      
        }
    });
    
    /*---------46---------*/
    var ta= true;
    $("#ta").click(function(){ 
        if (ta==true) {
            $( "#pass1" ).animate({"width":"230%"}, 1200);
            $( "#pass2" ).delay( 1200 ).animate({"width":"140%"}, 1000);
            ta=false;
        }
        else {
            $( "#pass2" ).animate({"width":"0%"}, 1000);
            $( "#pass1" ).delay( 1200 ).animate({"width":"0%"}, 1200);
            ta=true;      
        }
    });
    
    /*---------47---------*/
    var ua= true;
    var rll=70;
    $("#ua").click(function(){ 
        if (ua==true) {
            if (Math.random()>.5) {
                rll=70;
            }
            else {
                rll=-70;
            }
            $( "#tilt" ).css("-ms-transform", "skewX(" + rll + "deg)");
            $( "#tilt" ).css("-webkit-transform", "skewX(" + rll + "deg)");
            $( "#tilt" ).css("transform", "skewX(" + rll + "deg)");
            $( "#tilt" ).css( "top", "10%");
            $( "#tilt" ).css( "left", "30%");    
            ua=false;
        }
        else {
            $( "#tilt" ).css("-ms-transform", "skewX(0deg)");
            $( "#tilt" ).css("-webkit-transform", "skewX(0deg)");
            $( "#tilt" ).css("transform", "skewX(0deg)");
            ua=true;      
        }
    });
    
    /*---------49---------*/
    var wa= true;
    $("#wa").click(function(){
        if (wa==true) {
            $( "#font" ).css( "font-family", "sans-serif");
        
            wa=false;
        }
        else {
            $( "#font" ).css( "font-family", "Helvetica");
            
            wa=true;
        }    
    });
    
    /*---------50---------*/
    var xa= true;
    $("#xa").click(function(){
        if (xa==true) {
            $( "iframe" ).css( "display", "inherit");
            $( "#exit" ).html( "X");
            $( "#exit" ).addClass( "exit");
        
            xa=false;
        }
        else {
            $( "iframe" ).css( "display", "none");
            $( "#exit" ).removeClass( "exit");
            $( "#exit" ).html( "50");
            xa=true;
        }    
    });
    
    /*---------51---------*/
    var ya= true;
    $("#ya").click(function(){
        if (ya==true) {
            $( "body" ).css("cursor", "crosshair");
        
            ya=false;
        }
        else {
            $( "body" ).css( "cursor", "inherit");
            
            ya=true;
        }    
    });
    
    /*---------52---------*/
    var za= true;
    $("#za").click(function(){
        $( "body" ).animate({scrollTop: $("#fb").offset().top}, 2000);
  
    });
    
    /*---------53---------*/
    var ab= true;
    var ddd=0;
    $("#ab").click(function(){
        while (ddd<4) {
            $("#yess").delay(4000).append("S");
            ddd++;
        }
        ddd=0;
  
    });
    
    /*---------54---------*/
    var bb=true;
    $("#bb").click(function(){
        $( ".cell" ).animate({"width":"0"},800);
        $( ".cell" ).delay(1200).animate({"width":"33.33%"},800);

    });
    
    

    
});