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

    $("#dark").click(function(event){
        $("#dark").html("OG Theme");
        $("html").toggleClass("blackbackground");
        $("body").toggleClass("blackbackground");



    });

  
  $( "#og" ).click(function( event ) {
 
        confirm( "Leave Moogle?" );
 
    });





    $(".searchbuttonwrapper").click(function(event){
    	    $(".logo").fadeTo("slow",0);
            $(".cow").fadeTo("slow",0);
            $("a").fadeTo("slow", 0);
            $("h2").empty();
            $(".searchbuttonwrapper").after("<h2>Searching....</h2>");
            $("#searchbutton").toggleClass("aquabackground");
            $("#searchbutton").html("Cancel");


    });

    $(".cow").click(function(event){
        $(".cow").fadeTo("slow",0);

    });
    
//need to set height & width of divs to decrease the size 
//currently mousingover anywhere below the search button makes cow light up
    $("div").mouseover(function(){
        $(this).fadeTo("slow", 1);

    });

    $("a").mouseover(function(){
        $(this).fadeTo("fast", 1);

    });

    $("a").mouseleave(function(){
        $(this).fadeTo("fast", .5);
    });

  $("#star1").click(function(event){
        document.body.style.background = "black";
    });





 
});