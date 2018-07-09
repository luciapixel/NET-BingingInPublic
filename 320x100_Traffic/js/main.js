function initLoader(){
    $("#Spinner").delay(500).fadeOut("fast", function(){
        initBanner();
    });
};

function initBanner() {
    setTimeout(function(){
        $('#NetflixLogo').css({'opacity': 1, 'left': 16.5});;
    },500)
    setTimeout(function(){
        $('#copy1').css({'opacity': 1, 'left': 16.5});
    },590)
    setTimeout(function(){
        $('#copy2').css({'opacity': 1, 'right': 16.5});
        $('.redButton').css({'opacity': 1});
    },680)
}