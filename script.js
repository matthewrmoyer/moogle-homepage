$( document ).ready(function() {

    $("div").fadeTo("fast" , .5);
    $("a").fadeTo("fast", .5);


	   
    $("textarea").click(function(event) {
        $("div").fadeTo(500,.2);
        $("a").fadeTo(500,.2);
    });
    $("textarea").mouseleave(function() {
        $("div").fadeTo(1000, .5);
        $("a").fadeTo(1000, .5);
});

    $( "a" ).click(function( event ) {
 
        confirm( "Leave Moogle?" );
 
    });
    $("button").click(function(event){
    	    $("div").fadeTo("slow",0);
            $("a").fadeTo("slow", 0);


    });

    $(".cow").click(function(event){
        $(".cow").fadeTo("slow",0);

    });
    

    $("div").mouseover(function(){
        $(this).fadeTo("slow", 1);

    });

    $("a").mouseover(function(){
        $(this).fadeTo("fast", 1);

    });

    $("a").mouseleave(function(){
        $(this).fadeTo("fast", .5);
    });

  



 
});