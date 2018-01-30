(function($){

    $.cuantosHay = function(){
        var eti = prompt('Introduzca la etiqueta de la que quieres saber la cantidad');
        var elems = $(eti);
        alert('Hay ' + elems.length);
        $('#act2').before('<p>'+ elems.length +('</p>'));
    }

    $.cantidadElems = function(){
        $('#act2').before('<p>' + ($('a[href]').length + $('div').length + $('p').length) + '</p>')
    }

    $.cantidadCosas = function(){
        var cosa = prompt('Inserta etiquta a buscar').trim();
        console.log(cosa);
        if(cosa == null || cosa==''){
            cosa = 'div';
        }

        $('#act2').before('<p> Etiquetas ' + cosa + ' encontradas: ' + $(cosa).length + '</p>');


    }

})(jQuery);
