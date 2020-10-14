$(document).ready(function() {
"use strict";

$('.questsion_block').on('click', function(){
  $(this).children('.questsion_block_answer').slideToggle('normal');
})

















// Библиотеки

  new WOW().init();

    $(".fancybox").fancybox({
    	    "imageScale"            : false,
            "zoomOpacity"			: true,
            "overlayShow"			: false,
            "zoomSpeedIn"			: 500,
            "zoomSpeedOut"			: 500
    });

  });
