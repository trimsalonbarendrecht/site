'use strict';

function cycleImages() {
    var $active = $('#banner .active');
    var $next = ($active.next().length > 0) ? $active.next() : $('#banner img:first');

    $next.css('z-index', 2); // move the next image up the pile
    $active.fadeOut(1500, function() { // fade out the top image
        $active.css('z-index', 1).removeClass('active').show(); // reset the z-index and unhide the image
        $next.css('z-index', 3).addClass('active'); // make the next image the top one
    });
}

$(document).ready(function() {
    // Run every x seconds
    setInterval(cycleImages, 9000);
});
