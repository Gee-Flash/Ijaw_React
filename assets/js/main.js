// Dark Mode
function toggleBar () {
    const themeLink = document.getElementById('themeStyle');
    const toggleIcon = document.getElementById('toggle');
    const border1 = document.getElementById('border1');
    const border2 = document.getElementById('border2');
    const border3 = document.getElementById('border3');

    if (themeLink.getAttribute('href') === './assets/css/light.css') {
        // Switch to Dark Mode
        themeLink.setAttribute('href','./assets/css/dark.css');
        toggleIcon.className='fa-solid fa-toggle-off toggleon';
        border1.src='./assets/img/shape-top-black-80.png';
        border2.src='./assets/img/shape-bottom-black-80.png';
        border3.src='./assets/img/shape-top-dark-grey-80.png';
    } else {
        // Switch to Light Mode
        themeLink.setAttribute('href','./assets/css/light.css');
        toggleIcon.className='fa-solid fa-toggle-on toggleon';
        border1.src='./assets/img/shape-top-white-80.png';
        border2.src='./assets/img/shape-bottom-white-80.png';
        border3.src='./assets/img/shape-top-grey-80.png';
    }
}

// Show the button when user scrolls down
window.onscroll = function () {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Show button when scrolled 100px
    } else {
        scrollToTopBtn.style.display = "none"; // Hide button at the top
    }
};

// Smooth scroll to the top when the button is clicked
document.querySelector('.scroll-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mouse Scroll
document.getElementById("mouseIcon").addEventListener("click", function () {
    // Scroll smoothly to the next section
    window.scrollTo({
        top: window.innerHeight, // Scroll to the next screen height
        behavior: "smooth"       // Smooth scrolling effect
    });
});

    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
          loop: true,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          nav: false,
          margin: 0,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  item: 1
              },
              1000: {
                  items: 1
              }
          }
        });
      });

