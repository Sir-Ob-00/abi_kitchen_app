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





        // Elements
const submitOrderButton = document.getElementById("submitOrder");
const confirmOrderButton = document.getElementById("confirmOrder");
const orderForm = document.getElementById("orderForm");
const confirmationSection = document.getElementById("confirmationSection");
const orderSummary = document.getElementById("orderSummary");
const successMessage = document.getElementById("successMessage");

//var sucMessage =document.getElementById("successMessage");
//sucMessage.style.display = 'flex';

// Handle Submit Order Button Click
submitOrderButton.addEventListener("click", () => {
  // Collect form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const orderDetails = document.getElementById("orderDetails").value;
  const paymentMethod = document.querySelector('input[name="payment-method"]:checked')?.value;

  // Validate fields
  if (name && email && phone && address && paymentMethod) {
    // Display order summary
    orderSummary.innerHTML = `
      <strong>Name:</strong> ${name}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Phone:</strong> ${phone}<br>
      <strong>Address:</strong> ${address}<br>
      <strong>Order Details:</strong> ${orderDetails || "None"}<br>
      <strong>Payment Method:</strong> ${paymentMethod}
    `;

    // Show confirmation section
    confirmationSection.classList.remove("hidden");
    confirmationSection.scrollIntoView({ behavior: "smooth" });
  } else {
    alert("Please fill in all required fields!");
  }
});

// Handle Confirm Order Button Click
confirmOrderButton.addEventListener("click", () => {
  // Hide confirmation section
  confirmationSection.classList.add("hidden");

  // Show success message
  successMessage.classList.remove("hidden");
  successMessage.scrollIntoView({ behavior: "smooth" });
});
