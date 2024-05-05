document.addEventListener('DOMContentLoaded', function() {
    const questionForm = document.getElementById('questionForm');
    questionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const questionInput = document.getElementById('questionInput').value;
        if (questionInput.trim() !== '') {
            alert('Câu hỏi của bạn đã được gửi: ' + questionInput);
            questionForm.reset();
        } else {
            alert('Vui lòng nhập câu hỏi của bạn trước khi gửi.');
        }
    });
});

let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active = 3;
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }


    document.addEventListener('DOMContentLoaded', function() {
        var parent = document.querySelector('.splitview'),
            topPanel = parent.querySelector('.top'),
            handle = parent.querySelector('.handle'),
            skewHack = 0,
            delta = 0;
    
        if (parent.className.indexOf('skewed') != -1) {
            skewHack = 1000;
        }
    
        parent.addEventListener('mousemove', function(event) {
            delta = (event.clientX - window.innerWidth / 2) * 0.5;
    
            handle.style.left = event.clientX + delta + 'px';
    
            topPanel.style.width = event.clientX + skewHack + delta + 'px';
        });
    });