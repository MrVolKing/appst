$(function(){
  $('#btnup').click(function(){
  	$('html,body').animate({scrollTop: 0}, 1000);
  });
});

var $win = $(window),
    $fixed = $("#btnup"),
    limit = 1;

function tgl (state) {
    $fixed.toggleClass("hidden", state);
}

$win.on("scroll", function () {
    var top = $win.scrollTop();
    
    if (top < limit) {
        tgl(true);
    } else {
        tgl(false);
    }
});