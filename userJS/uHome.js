        const sidebar = document.getElementById('sidebar');
        const toggleBtn = document.getElementById('sidebarToggle');

        toggleBtn.addEventListener('click', () => {
        const isHidden = sidebar.classList.contains('-translate-x-full');
        sidebar.classList.toggle('-translate-x-full');
        toggleBtn.style.left = isHidden ? '16rem' : '1.25rem'; // Adjust the button position
        toggleBtn.innerHTML = isHidden ? '<i class="fa fa-times"></i>' : '<i class="fa fa-bars"></i>';
        });

        const hamburgerButton = document.getElementById('hamburger-button');
        const mobileMenu = document.getElementById('mobile-menu');

        // Toggle the visibility of the mobile menu
        hamburgerButton.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
        });