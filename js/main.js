$(document).ready(function () {

	var currentLang = navigator.language;   //判断除IE外其他浏览器使用语言
	var url_string = window.location.href;
	var fromJP = getQueryString('fromJP');
	
	if(!currentLang){//判断IE浏览器使用语言
			currentLang = navigator.browserLanguage;
	}
	if(!fromJP && (currentLang == 'ja' || currentLang == 'ja-JP') && url_string.indexOf("index_jp") < 0){
		window.location="index_jp.html";
	}
  
/*========================================================================
	Header carousel
==========================================================================*/
  $('.carousel').carousel({
    interval: 5000,
	 pause: 'none'
  });

  
/*========================================================================
	Header Menu 
==========================================================================*/   
	$('.toggle-menu').jPushMenu();
		
/*========================================================================
	Owl cCarousel
==========================================================================*/		
	 $("#hireme_slide").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
	  autoPlay: true
   });	

	$("#sponsor_slide").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 5,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
	  itemsTablet : [768,3],
	  itemsMobile :	[480,1],
	  navigation : true,
	  navigationText : false,
	  pagination : false
	  
 
  });	
	 $("#testmonial_slide").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      autoPlay: 3000,
      paginationSpeed : 400,
      singleItem:true,
	  items : 1, 
	  navigation : false,
   });
		
/*========================================================================
	Wow Animation
==========================================================================*/
	$(".fancybox").fancybox();
			
/*========================================================================
	Wow Animation
==========================================================================*/
	setTimeout(function(){


		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 1000);
	
/*========================================================================
	Wow Animation
==========================================================================*/
  var wow = new WOW({
    mobile: false
  });
  wow.init();

  

});

function sendMail() {
    var link = "mailto:lin.yang@blocktecinc.com"
			 + "?subject=" + escape(document.getElementById('project-name').value)
             + escape(" from " + document.getElementById('name').value)
             + "&body=" + escape(document.getElementById('discription').value)
    ;

    window.location.href = link;
}

function getQueryString() {
	var key = false, res = {}, itm = null;
	// get the query string without the ?
	var qs = location.search.substring(1);
	// check for the key as an argument
	if (arguments.length > 0 && arguments[0].length > 1)
		key = arguments[0];
	// make a regex pattern to grab key/value
	var pattern = /([^&=]+)=([^&]*)/g;
	// loop the items in the query string, either
	// find a match to the argument, or build an object
	// with key/value pairs
	while (itm = pattern.exec(qs)) {
		if (key !== false && decodeURIComponent(itm[1]) === key)
			return decodeURIComponent(itm[2]);
		else if (key === false)
			res[decodeURIComponent(itm[1])] = decodeURIComponent(itm[2]);
	}

	return key === false ? res : null;
}
