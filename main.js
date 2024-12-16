const offset = 80;

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth' // Optional: add smooth scrolling
                });
            }
        });
    });

    // Toggle mobile menu
    const mobileMenuButton = document.querySelector(".menu-mobile");
    mobileMenuButton.addEventListener('click', function() {
        document.querySelector("header").classList.toggle("active");
    });

    // Play movie on button click
    // const movieElement = document.getElementById('movie1');
    // if (movieElement) {
    //     movieElement.play(); // Start playing the movie immediately

    //     const playButton = document.getElementById('playMovie1');
    //     playButton.addEventListener('click', function() {
    //         movieElement.play();
    //     });
    // }

    // Show and hide popup video
    // const actionButtons = document.querySelectorAll(".cta-btn");
    // actionButtons.forEach(button => {
    //     button.addEventListener('click', function() {
    //         document.querySelector(".popup").classList.add("show");
    //     });
    // });

    // const closePopupButton = document.querySelector(".close-popup");
    // closePopupButton.addEventListener('click', function() {
    //     const popupVideo = document.querySelector(".popup-video");
    //     popupVideo.classList.remove("show");
    //     if (movieElement) {
    //         movieElement.pause();
    //         movieElement.currentTime = 0; // Reset video to start
    //     }
    // });
    // const ctaBtn = document.querySelectorAll('.cta-btn');
    //     const videoPopup = document.getElementById('videoPopup');
    //     const closePopup = document.getElementById('closePopup');

    //     ctaBtn.addEventListener('click', function(event) {
    //         event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    //         videoPopup.classList.add("show"); // Hiển thị popup
    //     });

    //     closePopup.addEventListener('click', function() {
    //         videoPopup.classList.remove("show"); // Ẩn popup
    //     });

    //     // Đóng popup khi nhấp ra ngoài nội dung popup
    //     window.addEventListener('click', function(event) {
    //         if (event.target === videoPopup) {
    //             videoPopup.style.display = 'none'; // Ẩn popup
    //         }
    //     });
});