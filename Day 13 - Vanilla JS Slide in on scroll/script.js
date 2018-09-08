function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if(!immediate) func.apply(contect, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
}

const images = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    // Get current scroll level on page
    // Window.scrollY => distance from top of page
    images.forEach(image => {
        // Half-way through the image
        const scrollDistance = (window.scrollY + window.innerHeight) - (image.height / 2);
        // console.log('Distance: ' + scrollDistance);
        // Bottom of the image
        const imageBottom = (image.offsetTop + image.height);

        const isHalfShown = (scrollDistance > image.offsetTop);
        const notScrolledPast = (window.scrollY < imageBottom);

        (isHalfShown && notScrolledPast) ? image.classList.add('active') : image.classList.remove('active');
    });
}

window.addEventListener('scroll', debounce(checkSlide));
