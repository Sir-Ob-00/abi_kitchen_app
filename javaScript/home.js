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
        const images = document.querySelectorAll('.slider-img');
        let currentIndex = 0;

        function changeImage() {
        images[currentIndex].classList.add('opacity-0');
        images[currentIndex].classList.remove('opacity-100');

        currentIndex = (currentIndex + 1) % images.length;

        images[currentIndex].classList.remove('opacity-0');
        images[currentIndex].classList.add('opacity-100');
        }
        setInterval(changeImage, 3000);



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
