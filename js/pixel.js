
$(window).resize(function() {



   if ($(window).width() > 780) {
	   $(".flexslider").css("display","none");
	  $("#content").css("display","none");
	 }
	else
	{
		if ($("#content").css("display") == "none")
		{$(".flexslider").css("display","block");}
		 

	}
});


 $(document).ready(function(){


$('#webtn').click(function() {
	event.preventDefault();
	$('#web-overlay').css("display","block");
	$('#web-overlay').css("z-index","1001");
  $('#web-overlay').animate({
    opacity: 1,
   
    height: '100%'
  },{duration: 100,easing: 'easeOutBack'}, function() {
    // Animation complete.
  });
});

$('.service-close').click(function() {
	event.preventDefault();
	
  $('#web-overlay').animate({
    opacity: 0,
   
    height: '0%',
    
  },{duration: 100,easing: 'easeOutBack'}, function() {

  });
     
    $('#web-overlay').delay(300).css("z-index","-1");
});




	
$("#lang-es").click(function(event) {
	 
 	  event.preventDefault();
 	  $(".lang-en").css("display","none");
 	  $("#lang-en").css("border","none");
 	 
	  $(".lang-es").fadeIn('slow');
  	  $("#lang-es").css("border-bottom","2px #fff solid");
	});

$("#lang-en").click(function(event) {
	  event.preventDefault();

	  $(".lang-es").css("display","none");
	  $("#lang-es").css("border","none");
	  
	  $(".lang-en").fadeIn('slow');
 	  $("#lang-en").css("border-bottom","2px #fff solid");
	});


	

	$(".lista ul li a").click(function(event) {
	  event.preventDefault();
	  $("#content ul li").css("display","none");
	  $("#content-alt ul li").css("display","none");
	  var a = $(this).attr("href");

	  $(".servicios-alt").fadeOut('slow');
	  $(".flexslider").fadeOut('slow');

	  if ($(window).width() > 780) {
	   $("#flexslider").css("display","none");
	  $("#content").css("display","none");
	  $(a).fadeIn('slow');

	  } 
	  else{
	  	$("#content").fadeIn('slow');
	  $(a).fadeIn('slow');
	  	
	  };
	});




	$(".back").click(function(event) {
		event.preventDefault();

	  	  $("#content").fadeOut('slow');
	  	  $("#content-alt").fadeOut('slow');



		  if ($(window).width() > 780) {
		  	$(".servicios-alt").fadeIn('slow');
		  } 

		  else{
		  	$(".flexslider").fadeIn('slow');
		  };


	});

	

});


