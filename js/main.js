/**
 * CUSTOM FILE INPUTS FOR IMAGES
 *
 * Version: 1.0.0
 *
 * Custom file inputs with image preview and 
 * image file name on selection.
 */
$(document).ready(function () {

    $('input[type="file"]').each(function($i){

        // Refs
        var $file = $(this),
            $label = $file.next('label'),
            $labelText = $label.find('span'),
            labelDefault = $labelText.text();

        // When a new file is selected
        $file.on('change', function(event){
        var fileName = $file.val().split( '\\' ).pop(),
            tmppath = URL.createObjectURL(event.target.files[0]);

        //Check successfully selection
            if( fileName ){
                $label
                .addClass('file-ok')
                .css('background-image', 'url(' + tmppath + ')')
                .append("<a href='#' class='delete' data-switch='image" + ($i + 1) + "'><i id='delete' class='fa fa-trash'></i></a>");
                $labelText.text(fileName);
        } else {
            $label.removeClass('file-ok');
            $labelText.text(labelDefault);
        }
        });

    // End loop of file input elements
    });

    $(this).on('click', '.delete', function(e) {

        // Evita que la pagina trate de cargar la direccion #
        e.preventDefault();

        // Encuentra los elementos de forma dinamica
        var $tag = $(this),
            $value = $tag.data().switch,
            $parent = document.getElementById($value),
            $label = $($parent).next('label'),
            $labelText = $label.find('span'),
            $remove = $label.find('a.delete');

        // Blanquear el campo de imagenes
        $($parent).val('');

        // Reiniciar la etiqueta a su estado original
        $label
            .removeClass('file-ok')
            .css('background-image', '');

        // Elimina el elemento .delete
        $remove.remove();

        // Reiniciar el texto de la etiqueta
        $labelText.text('');

        // Bandera de funcion
        console.log('done');
    });

});
