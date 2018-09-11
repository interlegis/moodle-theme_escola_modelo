/* global jQuery */
(function($) {

    $(function() {

        var carousel = $('#carrosselImagensSenado')
        $("img.lazyload").lazyload({
            event : "cliqueseta"
        });

        var carregaImagem = function() {
            carousel.find('.item.active img.lazyload').trigger("cliqueseta")
        }

        carousel.on('slid.bs.carousel', function () {
            carregaImagem();
        })

        carregaImagem();
    });

})(jQuery);
