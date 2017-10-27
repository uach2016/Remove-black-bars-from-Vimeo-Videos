$(document).ready(function() {

	// START responsive video
	// Find all videos
	var $allVideos = $("iframe[src^='//player.vimeo.com']"),

		// The element that is fluid width
		$fluidEl = $("body");

	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {

	  $(this)
		.data('aspectRatio', this.height / this.width)

		// and remove the hard coded width/height
		.removeAttr('height')
		.removeAttr('width');

	});

	// When the window is resized
	$(window).resize(function() {

	  var newWidth = $fluidEl.width();

	  // Resize all videos according to their own aspect ratio
	  $allVideos.each(function() {

		var $el = $(this);
		$el
		  .width(newWidth)
		  .height(newWidth * $el.data('aspectRatio'));

	  });

	// Kick off one resize to fix all videos on page load
	}).resize();
	// END responsive video
	
	
	// video image switch
	$('#video').on('click', function() {
		$('#video iframe').css("display", "block");
		$('#video iframe').attr('src','https://player.vimeo.com/video/236410155?autoplay=1');
	});
});
