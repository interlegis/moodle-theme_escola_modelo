/* global jQuery */

(function (global, $, undefined) {

    $(function () {

        var play     = '{"event":"command","func":"playVideo"}',
            pause    = '{"event":"command","func":"pauseVideo"}'

        $.fn.carouselVideo = function (options) {

            var iframes = this.find('iframe.yt'),
                $carousel = this

            var masks = iframes.map(function (i, obj) {
                var mask = $('<div class="ytmask">')
                return mask.appendTo($(obj).closest('.item'))
            })

            this.on('click', '.ytmask', function (e) {

                var $this = $(this)

                $carousel.carousel('pause')

                $this
                    .hide()
                    .closest('.item')
                    .find('iframe.yt')
                    .get(0)
                    .contentWindow
                    .postMessage(play, '*')

            })

            this.on('slid.bs.carousel', function () {

                $carousel.carousel('cycle')

                iframes.each(function () {
                    this.contentWindow.postMessage(pause, '*')
                })

                masks.each(function () {
                    $(this).show()
                })

            })

        }


        $('.js-carousel-ytvideo').carouselVideo()

    })

})(window, jQuery)
