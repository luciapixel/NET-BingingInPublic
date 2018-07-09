function initLoader(){
    $("#Spinner").delay(500).fadeOut("fast", function(){
        initBanner();
    });
};

function initBanner() {
    setTimeout(function(){
        $('#NetflixLogo').css({'opacity': 1, 'left': 16});
        $('.info').css({'opacity': 1});
        $('#panel').css({'opacity': 1});
    },500)
    setTimeout(function(){
        $('#copy1').css({'opacity': 1, 'left': 16});
        timedCount();
    },590)
    setTimeout(function(){
        $('#copy2').css({'opacity': 1, 'left': 16});
        $('.redButton').css({'opacity': 1, 'right': 23.5});
    },680)
    setTimeout(function(){
        $('#footer').css({'opacity': 1});
    },730)
}

$(document).ready(function() {
    letters = "ABCDEGHIKLMNOPQRSTUVWXÉ0123 ".split("");
    current = [];
    message1 = 'CASA DE';
    message2 = 'LA MONEDA';
    message3 = '02';
    message4 = 'LA CASA';
    message5 = 'DE PAPEL';
    if(message1){
        word1 = message1.split("");
        while (word1.length < 15) {
            word1.push(" ");
        }
    }
    if(message2){
        word2 = message2.split("");
        while (word2.length < 15) {
            word2.push(" ");
        }
    }
    if(message3){
        word3 = message3.split("");
        while (word3.length < 15) {
            word3.push(" ");
        }
    }
    if(message4){
        word4 = message4.split("");
        while (word4.length < 15) {
            word4.push(" ");
        }
    }
    if(message5){
        word5 = message5.split("");
        while (word5.length < 15) {
            word5.push(" ");
        }
    }
});

var t;
function timedCount(){
    if(current != word1) clearTimeout(t);
    if(current != word2) clearTimeout(t);
    if(current != word3) clearTimeout(t);
    if(current != word4) clearTimeout(t);
    if(current != word5) clearTimeout(t);
    $('.row1 .single_letter span').each(function(index){
        current[index] = $(this).text();
        if(current[index] != word1[index]){
            var ind_array = letters.indexOf(current[index]);
            if(ind_array == 77) ind_array = -1;
            $(this).text(letters[ind_array + 1]);
        }
    })
    setTimeout(function(){
        $('.row2 .single_letter span').each(function(index){
            current[index] = $(this).text();
            if(current[index] != word2[index]){
                var ind_array = letters.indexOf(current[index]);
                if(ind_array == 77) ind_array = -1;
                $(this).text(letters[ind_array + 1]);
            }
        }) 
    },50)
    setTimeout(function(){
        $('.row3 .single_letter span').each(function(index){
            current[index] = $(this).text();
            if(current[index] != word3[index]){
                var ind_array = letters.indexOf(current[index]);
                if(ind_array == 77) ind_array = -1;
                $(this).text(letters[ind_array + 1]);
            }
        }) 
    },100)
    setTimeout(function(){
        $('.row4 .single_letter span').each(function(index){
            current[index] = $(this).text();
            if(current[index] != word4[index]){
                var ind_array = letters.indexOf(current[index]);
                if(ind_array == 77) ind_array = -1;
                $(this).text(letters[ind_array + 1]);
            }
        }) 
    },150)
    setTimeout(function(){
        $('.row5 .single_letter span').each(function(index){
            current[index] = $(this).text();
            if(current[index] != word5[index]){
                var ind_array = letters.indexOf(current[index]);
                if(ind_array == 77) ind_array = -1;
                $(this).text(letters[ind_array + 1]);
            }
        }) 
    },200)
    
    t = setTimeout("timedCount()",50);
}