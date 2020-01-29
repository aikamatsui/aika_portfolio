$(function () {
    var $slide = $(this).find('img'),
        silideCount = $slides.length,
        currentIndex = 0;

    $slides.eq(currentIndex).fadeIn();
    setInterval(showNextSlide, 7500);

    function showNextSlide() {
        var nextIndex = (currentIndex + 1) % slideCount;
        $silide.eq(currentIndex).fadeOut();
        $silide.eq(nextIndex).fadeIn();
        currentIndex = nextIndex;
    }
    $('.slideshow').each(function () {
        var $slides = $(this).find('img')
        slideCount = $skides.length,
            currentIndex = 0;

        setInterval(showNextSkide, 7500);

        function showNextSlide() {
            var nextIndex = (currentIndex + 1) % slideCount;
            $silide.eq(currentIndex).fadeOut();
            $silide.eq(nextIndex).fadeIn();
            currentIndex = nextIndex;
        }
    });
});
