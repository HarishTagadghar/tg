       
//       
//    var preloader = document.getElementById('loader');
//        function myfuncion(){
//            preloader.style.display = 'none';
//        }
//    
//  
 $(window).on("load",function(){
          $(".loader-wrapper").fadeOut("slow");
        });








    $(function(){
new WOW().init(); 

});






        
       
       
  
    function realtimeclock() {
        var rtclock = new Date();
        
        var hours = rtclock.getHours();
        var minutes = rtclock.getMinutes();
        var seconds =rtclock.getSeconds();
        
        var ampm = (hours < 12) ? "AM" : "PM" ;
        
        hours = ( hours > 12) ? hours - 12 : hours ;
        
        hours = ("0" + hours).slice(-2);
        minutes = ("0" + minutes).slice(-2);
        seconds = ("0" + seconds).slice(-2);
        
        document.getElementById("clock1").innerHTML =
            hours + "   :   " + minutes + "  <br>  " + seconds + "  " + ampm;
        var t = setTimeout(realtimeclock, 500);
        
         document.getElementById("clock2").innerHTML =
            hours + "   :   " + minutes + "  <br>  " + seconds + "  " + ampm;
        var t = setTimeout(realtimeclock, 500);
        
         document.getElementById("clock3").innerHTML =
            hours + "   :   " + minutes + "  <br>  " + seconds + "  " + ampm;
        var t = setTimeout(realtimeclock, 500);
        
         document.getElementById("clock4").innerHTML =
            hours + "   :   " + minutes + "  <br>  " + seconds + "  " + ampm;
        var t = setTimeout(realtimeclock, 500);
        
    }
    
