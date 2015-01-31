/*global jQuery:false */
 



$(document).ready(function($) {
 	$('ul.nav li.dropdown').hover(function() {
  $(this).children().toggleClass('dropdownMenu');
 });
/* var el = {
    newAnchor : $("<a>", {class: "link", id: "newAnchor"})
};*/
var wrapClone = $('#menu-mainmenu').clone().appendTo('.newMenu');  
	$('.newMenu #menu-mainmenu li ul').parent().append($('<a>', {class: 'toggleIcon'}));  
							   
						  
					 
            
					

 function slideLeft(){
	
    
	
	
	$('.newMenu').attr('style', 'height:0');
	 if ($('.mobileContainer').toggleClass('openLatestMenu')){
		 	//$('#pull').toggleClass('closeMenu');
			$('.newMenu').toggleClass('forOpen');
			$('#menu-mainmenu').toggleClass('openLatestMenu');
			 var menuHeight = $(window).height();
			if($('.newMenu').hasClass('forOpen')){
			$('.newMenu.forOpen').height(menuHeight);
		}
		else{
			$('.newMenu').attr('style', 'height:0px');
			}
		 }
		 $('.toggleIcon').click(function (){
		 $($(this)).prev().toggleClass("dsfsd",1000); 			
 					
		
		 });
		 
} 
		 
	 
 	   
	  
 
 		
		var section = $("body").children().nextAll("div");
	
	$('#pull').click(function (){
	//$("body").children().nextAll().wrapAll("<div class='mobileContainer'></div>");
	 if (section.parent().hasClass("mobileContainer")){
    	section.unwrap();
  } else {
    section.wrap( "<div class='mobileContainer'></div>");
  }
		$('body').toggleClass('overflowHide');
		 // $('.newMenu').attr('style', 'height:0');
					   slideLeft();
					 
					});
		
});

 