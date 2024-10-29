
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

