(function($){


    $.fn.plugins2 = function(a){
        var verTiempo = function(){
            var hot = $(this).closest('.tour').data('temp');
            $(this).parent().find('.results').append('<p>Hace '+ hot + 'grados. </p>');
        }
        $(this).find('.results').on('showWeather', verTiempo);
        $(this).find('li').one('click','input' ,function(e){
            e.preventDefault();
            var loc = $(this).closest('.tour').data('loc');
            $(this).parent().find('.results').append('<img src=photos/'+loc+'.jpg />');
            event.preventDefault();
            $(this).parent().find('.results').trigger('showWeather');
        })
        //$('input').trigger('click');


    }

})(jQuery);
