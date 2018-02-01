(function($){


    var opts ;

    $.fn.bonito = function(opciones){

        opts = $.extend({}, $.fn.bonito.defaults, opciones);
        $(this).css({alignment:'center'});
        $(this).find('div').css({
            backgroundColor: opts.backgroundColor,
            color: opts.color,
            textAlign: opts.alineamiento,
            width: opts.ancho,

        });
        $('a').css({
            color: opts.colorletras,
        })
        $('a').hover(function(){
            $(this).css({color: opts.sobre});
        }, function(){
            $(this).css({color: opts.colorletras});
        });

        return this;
    };
    $.fn.bonito.defaults = {
        backgroundColor: 'blue',
        color: 'white',
        colorletras: 'black',
        sobre: 'white',
        velocidad: 500,
        alineamiento: 'center',
        ancho: '250px',
    };


    $.fn.desplegar = function() {

        elem = $(this);
        elem.mouseenter(function(e){
            var nu = $.extend({}, opts);
            $(this).parent().next().find('div:eq(1)').slideUp(nu.velocidad);
            $(this).parent().prev().find('div:eq(1)').slideUp(nu.velocidad);
            $(this).siblings().slideDown(nu.velocidad);

        });
       return this;
    };

        $.fn.recoger = function() {
            elem = $(this);
            var nu = $.extend({}, opts);

            elem.mouseleave(function(e){
                $(this).slideUp(nu.velocidad);
            });
            return this;
        };

        // $.fn.tipoOpPublicas.default = {
        //     ancho: {width: '200px'}
        //     clase: 'navegador';
        //     velocidad: '2000';
        // };

})(jQuery);
