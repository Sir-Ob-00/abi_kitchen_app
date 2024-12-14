    //JS for Humburger Menu
        // Toggle mobile menu visibility
        document.getElementById('hamburger-button').addEventListener('click', function () {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
        
        const humburger = document.getElementById('hamburger-button');
        humburger.style.marginRight = '40px';

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
        
    




    import { mealImages } from "./home_menu.js";
    
    var gridContainer = document.getElementById('grid-container');

    function displayCards(){
        mealImages.forEach((meal) => {

        var menuCard = document.createElement('div');
        var menuContent = document.createElement('div');
        var menuImage = document.createElement('img');
        var menuTitle = document.createElement('p');
        
        menuCard.className = 'card';
        menuTitle.classList.add('label');
        menuTitle.style.fontSize = '200';

        menuImage.src = meal.image;
        menuTitle = meal.title;
        menuContent.append(menuImage);
        menuContent.append(menuTitle);
        menuCard.append(menuContent);
        gridContainer.append(menuCard);

        });
    };

    document.addEventListener('DOMContentLoaded', displayCards());