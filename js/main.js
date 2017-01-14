// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navbar2').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#navbar2').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#navbar2').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

$('.back1').click(function(){
    $('#facebook').attr('src', 'images/facebook2.png');
    });

$('.back2').click(function(){
    $('#twitter').attr('src', 'images/twitter2.png');
    });

$('.back3').click(function(){
    $('#google').attr('src', 'images/google2.png');
    });

$('.back4').click(function(){
    $('#bookmark').attr('src', 'images/bookmark2.png');
    });

$('#follow').click(function(){
   $('#follow').removeClass('follow').addClass('follow-click');
    });

  $('#heart-comment').click(function(){
   $(this).find('#heart').toggleClass('fa-heart-o fa-heart').addClass("heart-red")
    });

