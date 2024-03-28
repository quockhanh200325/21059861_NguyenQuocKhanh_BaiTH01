
var images = document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.right');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery_inner img');
var gallery = document.querySelector('.gallery');

var currentIndex = 0;

function showGallery() {
    gallery.classList.add('show'); // Hiển thị gallery khi click vào hình ảnh

    if (currentIndex === 0) {
        prev.classList.add('hide');
    } else {
        prev.classList.remove('hide');
        if (currentIndex === images.length - 1) {
            next.classList.add('hide');
        } else {
            next.classList.remove('hide');
        }
    }

    updateImage();
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
    e.stopPropagation(); // thêm này vàonha
    gallery.classList.remove('show'); // Đóng gallery khi nhấn vào nút close
});

document.addEventListener('keydown', function (e) {
    e.stopPropagation();
    if (e.keyCode === 27) {
        gallery.classList.remove('show');
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