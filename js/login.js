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


        //Login aunthentication

        // Predefined credentials (for demonstration purposes)
    const validUsers = [
        { username: "admin", email: "admin@example.com", password: "pass123" },
        { username: "user1", email: "user1@example.com", password: "pass456" }
    ];
    
    // Get the form element
    const loginForm = document.getElementById("loginForm");
    
    // Add an event listener for form submission
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission
    
        // Get input values
        const loginInput = document.getElementById("loginInput").value;
        const password = document.getElementById("password").value;
    
        // Check if the login input matches either a username or an email
        const user = validUsers.find(
        user => (user.username === loginInput || user.email === loginInput) && user.password === password
        );
    
        if (user) {
        alert("Login successful!");
        window.location.href = "home.html"; // Redirect to the homepage
        } else {
        alert("Invalid username/email or password. Please try again.");
        }
    });
    