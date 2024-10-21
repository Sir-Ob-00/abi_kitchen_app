
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


            //Hover functions on menu buttons
            //Function for local hot
            ocument.addEventListener('DOMContentLoaded', function() {
                document.getElementById('localHot').addEventListener('click', function() {
                  document.getElementById('targetHot').scrollIntoView({
                    behavior: 'smooth'
                  });
                });
              });

            //Function for special rice
            ocument.addEventListener('DOMContentLoaded', function() {
                document.getElementById('specialRice').addEventListener('click', function() {
                  document.getElementById('targetRice').scrollIntoView({
                    behavior: 'smooth'
                  });
                });
              });

            //Function for Favourite Stew
        document.getElementById('favStew').addEventListener('mouseenter', function() {
            document.getElementById('targetStew').scrollIntoView({
                behavior: 'smooth'
            });
            });

            //Function for Street Food
        document.getElementById('streetFood').addEventListener('mouseenter', function() {
            document.getElementById('targetStreet').scrollIntoView({
                behavior: 'smooth'
            });
            });

            //Function for Dessert
        document.getElementById('dessert').addEventListener('click', function() {
            document.getElementById('targetDessert').scrollIntoView({
                behavior: 'smooth'
            });
            });

                 //Function for Pizza
        document.getElementById('pizza').addEventListener('click', function() {
            document.getElementById('targetPizza').scrollIntoView({
                behavior: 'smooth'
            });
            });


            //Function for Noodles
        document.getElementById('noodles').addEventListener('click', function() {
            document.getElementById('targetNoodles').scrollIntoView({
                behavior: 'smooth'
            });
            });

            //Function for Local Beverage
        document.getElementById('localBev').addEventListener('click', function() {
            document.getElementById('targetBev').scrollIntoView({
                behavior: 'smooth'
            });
            });





