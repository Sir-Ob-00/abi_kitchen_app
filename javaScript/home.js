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