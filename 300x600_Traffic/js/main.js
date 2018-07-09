function initLoader(){
    $("#Spinner").delay(500).fadeOut("fast", function(){
        initBanner();
    });
};

function initBanner() {
    setTimeout(function(){
        $('#NetflixLogo').css({'opacity': 1, 'left': 21.5});;
    },500)
    setTimeout(function(){
        $('#copy1').css({'opacity': 1, 'left': 21.5});
    },590)
    setTimeout(function(){
        $('#copy2').css({'opacity': 1, 'left': 21.5});
        $('.redButton').css({'opacity': 1, 'right': 23.5});
    },680)
    setTimeout(function(){
        $('#footer').css({'opacity': 1});
    },730)
    setTimeout(function(){
        panel();
    },1000)
}

var idDestino = document.getElementById("destino");
var idEpisodios = document.getElementById("episodios");
var idSerie = document.getElementById("serie");
function panel(){
    $('#panel .txtPanel').css({'opacity': 1});
    $('#panel .txtPanel').addClass('parpadeo');
    setTimeout(function(){
        $('#panel .txtPanel').removeClass('parpadeo');
    },1500)
    setTimeout(function(){
        $('#panel .txtPanel').css({'opacity': 0});
    },3000)
    setTimeout(function(){
        $('#direccion').css({'top': 45});
        $('#destino').css({'top': 78});
        $('#trafico').css({'top': 142});
        $('#lento').css({'top': 173});
        $('#disfruta').css({'top': 238});
        $('#episodios').css({'top': 270});
        $('#serie').css({'top': 302});
        idDestino.innerHTML = "Bilbao";
        idEpisodios.innerHTML = "4 episodios";
        idSerie.innerHTML = "de Stranger<br/><span class='span'>Things</span>";
        $('#panel .txtPanel').css({'opacity': 1});
        $('#panel .txtPanel').addClass('parpadeo');
    },3100)
    setTimeout(function(){
        $('#panel .txtPanel').removeClass('parpadeo');
    },4600)
    setTimeout(function(){
        $('#panel .txtPanel').css({'opacity': 0});
    },6100)
    setTimeout(function(){
        idDestino.innerHTML = "Navarrete";
        idEpisodios.innerHTML = "3 episodios";
        idSerie.innerHTML = "de Paquita<br/><span class='span'>Salas</span>";
        $('#panel .txtPanel').css({'opacity': 1});
        $('#panel .txtPanel').addClass('parpadeo');
    },6200)
    setTimeout(function(){
        $('#panel .txtPanel').removeClass('parpadeo');
    },7700)
    setTimeout(function(){
        $('#panel .txtPanel').css({'opacity': 0});
    },9200)
    setTimeout(function(){
        $('#direccion').css({'top': 34});
        $('#destino').css({'top': 67});
        $('#trafico').css({'top': 132});
        $('#lento').css({'top': 162});
        $('#disfruta').css({'top': 226});
        $('#episodios').css({'top': 259});
        $('#serie').css({'top': 291});
        idDestino.innerHTML = "Madrid";
        idEpisodios.innerHTML = "1 episodio";
        idSerie.innerHTML = "de Las<br/><span class='span'>Chicas del</span><br/><span class='span2'>Cable</span>";
        $('#panel .txtPanel').css({'opacity': 1});
        $('#panel .txtPanel').addClass('parpadeo');
    },9300)
    setTimeout(function(){
        $('#panel .txtPanel').removeClass('parpadeo');
    },10800)
    setTimeout(function(){
        $('#panel .txtPanel').css({'opacity': 0});
    },12300)
    setTimeout(function(){
        $('#trafico').css({'top': 162});
        $('#lento').css({'top': 194});
        $('#disfruta').css({'top': 258});
        $('#episodios').css({'top': 290});
        $('#serie').css({'top': 322});
        idDestino.innerHTML = "Casa de la<br/><span class='span'>Moneda</span>";
        idEpisodios.innerHTML = "2 episodios";
        idSerie.innerHTML = "de La Casa<br/><span class='span'>de Papel</span>";
        $('#panel .txtPanel').css({'opacity': 1});
        $('#panel .txtPanel').addClass('parpadeo');
    },12400)
    setTimeout(function(){
        $('#panel .txtPanel').removeClass('parpadeo');
    },13900)
}