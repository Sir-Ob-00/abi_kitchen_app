    //JS for Humburger Menu
        // Toggle mobile menu visibility
        document.getElementById('hamburger-button').addEventListener('click', function () {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
        
        // Toggle submenus on both large and mobile screens
        document.querySelectorAll('.dropdown > a').forEach(dropdownToggle => {
            dropdownToggle.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent the default link behavior
                const submenu = this.nextElementSibling;
                
                // Close other open submenus
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    if (menu !== submenu) {
                        menu.classList.add('hidden');
                    }
                });
        
                // Toggle the current submenu
                submenu.classList.toggle('hidden');
            });
        });
        
        // Close submenus when clicking outside (for larger screens)
        document.addEventListener('click', function (event) {
            const isClickInsideMenu = event.target.closest('.dropdown');
            if (!isClickInsideMenu && window.innerWidth >= 768) {
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.classList.add('hidden');
                });
            }
        });
        
        
    //JS for slide
        
                let currentIndex = 0;
                const slides = document.querySelectorAll("#slider > div");
                const totalSlides = slides.length;
                const slider = document.getElementById("slider");
            
                // Function to slide to the next slide
                function goToNextSlide() {
                currentIndex = (currentIndex + 1) % totalSlides;
                slider.style.transform = `translateX(-${currentIndex * 100}%)`;
                }
            
                // Function to slide to the previous slide (optional if you want manual controls)
                function goToPrevSlide() {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                slider.style.transform = `translateX(-${currentIndex * 100}%)`;
                }
            
                // Set interval for automatic slide (3 seconds)
                setInterval(goToNextSlide, 3000);
            
                // Optional: Add event listeners for manual controls
                document.getElementById("next").addEventListener("click", goToNextSlide);
                document.getElementById("prev").addEventListener("click", goToPrevSlide);

            //Picture cards
            // Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const labels = document.querySelectorAll('.label');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to toggle visibility of labels based on scroll position
    function handleScroll() {
        labels.forEach(label => {
            if (isInViewport(label)) {
                label.classList.remove('opacity-0');
                label.classList.add('opacity-100');
            } else {
                label.classList.remove('opacity-100');
                label.classList.add('opacity-0');
            }
        });
    }

    // Listen for scroll and run the handler
    window.addEventListener('scroll', handleScroll);

    // Trigger the function on page load in case some labels are already in view
    handleScroll();
});
