(function($){

    $.fn.ejercicio = function(a = 1){
        // 1 y 2
        $(this).find('.see-photos').on('click',function(e){
            e.preventDefault();
            $(this).siblings().filter('.photos').show();

            var fotos = $(this).siblings().find('img');
            for(var i = 0; i < fotos.length; i++){
                if(i < a){
                    fotos.eq(i).show();
                }else{
                    fotos.eq(i).hide();
                }
            }
        });

        // 3
        $('.show-photos').on('click', function(){
            $(this).parent().find('.see-photos').trigger('click');
        });

        // 4
        $('.hide-tour').on('click', function(){
            $(this).parent().fadeToggle();
        })


    }



})(jQuery);
