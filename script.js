$( document ).ready(function() {


    $("div").mouseenter(function() {
        $("div").fadeTo('slow',1);
    });
    $("div").mouseleave(function() {
        $("div").fadeTo("slow", .5);
});

    $( "a" ).click(function( event ) {
 
        alert( "Thanks for visiting!" );
 
    });
    $("button").click(function(event){
    	alert("MOOOOOO");

    });





 
});