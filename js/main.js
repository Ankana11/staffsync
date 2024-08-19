(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


// type animation

// Function to simulate typing animation---------
function typeWriter(textElement, texts, typingSpeed, deletingSpeed, delayBetweenWords) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            textElement.innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.innerHTML = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        // Apply different color to the text during animation--------
        textElement.style.color = isDeleting ? '#1E1E1E' : '#FFFFFF';

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, delayBetweenWords);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex++;
            if (textIndex === texts.length) {
                textIndex = 0;
            }
        }

        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }

    type();
}


function addBlinkingCursor(cursorElement) {
    setInterval(() => {
        cursorElement.style.visibility = cursorElement.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }, 500);
}


const textElement = document.getElementById('typing-animation');
const cursorElement = document.querySelector('.blinking-cursor');
const texts = ['Sourcing', 'OutSourcing'];

typeWriter(textElement, texts, 150, 100, 1000);
addBlinkingCursor(cursorElement);



    // Client carousel
    $(".client-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 90,
        dots: false,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    
})(jQuery);

