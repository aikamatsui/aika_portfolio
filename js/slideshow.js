$(function () {

    var $slide = $(this).find('img'),
        slideCount = $slide.length,
        currentIndex = 0;

    $slide.eq(currentIndex).fadeIn();
    setInterval(showNextSlide, 7500);

    function showNextSlide() {
        var nextIndex = (currentIndex + 1) % slideCount;
        $slide.eq(currentIndex).fadeOut();
        $slide.eq(nextIndex).fadeIn();
        currentIndex = nextIndex;
    }

    $('.slideshow').each(function () {
        var $slide = $(this).find('img')
        slideCount = $slide.length,
            currentIndex = 0;

        setInterval(showNextSlide, 7500);

        function showNextSlide() {
            var nextIndex = (currentIndex + 1) % slideCount;
            $slide.eq(currentIndex).fadeOut();
            $slide.eq(nextIndex).fadeIn();
            currentIndex = nextIndex;
        }
    });
});
