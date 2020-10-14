"use strict"; // Библиотеки

$(document).ready(function () {
  new WOW().init();
});
$(document).ready(function () {
  $(".fancybox").fancybox({
    "imageScale": false,
    "zoomOpacity": true,
    "overlayShow": false,
    "zoomSpeedIn": 500,
    "zoomSpeedOut": 500
  });
});