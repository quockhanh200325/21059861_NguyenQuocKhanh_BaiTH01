var images = document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.right');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery_inner img');
var gallery = document.querySelector('.gallery');

var currentIndex = 0;
var slideshowInterval; // Biến để lưu trữ interval cho slideshow
var slideshowActive = false; // Biến để kiểm tra xem slide show có đang hoạt động hay không

function showGallery() {
    gallery.classList.add('show');

    if (currentIndex === 0) {
        prev.classList.add('hide');
    } else {
        prev.classList.remove('hide');
    }

    if (currentIndex === images.length - 1) {
        next.classList.add('hide');
    } else {
        next.classList.remove('hide');
    }

    updateImage();

    
    images.forEach(function(item) {
        item.classList.add('blur');
    });

    
    if (!slideshowActive) {
        startSlideshow();
        slideshowActive = true;
    }
}

function updateImage() {
    galleryImg.src = images[currentIndex].src;
}

images.forEach((item, index) => {
    item.addEventListener('click', function (e) {
        currentIndex = index;
        showGallery();
        e.stopPropagation();
    });
});

close.addEventListener('click', function (e) {
    e.stopPropagation();
    gallery.classList.remove('show');
    
    images.forEach(function(item) {
        item.classList.remove('blur');
    });
    
    stopSlideshow();
    slideshowActive = false;
});

document.addEventListener('keydown', function (e) {
    e.stopPropagation();
    if (e.keyCode === 27) {
        gallery.classList.remove('show');
        
        images.forEach(function(item) {
            item.classList.remove('blur');
        });
        
        stopSlideshow();
        slideshowActive = false;
    }
});

prev.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        showGallery();
    }
});

next.addEventListener('click', function () {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showGallery();
    }
});


function startSlideshow() {
    slideshowInterval = setInterval(function () {
        if (currentIndex === images.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        showGallery();
    }, 3000); 
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}
